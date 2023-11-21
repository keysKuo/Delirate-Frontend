import { MDBContainer, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { Image, Alert } from 'react-ui';
import { useState, useCallback } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import logo1 from '../../static/delirate_new.png';
import { Menu, Form } from 'semantic-ui-react';
import { Pane, FileUploader, FileCard } from 'evergreen-ui';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const apiUrl = process.env.REACT_APP_API_URL ||  'http://localhost:8080';

export default function RegisterScreen() {
    // const [msg, setMsg] = useState('');
    const [files, setFiles] = useState([]);
    const [fileRejections, setFileRejections] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        password_confirm: '',
        name: '',
        location: '',
        phone: '',
    });

    const [msg, setMsg] = useState({
        content: '',
        color: '',
    });

    const handleChange = useCallback((files) => setFiles([files[0]]), []);
    const handleRejected = useCallback((fileRejections) => setFileRejections([fileRejections[0]]), []);
    const handleRemove = useCallback(() => {
        setFiles([]);
        setFileRejections([]);
    }, []);


    const navigate = useNavigate();

    const fetchData = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append('file', files[0]); // Append the file
        formDataToSend.append('email', formData.email); // Append form data
        formDataToSend.append('password', formData.password);
        formDataToSend.append('password_confirm', formData.password_confirm);
        formDataToSend.append('name', formData.name);
        formDataToSend.append('location', formData.location);
        formDataToSend.append('phone', formData.phone);
        formDataToSend.append('role', 'customer');
        formDataToSend.append('folder', `/${formData.email}/avatar`);
        
        try {
            setIsLoading(true);
            let response = await axios.post(apiUrl + '/account/register', formDataToSend, {
                headers: {
                    'Folder-Path': `/${formData.email}/avatar`,
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log(response);
            const result = response.data;
            if (result.success) {
                setTimeout(() => {
                    setIsLoading(false);
                    navigate('/login', {
                        state: 'Please check email to activate your account.',
                    });
                }, 1000);
                
            } else {
                setTimeout(() => {
                    setIsLoading(false);
                    
                    setMsg({ ...msg, content: result.msg, color: '#C94E4E' });
                }, 1000);
            }
        } catch (error) {
            setMsg({ ...msg, content: error, color: '#C94E4E' });
        }
    };

    return (
        <>
            <Form className="form w-50 mt-5" {...(isLoading && { loading: true })}>
                <Menu widths={1}>
                    <Menu.Item className="bg-x" name="Register" />
                </Menu>
                <Image css={{ width: '350px', marginTop: '10px' }} src={logo1} />
                <MDBContainer className="p-3 d-flex flex-column w-50">
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Full name"
                        id="form1"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Email address"
                        id="form1"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Password"
                        id="form2"
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Re-enter password"
                        id="form2"
                        type="password"
                        value={formData.password_confirm}
                        onChange={(e) => setFormData({ ...formData, password_confirm: e.target.value })}
                    />

                    <MDBInput
                        wrapperClass="mb-4"
                        label="Phone"
                        id="form1"
                        type="text"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />

                    <MDBInput
                        wrapperClass="mb-4"
                        label="Location"
                        id="form1"
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />

                    <Pane Width={650}>
                        <FileUploader
                            maxSizeInBytes={50 * 1024 ** 2}
                            maxFiles={1}
                            onChange={handleChange}
                            onRejected={handleRejected}
                            renderFile={(file) => {
                                const { name, size, type } = file;
                                const fileRejection = fileRejections.find(
                                    (fileRejection) => fileRejection.file === file,
                                );
                                const { message } = fileRejection || {};
                                return (
                                    <FileCard
                                        key={name}
                                        isInvalid={fileRejection != null}
                                        name={name}
                                        onRemove={handleRemove}
                                        sizeInBytes={size}
                                        type={type}
                                        validationMessage={message}
                                    />
                                );
                            }}
                            values={files}
                        />
                    </Pane>

                    <Alert css={{ marginBottom: '10px', border: '0', color: `${msg.color}` }} variant="success">
                        {msg.content}
                    </Alert>
                    <MDBBtn onClick={fetchData} className="mb-4 bg-x">
                        Register
                    </MDBBtn>

                    <div className="text-center">
                        <p>
                            Already a member?{' '}
                            <Link style={{ color: '#71B280' }} to="/login">
                                Log in
                            </Link>
                        </p>

                        <div className="d-flex justify-content-between mx-auto" style={{ width: '40%' }}></div>
                    </div>
                </MDBContainer>
            </Form>
            <div className="py-3"></div>
        </>
    );
}
