// Libs
import { Link } from 'react-router-dom';
import { Image, Stack } from 'react-ui';
import { useState, useEffect } from 'react';
import { Search } from 'semantic-ui-react';
import logo from '../../static/delirate_new.png';
// Css
import '../../assets/header.css';
import 'semantic-ui-css/semantic.min.css';

// Components
import Profile from './Profile';

const nav = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Shops', path: '/items' },
    { title: 'Pricing', path: '/pricing' },
    { title: 'Examples', path: '/examples' },
];

export default function Header( { isShowCart, setIsShowCart }) {
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const userJSON = localStorage.getItem('user');
        const user = JSON.parse(userJSON);
        if (user) {
            setIsLogin(
                <>
                    <Search placeholder="Search..." />
                    <Profile isShowCart={isShowCart} setIsShowCart={setIsShowCart} info={user} />
                </>,
            );
        } else {
            setIsLogin(
                <>
                    <ul className="page-nav">
                        <li>
                            <Search style={{ marginRight: '15px' }} placeholder="Search..." />
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
                </>,
            );
        }
    }, []);

    return (
        <>
            <header>
                <div id="page-header">
                    <Link style={{ fontSize: '1.7rem', color: '#fff'}} to="/">
                        <Image className="logo" css={{ width: '240px' }} src={logo} />
                        
                    </Link>
                    <ul className="page-nav">
                        {nav.map((n, index) => (
                            <li key={index}>
                                <Link to={n.path}>{n.title}</Link>
                            </li>
                        ))}
                    </ul>

                    <Stack className="user-profile" align="center" gap={2}>
                        {isLogin}
                    </Stack>
                </div>
            </header>
           
        </>
    );
}
