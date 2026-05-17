import React, { useEffect, useState } from 'react'
import { BsGeoAltFill } from "react-icons/bs";
import { AiOutlineCamera } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiDroplet } from "react-icons/ci";
import { BiFullscreen } from "react-icons/bi";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsClockHistory } from "react-icons/bs";

import axios from 'axios'
import Swal from 'sweetalert2'
import { useLocation, useNavigate, Link } from 'react-router-dom';
import API_URL, { IMAGE_URL } from '../../config';

const listings = [
    {
        title: 'New Apartment Nice View',
        price: '$38,900',
        location: 'Belmont Gardens, Chicago',
        img: 'house4.jpg',
        desc: 'Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood',
        beds: 3,
        baths: 2,
        area: 3450,
        label: 'FOR RENT'
    },
    {
        title: 'Modern Apartments',
        price: '$40,900',
        location: 'Belmont Gardens, Chicago',
        img: 'house6.jpg',
        desc: 'Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood',
        beds: 3,
        baths: 2,
        area: 3450,
        label: 'FOR RENT'
    },
    {
        title: 'Comfortable Apartment',
        price: '$30,900',
        location: 'Belmont Gardens, Chicago',
        img: 'house2.webp',
        desc: 'Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood',
        beds: 3,
        baths: 2,
        area: 3450,
        label: 'FOR RENT'
    },
    {
        title: 'Luxury villa in Rego Park',
        price: '$34,900',
        location: 'Belmont Gardens, Chicago',
        img: 'house5.webp',
        desc: 'Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood',
        beds: 3,
        baths: 2,
        area: 3450,
        label: 'FOR RENT'
    }
];



