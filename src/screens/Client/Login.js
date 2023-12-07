import { MDBContainer, MDBInput, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';
import { Image, Alert } from 'react-ui';
import { useEffect, useState } from 'react';
import { Menu, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import logo1 from '../../static/delirate_new.png';


import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import QRLogin from '../../components/Client/QRLogin';

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8080';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState({
        content: '',
        color: '',
    });
    const [activeItem, setActiveItem] = useState('With Password');
    const [qrcode, setQrcode] = useState('');
    const [sessionToken, setSessionToken] = useState('');
    const [info, setInfo] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if(!qrcode) {
            fetchDataQR();
        }

        const fetchDataCheckQR = async () => {
            try {
                const response = await axios.get(apiUrl + `/account/checklogin_qr?token=${sessionToken}`);
                const result = response.data;
                
                if (result.success) {
                    localStorage.setItem('user', JSON.stringify(result.data));
                    window.location.href = '/';
                } else {
                    if (result.status === 301) {
                        setInfo({ ...result.data });
                    } else if (result.status === 400) {
                        window.location.href = '/login';
                        setInfo(undefined);
                    }
                }
            } catch (error) {
                console.log(error);
            }
        };
        if (location.state !== null) {
            setMsg({ content: location.state, color: 'lightgreen' });
        }

        setTimeout(() => {
            setMsg({ content: '', color: '' });
            location.state = null;
        }, 3000);

        setInterval(() => {
            if (qrcode && sessionToken) {
                fetchDataCheckQR();
            }
        }, 5000);
    }, [sessionToken]);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleItemClick = (name) => {
        setActiveItem(name);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            setIsLoading(true);
            let response = await axios.post(apiUrl + '/account/login', {
                email: email,
                password: password,
            });
            // console.log(response);
            let token = response.data.token || undefined;
            localStorage.setItem('email', email);
            if (response.data.success) {
                setTimeout(() => {
                    setIsLoading(false);
                    navigate('/confirm_otp', {
                        state: token,
                    });
                }, 1000);
                
            } else {
                setTimeout(() => {
                    setIsLoading(false);
                    
                    setMsg({ ...msg, content: response.data.msg + '!', color: '#C94E4E' });
                }, 1000);
                
            }
        } catch (error) {
            setMsg({ ...msg, content: error + '!', color: '#C94E4E' });
        }
    };

    const fetchDataQR = async () => {
        try {
            const response = await axios.get(apiUrl + '/account/login_qr');
            const result = response.data;

            if (result.success) {
                setSessionToken(result.token);
                setQrcode(result.data);
            } else {
                setMsg({ ...msg, content: result.msg + '!', color: '#C94E4E' });
            }
        } catch (error) {
            setMsg({ ...msg, content: error + '!', color: '#C94E4E' });
        }
    };

    return (
        <>
            <Form className="form w-50 mt-5" {...(isLoading && { loading: true })}>
                <Menu widths={2}>
                    <Menu.Item
                        className={`${activeItem === 'With Password' ? 'bg-x' : ''}`}
                        name="With Password"
                        active={activeItem === 'With Password'}
                        onClick={() => {
                            handleItemClick('With Password');
                        }}
                    />
                    <Menu.Item
                        className={`${activeItem === 'With QR' ? 'bg-x' : ''}`}
                        name="With QR"
                        active={activeItem === 'With QR'}
                        onClick={() => {
                            handleItemClick('With QR');
                        }}
                    />
                </Menu>
                {activeItem === 'With QR' ? (
                    <QRLogin msg={msg} qrcode={qrcode} info={info} />
                ) : (
                    <>
                        <Image css={{ width: '350px', marginTop: '10px' }} src={logo1} />
                        <MDBContainer className="p-3 my-4 d-flex flex-column w-50">
                            <MDBInput
                                wrapperClass="mb-4"
                                label="Email address"
                                id="form1"
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            <MDBInput
                                wrapperClass="mb-4"
                                label="Password"
                                id="form2"
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                            />

                            <div className="d-flex justify-content-between mb-3">
                                <MDBCheckbox  name="flexCheck" value="" id="flexCheckDefault" label="Remember me" />
                                <a style={{ color: '#71B280' }} href="!#">
                                    Forgot password?
                                </a>
                            </div>

                            <Alert css={{ marginBottom: '10px', border: '0', color: `${msg.color}` }} variant="success">
                                {msg.content}
                            </Alert>

                            <MDBBtn onClick={fetchData} className="mb-3 bg-x">
                                Sign in
                            </MDBBtn>

                            <div className="text-center">
                                <p>
                                    Not a member?{' '}
                                    <Link style={{ color: '#71B280' }} to="/register">
                                        Register
                                    </Link>
                                </p>
                                

                                <div className="d-flex justify-content-between mx-auto" style={{ width: '40%' }}></div>
                            </div>
                        </MDBContainer>
                    </>
                )}
            </Form>
            <div className="py-1"></div>
        </>
    );
}
