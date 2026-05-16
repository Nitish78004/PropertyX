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

                        {/* Logo & Contact Info */}
                        <div className="col-md-3 mb-4">
                            <h4 className="text-danger mb-2">
                                <i className="me-2"><LuHouse /></i>Quirex
                            </h4>
                            <p>Lorem Ipsum is simply dummy text of the typesetting industry.</p>
                            <ul className="list-unstyled small">
                                <li><BsGeoAlt /> Uttar Pradesh, India</li>
                                <li><BsTelephoneInbound /> +91 780045XXXX</li>
                                <li><BsEnvelope /> nknitishsingh91@gmail.com</li>
                            </ul>
                            <div className="d-flex gap-3 mt-3">
                                <SlSocialFacebook />
                                <CiTwitter />
                                <CiLinkedin />
                                <FiYoutube />
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