const Property = ({ isFeatured }) => {
    const location = useLocation()
    const navigate = useNavigate()
    const [listData, setListData] = useState([])
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const response = await axios.get(`${API_URL}/property-list`);
        if (response?.data?.code == 200) {
            setListData(response?.data?.data)
        }
    }
    const handleBuy = async (propertyId, propertyPrice, propertyTitle) => {
        const userData = JSON.parse(localStorage.getItem('userInfo'));
        if (!userData) {
            Swal.fire({
                title: "Login Required",
                text: "Please login to buy properties.",
                icon: "info",
                showCancelButton: true,
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login');
                }
            });
            return;
        }

        // Show Payment Modal
        const { value: formValues, isConfirmed } = await Swal.fire({
            title: "🔒 Secure Checkout",
            html: `
                <div style="text-align: left; font-family: 'Inter', sans-serif;">
                    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #dee2e6;">
                        <h6 style="margin:0; color:#333;">Property: <span style="font-weight:bold;">${propertyTitle || 'Luxury Property'}</span></h6>
                        <h4 style="margin:5px 0 0 0; color:#dc3545;">Total: ${propertyPrice || 'TBD'}</h4>
                    </div>
                    <div class="form-group mb-3">
                        <label style="font-size: 14px; font-weight: 600; color: #555;">Cardholder Name</label>
                        <input id="swal-name" class="form-control mt-1" placeholder="John Doe">
                    </div>
                    <div class="form-group mb-3">
                        <label style="font-size: 14px; font-weight: 600; color: #555;">Card Number</label>
                        <div style="position:relative;">
                            <input id="swal-card" class="form-control mt-1" placeholder="0000 0000 0000 0000" maxlength="19">
                        </div>
                    </div>
                    <div style="display: flex; gap: 15px;">
                        <div class="form-group flex-fill">
                            <label style="font-size: 14px; font-weight: 600; color: #555;">Expiry Date</label>
                            <input id="swal-exp" class="form-control mt-1" placeholder="MM/YY" maxlength="5">
                        </div>
                        <div class="form-group flex-fill">
                            <label style="font-size: 14px; font-weight: 600; color: #555;">CVV</label>
                            <input id="swal-cvv" class="form-control mt-1" type="password" placeholder="123" maxlength="3">
                        </div>
                    </div>
                </div>
            `,
            showCancelButton: true,
            confirmButtonText: 'Pay Now & Complete Purchase',
            confirmButtonColor: '#198754',
            cancelButtonText: 'Cancel',
            customClass: {
                confirmButton: 'px-4 py-2 fw-bold',
                cancelButton: 'px-4 py-2 text-dark'
            },
            preConfirm: () => {
                const name = document.getElementById("swal-name").value;
                const card = document.getElementById("swal-card").value;
                const exp = document.getElementById("swal-exp").value;
                const cvv = document.getElementById("swal-cvv").value;
                
                if (!name || !card || !exp || !cvv) {
                    Swal.showValidationMessage('Please fill all payment details');
                    return false;
                }
                if (card.length < 15) {
                    Swal.showValidationMessage('Invalid Card Number');
                    return false;
                }
                return { name, card, exp, cvv };
            }
        });

        if (isConfirmed && formValues) {
            // Show Processing
            Swal.fire({
                title: 'Processing Payment...',
                html: 'Please wait while we securely process your transaction.',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            try {
                const response = await axios.post(`${API_URL}/buy`, { userId: userData?._id, propertyId });
                
                if (response?.data?.code == 200) {
                    Swal.fire({
                        title: "Payment Successful! 🎉",
                        text: "Congratulations! " + response?.data?.message,
                        icon: 'success'
                    });
                } else {
                    Swal.fire({
                        title: "Payment Failed",
                        text: response?.data?.message,
                        icon: 'error'
                    });
                }
            } catch (error) {
                Swal.fire({
                    title: "Transaction Error",
                    text: "Something went wrong during payment processing.",
                    icon: 'error'
                });
            }
        }
    }
    const handleEnquiry = async (propertyTitle) => {
        const { value: text } = await Swal.fire({
            input: "textarea",
            inputLabel: `Enquiry for ${propertyTitle}`,
            inputPlaceholder: "Type your message here...",
            inputAttributes: {
                "aria-label": "Type your message here"
            },
            showCancelButton: true
        });
        if (text) {
            try {
                const userData = JSON.parse(localStorage.getItem('userInfo'));
                await axios.post(`${API_URL}/add-contact-us`, {
                    name: userData?.name || "Interested User",
                    email: userData?.email || "No Email Provided",
                    contact: userData?.contact || "No Contact Provided",
                    subject: `Enquiry for ${propertyTitle}`,
                    message: text
                });
                Swal.fire("Sent!", "Your enquiry has been sent to the agent.", "success");
            } catch (error) {
                Swal.fire("Error", "Failed to send enquiry.", "error");
            }
        }
    }

    return (
        <>

            <section className="py-5 bg-light" data-aos="fade-up">
                <div className="container">
                    <div className="text-center mb-4">
                        <span className="badge bg-danger-subtle text-danger mb-2">Properties</span>
                        <h2 className="fw-bold">Featured Listings</h2>
                    </div>
                    <div className="row g-4">
                        {(isFeatured ? listData.slice(0, 4) : listData).map((item, i) => (
                            <div key={i} className="col-12 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="card h-100 shadow-sm border-0 property">
                                    <div className="position-relative">
                                        <img src={`${IMAGE_URL}/${item?.pic}`} className="card-img-top" alt={item.title} />


                                        <span className="badge bg-success position-absolute top-0 end-0 m-2">{item.label}</span>
                                        <div className="position-absolute bottom-0 text-white d-flex justify-content-between w-100 p-2" style={{ background: 'rgba(0,0,0,0.5)' }}>
                                            <small><BsGeoAltFill />{item.location}</small>
                                            <small><AiOutlineCamera />4 <i className="bi bi-box me-1 ms-2"></i>2</small>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h6 className="text-danger">{item.price} <small className="text-muted">/Month</small></h6>
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text text-muted small">{item.desc}</p>
                                        <div className="d-flex justify-content-between text-muted small">
                                            <div><BsHouseDoor />{item.beds} Bedrooms</div>
                                            <div><CiDroplet />{item.baths} Bathrooms</div>
                                            <div><BiFullscreen />{item.area} sqft</div>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2 mx-3 mb-3">
                                        <button onClick={() => handleEnquiry(item?.title)} className='btn btn-outline-danger flex-fill small'>Enquiry</button>
                                        {(() => {
                                            const userData = JSON.parse(localStorage.getItem('userInfo'));
                                            if (isFeatured) {
                                                return <Link to="/property" className="btn btn-outline-danger btn-sm w-100 rounded-pill text-decoration-none text-center">View All</Link>;
                                            }
                                            return (
                                                <div className="d-flex justify-content-between align-items-center w-100">
                                                    {userData?.userType === 'user' && (
                                                        <button 
                                                            className="btn btn-danger btn-sm px-4 rounded-pill fw-bold"
                                                            onClick={() => handleBuy(item._id, item.price, item.title)}
                                                        >
                                                            Buy Now
                                                        </button>
                                                    )}
                                                    {userData?.userType === 'seller' && (
                                                        <span className="badge bg-secondary rounded-pill px-3 py-2 small">Seller Mode</span>
                                                    )}
                                                    {!userData && (
                                                         <button 
                                                            className="btn btn-danger btn-sm px-4 rounded-pill fw-bold"
                                                            onClick={() => handleBuy(item._id, item.price, item.title)}
                                                        >
                                                            Buy Now
                                                        </button>
                                                    )}
                                                </div>
                                            );
                                        })()}
                                    </div>
                                    <div className="card-footer bg-white d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="3.jpg_2.jpeg"
                                                style={{ height: 30, width: 30 }}
                                                className="rounded-circle me-2"
                                                alt="agent" />
                                            <div>
                                                <div className="fw-semibold small">Nitish Singh</div>
                                                <div className="text-muted small">Estate Agents</div>
                                            </div>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <BsArrowsAngleExpand />
                                            <IoMdHeartEmpty />
                                            <BsClockHistory />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Property;