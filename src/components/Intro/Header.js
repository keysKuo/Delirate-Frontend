
import '../../assets/intro.css';
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <div className='body'>
            <div className="navbar-intro">
            <div className="padding-global">
                <div className="container-large navbar-flex">
                    <a href="/about" className="logo-container">
                        <div className="logo-face logo-front">SUD<span className="text-green">Tech</span></div>
                        <div className="logo-face logo-back">
                            
                            <span className="text-green">SUD</span>Tech
                        </div>
                    </a>

                    <ul className="navbar-group">
                        <li className="navbar-link">
                            <div className="nav-face logo-front">Home</div>
                            <Link to="/" className="nav-face logo-back text-green">
                                
                                Home
                            </Link>
                        </li>
                        <li className="navbar-link">
                            <div className="nav-face logo-front">About</div>
                            <Link to="/about" className="nav-face logo-back text-green">
                                
                                About
                            </Link>
                        </li>
                        <li className="navbar-link">
                            <div className="nav-face logo-front">Shops</div>
                            <Link to="/shops" className="nav-face logo-back text-green">
                                
                                Shops
                            </Link>
                        </li>
                        <li className="navbar-link">
                            <div className="nav-face logo-front">Projects</div>
                            <Link to="/projects" className="nav-face logo-back text-green">
                                
                                Projects
                            </Link>
                        </li>
                        <li className="navbar-link">
                            <div className="nav-face logo-front">Contact</div>
                            <Link to="/contact" className="nav-face logo-back text-green">
                                
                                Contact
                            </Link>
                        </li>
                        <li className="navbar-link">
                            <div className="nav-face logo-front">Delirate</div>
                            <Link to="/" className="nav-face logo-back text-green">
                                
                                Delirate
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}