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

    const navLinkClass = "nav-link text-dark fw-bold px-3 py-2 rounded-pill hover-effect mx-1";

    const commonNavItems = (
        <ul className="navbar-nav gap-2">
            <li className="nav-item"><Link className={navLinkClass} to="/">Home</Link></li>
            <li className="nav-item"><Link className={navLinkClass} to="/about">About Us</Link></li>
            <li className="nav-item"><Link className={navLinkClass} to="/services">Services</Link></li>
            <li className="nav-item"><Link className={navLinkClass} to="/property">Properties</Link></li>
        </ul>
    );

    const adminNavItems = (
        <ul className="navbar-nav gap-1">
            <li className="nav-item"><Link className={navLinkClass} to="/admin-add">Add</Link></li>
            <li className="nav-item"><Link className={navLinkClass} to="/admin-list">List</Link></li>
            <li className="nav-item"><Link className={navLinkClass} to="/admin-sold">Sold</Link></li>
            <li className="nav-item"><Link className={navLinkClass} to="/admin-user">Users</Link></li>
            <li className="nav-item"><Link className={navLinkClass} to="/admin-profile">Profile</Link></li>
            <li className="nav-item"><Link className={navLinkClass} to="/admin-contact">Msgs</Link></li>
        </ul>
    );

    const userNavItems = (
        <ul className="navbar-nav gap-2">
            <li className="nav-item"><Link className={navLinkClass} to="/user-property">Browse</Link></li>
            <li className="nav-item"><Link className={navLinkClass} to="/user-bought">Bought</Link></li>
            <li className="nav-item"><Link className={navLinkClass} to="/user-profile">Profile</Link></li>
        </ul>
    );

    return (
        <nav className="navbar navbar-expand-lg fixed-top py-3 bg-transparent" style={{ zIndex: 1050 }}>
            <div className="container-lg bg-white shadow-lg rounded-pill px-4 py-2 floating-nav" 
                 style={{ 
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    background: 'rgba(255, 255, 255, 0.96)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    maxWidth: '90%'
                 }}>
                <div className="container-fluid d-flex align-items-center justify-content-between px-0">
                    {brandLogo}
                    
                    {/* Desktop Menu */}
                    <div className="collapse navbar-collapse justify-content-center d-none d-lg-flex" id="navbarNav">
                        {userData?.userType === "admin" ? adminNavItems : 
                         userData?.userType === "user" ? userNavItems : 
                         commonNavItems}
                    </div>

                    {/* Desktop Auth Buttons & Mobile Toggler Container */}
                    <div className="d-flex align-items-center gap-2">
                        <div className="d-none d-lg-flex align-items-center gap-2">
                            {userData ? logoutButton : (
                                <>
                                    <Link to='/register' className="btn btn-outline-danger btn-sm px-4 rounded-pill fw-bold border-2">Register</Link>
                                    <Link to='/login' className="btn btn-danger btn-sm px-4 rounded-pill fw-bold shadow-sm">Login</Link>
                                </>
                            )}
                        </div>

                        {/* Professional Hamburger Icon for Mobile */}
                        <button 
                            className="navbar-toggler border-0 shadow-none d-lg-none p-2" 
                            type="button" 
                            data-bs-toggle="offcanvas" 
                            data-bs-target="#offcanvasNavbar"
                            aria-controls="offcanvasNavbar"
                        >
                            <div style={{ width: '24px', height: '2px', backgroundColor: '#dc3545', margin: '5px 0', borderRadius: '2px' }}></div>
                            <div style={{ width: '16px', height: '2px', backgroundColor: '#dc3545', margin: '5px 0', borderRadius: '2px', marginLeft: '8px' }}></div>
                            <div style={{ width: '24px', height: '2px', backgroundColor: '#dc3545', margin: '5px 0', borderRadius: '2px' }}></div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Professional Mobile Sidebar (Offcanvas) */}
            <div className="offcanvas offcanvas-end border-0" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{ width: '300px', borderRadius: '24px 0 0 24px' }}>
                <div className="offcanvas-header border-bottom py-4 px-4">
                    <h5 className="offcanvas-title fw-bold text-danger d-flex align-items-center" id="offcanvasNavbarLabel">
                         <img src="favicon.png" alt="Logo" style={{ height: '32px' }} className="me-2" />
                         QUIREX
                    </h5>
                    <button type="button" className="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body p-4 d-flex flex-column">
                    <div className="mb-4 flex-grow-1">
                        <small className="text-muted text-uppercase fw-bold letter-spacing-1 mb-3 d-block opacity-75">Navigation</small>
                        <div className="mobile-nav-links">
                             {userData?.userType === "admin" ? adminNavItems : 
                              userData?.userType === "user" ? userNavItems : 
                              commonNavItems}
                        </div>
                    </div>
                    
                    <div className="mt-auto border-top pt-4 pb-2">
                         <small className="text-muted text-uppercase fw-bold letter-spacing-1 mb-3 d-block opacity-75">Account Access</small>
                         {userData ? (
                            <button className="btn btn-danger w-100 rounded-pill fw-bold py-3 shadow-sm mb-2" onClick={handleLogout}>LogOut Account</button>
                        ) : (
                            <div className="d-grid gap-3">
                                <Link to='/login' className="btn btn-danger rounded-pill fw-bold py-3 shadow" data-bs-dismiss="offcanvas">Login Now</Link>
                                <Link to='/register' className="btn btn-outline-danger rounded-pill fw-bold py-3" data-bs-dismiss="offcanvas">Create Account</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;