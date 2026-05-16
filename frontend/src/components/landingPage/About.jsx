import React from 'react'
import { FaCarSide } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { FiSquare } from "react-icons/fi";

import { useLocation } from 'react-router-dom';
const About = () => {
    const location = useLocation();
    return (
        <>

            <div className="container py-5">
                <div className="row align-items-center">
                    {/* Left Section */}
                    <div className="col-md-6" data-aos="fade-right">
                        <span className="badge bg-light text-danger px-3 py-2 mb-2 fw-semibold">About Us</span>
                        <h2 className="fw-bold">Today Sells Properties</h2>
                        <p className="text-muted">
                            Houzez allows you to design unlimited panels and real estate <br /> custom forms
                            to capture leads and keep record of all information.
                        </p>

                        <ul className="list-unstyled text-muted">
                            <li><i className="text-danger me-2">—</i> Live Music Concerts at Luviana</li>
                            <li><i className="text-danger me-2">—</i> Our Secret Island Boat Tour is Just for You</li>
                            <li><i className="text-danger me-2">—</i> Live Music Concerts at Luviana</li>
                            <li><i className="text-danger me-2">—</i> Live Music Concerts at Luviana</li>
                        </ul>

                        <div className="d-flex flex-wrap mt-3">
                            <div className="me-4 mb-2 text-center">
                                <h5 className="mb-0 fw-bold">3 <FaBed /></h5>
                                <small className="text-muted">Bedrooms</small>
                            </div>
                            <div className="me-4 mb-2 text-center">
                                <h5 className="mb-0 fw-bold">2 <FaBath /></h5>
                                <small className="text-muted">Bathrooms</small>
                            </div>
                            <div className="me-4 mb-2 text-center">
                                <h5 className="mb-0 fw-bold">2 <FaCarSide /></h5>
                                <small className="text-muted">Car Parking</small>
                            </div>
                            <div className="mb-2 text-center">
                                <h5 className="mb-0 fw-bold">3450 <FiSquare /></h5>
                                <small className="text-muted">Square Ft</small>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-4">
                                <img
                                    src="livingroom.jpg"
                                    style={{ height: "255px", width: "100%", objectFit: "cover" }}
                                    className="img-fluid rounded mb-3"
                                    alt="Living Room" />
                            </div>
                            <div className="col-md-4">
                                <img
                                    src="kitchen.jpg"
                                    style={{ height: "255px", width: "100%", objectFit: "cover" }}
                                    className="img-fluid rounded mb-3"
                                    alt="Living Room" />
                            </div>
                            <div className="col-md-4">
                                <img
                                    src="room.jpg"
                                    style={{ height: "255px", width: "100%", objectFit: "cover" }}
                                    className="img-fluid rounded mb-3"
                                    alt="Living Room" />
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="col-md-6 mt-4 mt-md-0" data-aos="fade-left">
                        <div className="row g-2">
                            <div className="col-12">
                                <img
                                    src="lhouse.jpeg"
                                    className="img-fluid rounded"
                                    alt="Main"
                                />
                            </div>
                            <div className="col-6">
                                <img
                                    src="bathroom.jpg"
                                    style={{ height: "200px", width: "100%", objectFit: "cover" }}
                                    className="img-fluid rounded"
                                    alt="Kitchen"
                                />
                            </div>
                            <div className="col-6">
                                <img
                                    src="bedroom.webp"
                                    style={{ height: "200px", width: "100%", objectFit: "cover" }}
                                    className="img-fluid rounded"
                                    alt="Exterior"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About