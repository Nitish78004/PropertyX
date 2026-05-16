import { Link } from 'react-router-dom';
import { TiMail } from "react-icons/ti";
import { IoLocationOutline } from "react-icons/io5";
import { SlSocialFacebook } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";

const NavBar = ({ userData, handleLogout }) => {
    const brandLogo = (
        <Link to="/" className="navbar-brand text-danger fw-bold d-flex align-items-center">
            <img src="favicon.png" alt="Logo" style={{ height: '28px' }} className="me-2" />
            <span style={{ fontSize: '1.2rem', letterSpacing: '1px' }}>QUIREX</span>
        </Link>
    );

    const logoutButton = (
        <div className="d-flex align-items-center">
            <button className="btn btn-danger btn-sm px-4 rounded-pill shadow-sm fw-bold" onClick={handleLogout}>LogOut</button>
        </div>
    );

    const navLinkClass = "nav-link text-dark fw-bold px-3 py-2 rounded-3 hover-effect";

    const commonNavItems = (
        <ul className="navbar-nav gap-1">
            <li className="nav-item"><Link className={navLinkClass} to="/">Home</Link></li>
            <li className="nav-item"><Link className={navLinkClass} to="/about">About Us</Link></li>
            <li className="nav-item"><Link className={navLinkClass} to="/services">Services</Link></li>
            <li className="nav-item"><Link className={navLinkClass} to="/property">Properties</Link></li>
        </ul>
    );

    const adminNavItems = (
        <ul className="navbar-nav gap-1">
            <li className="nav-item"><Link className={navLinkClass} to="/admin-add">Add Property</Link></li>
            <li className="nav-item"><Link className={navLinkClass} to="/admin-list">Properties</Link></li>
            <li className="nav-item"><Link className={navLinkClass} to="/admin-sold">Sold</Link></li>
            <li className="nav-item"><Link className={navLinkClass} to="/admin-user">Users</Link></li>
            <li className="nav-item"><Link className={navLinkClass} to="/admin-profile">Profile</Link></li>
            <li className="nav-item"><Link className={navLinkClass} to="/admin-contact">Messages</Link></li>
        </ul>
    );

    const userNavItems = (
        <ul className="navbar-nav gap-1">
            <li className="nav-item"><Link className={navLinkClass} to="/user-property">Browse</Link></li>
            <li className="nav-item"><Link className={navLinkClass} to="/user-bought">My Purchases</Link></li>
            <li className="nav-item"><Link className={navLinkClass} to="/user-profile">Profile</Link></li>
        </ul>
    );

    return (
        <nav className="navbar navbar-expand-lg fixed-top py-4 bg-transparent" style={{ zIndex: 1050 }}>
            <div className="container bg-white shadow rounded-pill px-4 py-2 floating-nav" 
                 style={{ 
                    transition: 'all 0.3s ease',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(15px)',
                    border: '1px solid rgba(0,0,0,0.1)'
                 }}>
                <div className="container-fluid d-flex align-items-center justify-content-between">
                    {brandLogo}
                    
                    <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <div style={{ width: '22px', height: '2px', backgroundColor: '#dc3545', margin: '4px 0', borderRadius: '2px' }}></div>
                        <div style={{ width: '16px', height: '2px', backgroundColor: '#dc3545', margin: '4px 0', borderRadius: '2px', marginLeft: '6px' }}></div>
                        <div style={{ width: '22px', height: '2px', backgroundColor: '#dc3545', margin: '4px 0', borderRadius: '2px' }}></div>
                    </button>

                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <div className="mobile-menu-wrapper py-3">
                            {userData?.userType === "admin" ? adminNavItems : 
                             userData?.userType === "user" ? userNavItems : 
                             commonNavItems}
                            
                            <div className="d-lg-none mt-4 text-center">
                                 {userData ? (
                                    <button className="btn btn-danger px-5 rounded-pill fw-bold shadow-sm" onClick={handleLogout}>LogOut</button>
                                ) : (
                                    <div className="d-flex flex-column gap-3 align-items-center">
                                        <Link to='/login' className="btn btn-danger px-5 rounded-pill fw-bold shadow-sm w-75">Login</Link>
                                        <Link to='/register' className="btn btn-outline-danger px-5 rounded-pill fw-bold w-75">Register</Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="d-none d-lg-flex align-items-center gap-2">
                        {userData ? logoutButton : (
                            <>
                                <Link to='/register' className="btn btn-outline-danger btn-sm px-3 rounded-pill fw-bold">Register</Link>
                                <Link to='/login' className="btn btn-danger btn-sm px-3 rounded-pill fw-bold shadow-sm">Login</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;