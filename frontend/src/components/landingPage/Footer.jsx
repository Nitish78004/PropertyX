import React from 'react'
import { LuHouse } from "react-icons/lu";
import { BsGeoAlt } from "react-icons/bs";
import { BsTelephoneInbound } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { SlSocialFacebook } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";
import { BsFillSendFill } from "react-icons/bs";
import paymentImage from '../../../src/assets/payment-4.png'
const Footer = () => {
    return (
        <>
            <footer className="bg-dark text-light pt-5 pb-3">
                <div className="container">
                    <div className="row text-start">

                        {/* Top Large Contact Section */}
                        <div className="col-12 mb-5">
                            <div className="row g-4 text-center">
                                <div className="col-md-4" data-aos="fade-up">
                                    <a href="mailto:nknitishsingh91@gmail.com" className="text-decoration-none h-100 d-block">
                                        <div className="p-4 rounded-4 bg-secondary bg-opacity-10 h-100 hover-danger transition-all">
                                            <BsEnvelope className="fs-1 text-danger mb-3" />
                                            <h5 className="fw-bold text-dark">Email Us</h5>
                                            <p className="mb-0 text-muted">nknitishsingh91@gmail.com</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                                    <a href="https://maps.google.com/?q=Uttar+Pradesh,+India" target="_blank" rel="noopener noreferrer" className="text-decoration-none h-100 d-block">
                                        <div className="p-4 rounded-4 bg-secondary bg-opacity-10 h-100 hover-danger transition-all">
                                            <BsGeoAlt className="fs-1 text-danger mb-3" />
                                            <h5 className="fw-bold text-dark">Our Location</h5>
                                            <p className="mb-0 text-muted">Uttar Pradesh, India</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                                    <a href="tel:+917800450000" className="text-decoration-none h-100 d-block">
                                        <div className="p-4 rounded-4 bg-secondary bg-opacity-10 h-100 hover-danger transition-all">
                                            <BsTelephoneInbound className="fs-1 text-danger mb-3" />
                                            <h5 className="fw-bold text-dark">Call Us</h5>
                                            <p className="mb-0 text-muted">+91 780045XXXX</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Logo & About */}
                        <div className="col-md-3 mb-4">
                            <h4 className="text-danger mb-3 fw-bold">
                                <LuHouse className="me-2" />PropertyX
                            </h4>
                            <p className="text-muted small">Your trusted partner in finding the perfect home. We provide premium real estate services tailored to your needs.</p>
                            <div className="d-flex gap-3 mt-4">
                                <a href="#" className="btn btn-outline-light btn-sm rounded-circle"><SlSocialFacebook /></a>
                                <a href="#" className="btn btn-outline-light btn-sm rounded-circle"><CiTwitter /></a>
                                <a href="#" className="btn btn-outline-light btn-sm rounded-circle"><CiLinkedin /></a>
                                <a href="#" className="btn btn-outline-light btn-sm rounded-circle"><FiYoutube /></a>
                            </div>
                        </div>

                        {/* Company Links */}
                        <div className="col-md-2 mb-4">
                            <h6 className="fw-bold">Company</h6>
                            <ul className="list-unstyled">
                                <li>About</li>
                                <li>Blog</li>
                                <li>All Products</li>
                                <li>Locations Map</li>
                                <li>FAQ</li>
                                <li>Contact us</li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="col-md-2 mb-4">
                            <h6 className="fw-bold">Services</h6>
                            <ul className="list-unstyled">
                                <li>Order Tracking</li>
                                <li>Wish List</li>
                                <li>Login</li>
                                <li>My Account</li>
                                <li>Terms & Conditions</li>
                                <li>Promotional Offers</li>
                            </ul>
                        </div>

                        {/* Customer Care */}
                        <div className="col-md-2 mb-4">
                            <h6 className="fw-bold">Customer Care</h6>
                            <ul className="list-unstyled">
                                <li>Login</li>
                                <li>My Account</li>
                                <li>Wish List</li>
                                <li>Order Tracking</li>
                                <li>FAQ</li>
                                <li>Contact us</li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="col-md-3 mb-4">
                            <h6 className="fw-bold">Newsletter</h6>
                            <p>Subscribe to our weekly Newsletter and receive updates via email.</p>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Email*" />
                                <button className="btn btn-danger" type="button">
                                    <BsFillSendFill />
                                </button>
                            </div>
                            <p className="mt-3">We Accept</p>
                            <img
                                src={paymentImage}
                                alt="Payment Methods"
                                width="200"
                            />
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="border-top pt-3 d-flex justify-content-between small">
                        <span>All Rights Reserved © Company 2024</span>
                        <span>
                            <a href="#" className="text-light me-3">Terms & Conditions</a>
                            <a href="#" className="text-light me-3">Claim</a>
                            <a href="#" className="text-light">Privacy & Policy</a>
                        </span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer