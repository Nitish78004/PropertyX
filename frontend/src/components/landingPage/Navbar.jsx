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
                    
                    {/* Professional Hamburger Icon for Mobile */}
                    <button 
                        className="navbar-toggler border-0 shadow-none d-lg-none p-2" 
                        type="button" 
                        data-bs-toggle="offcanvas" 
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                    >
                        <div style={{ width: '22px', height: '2px', backgroundColor: '#dc3545', margin: '4px 0', borderRadius: '2px' }}></div>
                        <div style={{ width: '16px', height: '2px', backgroundColor: '#dc3545', margin: '4px 0', borderRadius: '2px', marginLeft: '6px' }}></div>
                        <div style={{ width: '22px', height: '2px', backgroundColor: '#dc3545', margin: '4px 0', borderRadius: '2px' }}></div>
                    </button>

                    {/* Desktop Menu */}
                    <div className="collapse navbar-collapse justify-content-center d-none d-lg-flex" id="navbarNav">
                        {userData?.userType === "admin" ? adminNavItems : 
                         userData?.userType === "user" ? userNavItems : 
                         commonNavItems}
                    </div>

                    {/* Desktop Auth Buttons */}
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

            {/* Professional Mobile Side Menu (Offcanvas) */}
            <div className="offcanvas offcanvas-end border-0 d-lg-none" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{ width: '280px' }}>
                <div className="offcanvas-header border-bottom py-4">
                    <h5 className="offcanvas-title fw-bold text-danger d-flex align-items-center" id="offcanvasNavbarLabel">
                         <img src="favicon.png" alt="Logo" style={{ height: '28px' }} className="me-2" />
                         QUIREX
                    </h5>
                    <button type="button" className="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body p-4 d-flex flex-column">
                    <div className="mobile-nav-links mb-4">
                        <small className="text-muted text-uppercase fw-bold mb-3 d-block" style={{ letterSpacing: '1px' }}>Menu</small>
                        {userData?.userType === "admin" ? adminNavItems : 
                         userData?.userType === "user" ? userNavItems : 
                         commonNavItems}
                    </div>
                    
                    <div className="mt-auto border-top pt-4">
                        <small className="text-muted text-uppercase fw-bold mb-3 d-block" style={{ letterSpacing: '1px' }}>Account</small>
                         {userData ? (
                            <button className="btn btn-danger w-100 rounded-pill fw-bold py-2 shadow-sm" onClick={handleLogout}>LogOut</button>
                        ) : (
                            <div className="d-grid gap-3">
                                <Link to='/login' className="btn btn-danger rounded-pill fw-bold py-2 shadow-sm" data-bs-dismiss="offcanvas">Login</Link>
                                <Link to='/register' className="btn btn-outline-danger rounded-pill fw-bold py-2" data-bs-dismiss="offcanvas">Register</Link>
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