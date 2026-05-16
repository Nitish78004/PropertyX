import React from 'react'
import { Link } from 'react-router-dom';

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
        <div className="fixed-top w-100" style={{ zIndex: 1050 }}>
            <div className="container mt-3">
                <nav className="navbar navbar-expand-lg bg-white shadow rounded-pill py-2 px-4 floating-nav" style={{ transition: 'all 0.3s ease' }}>
                <div className="container-fluid">
                    {brandLogo}
                    
                    <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        {userData?.userType === "admin" ? adminNavItems : 
                         userData?.userType === "user" ? userNavItems : 
                         commonNavItems}
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
            </nav>
            
            {/* Mobile Logout/Login - Shown inside collapse for mobile */}
            <div className="collapse navbar-collapse d-lg-none bg-white rounded-4 shadow mt-2 p-3" id="navbarNav">
                {userData ? (
                    <button className="btn btn-danger w-100 rounded-pill fw-bold" onClick={handleLogout}>LogOut</button>
                ) : (
                    <div className="d-grid gap-2">
                        <Link to='/login' className="btn btn-danger rounded-pill fw-bold">Login</Link>
                        <Link to='/register' className="btn btn-outline-danger rounded-pill fw-bold">Register</Link>
                    </div>
                )}
            </div>
            </div>
        </div>
    );
}

export default NavBar;