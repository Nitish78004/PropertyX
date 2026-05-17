import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BsFillGeoAltFill, BsHouseDoor, BsTagFill } from "react-icons/bs";
import { CiDroplet } from "react-icons/ci";
import { BiFullscreen } from "react-icons/bi";
import Swal from 'sweetalert2';
import API_URL from '../../config';

const fallbackOffers = [
    { title: 'Skyline Luxury Flat', price: '$4,500', location: 'Dubai, UAE', pic: 'rent1.webp', beds: 3, baths: 3, area: 2500, label: 'HOT DEAL', desc: 'Exclusive offer on this high-floor luxury flat with Burj Khalifa views.' },
    { title: 'Palm Jumeirah Villa', price: '$15,000', location: 'Dubai, UAE', pic: 'rent4.jpg', beds: 5, baths: 5, area: 6000, label: 'PREMIUM', desc: 'Once-in-a-lifetime opportunity to own a beachfront villa on the Palm.' },
    { title: 'Modern Desert Oasis', price: '$3,800', location: 'Abu Dhabi, UAE', pic: 'rent3.jpg', beds: 4, baths: 4, area: 4200, label: 'DISCOUNTED', desc: 'Spacious desert home with a private pool and modern architecture.' },
    { title: 'Marina View Condo', price: '$2,800', location: 'Dubai, UAE', pic: 'rent2.jpg', beds: 2, baths: 2, area: 1500, label: 'LIMITED', desc: 'Perfect investment property with high rental yields in Dubai Marina.' },
    { title: 'Sustainable Eco-Home', price: '$1,100,000', location: 'London, UK', pic: 'rent8.jpg', beds: 4, baths: 3, area: 3000, label: 'NEW LAUNCH', desc: 'Future-proof living with zero-carbon footprint and smart technology.' },
    { title: 'Historic Townhouse', price: '$2,500,000', location: 'Paris, France', pic: 'rent6.webp', beds: 6, baths: 4, area: 5200, label: 'OFFER', desc: 'Magnificent townhouse in the heart of Paris with classic features.' }
];

const AllOffers = () => {
    const [listData, setListData] = useState([]);

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
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://propertyx-0l2i.onrender.com/api/property-list');
                if (response?.data?.code === 200 && response.data.data.length > 0) {
                    setListData(response?.data?.data);
                } else {
                    setListData(fallbackOffers);
                }
            } catch (error) {
                setListData(fallbackOffers);
            }
        };
        fetchData();
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="py-5 bg-light min-vh-100">
            <div className="container mt-5">
                <div className="text-center mb-5" data-aos="fade-down">
                    <span className="badge bg-danger text-white mb-2">Special Offers</span>
                    <h2 className="fw-bold">Exclusive Real Estate Offers</h2>
                    <p className="text-muted">Don't miss out on these limited-time deals on premium properties.</p>
                </div>
                <div className="row g-4">
                    {listData.map((item, i) => (
                        <div key={i} className="col-12 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={i * 100}>
                            <div className="card h-100 shadow-sm border-0 property">
                                <div className="position-relative">
                                    <img 
                                        src={item.pic.startsWith('http') || item.pic.includes('.') ? item.pic : `https://propertyx-0l2i.onrender.com/img/${item?.pic}`} 
                                        className="card-img-top" 
                                        alt={item.title} 
                                        style={{height: '200px', objectFit: 'cover'}} 
                                        onError={(e) => { e.target.src = 'house2.webp' }}
                                    />
                                    <div className="position-absolute top-0 start-0 m-2">
                                        <span className="badge bg-danger"><BsTagFill className="me-1"/>HOT DEAL</span>
                                    </div>
                                    <span className="badge bg-success position-absolute top-0 end-0 m-2">{item.label}</span>
                                </div>
                                <div className="card-body">
                                    <h6 className="text-danger">{item.price}</h6>
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text text-muted small">{item.location}</p>
                                    <div className="d-flex justify-content-between text-muted small mt-3">
                                        <div><BsHouseDoor /> {item.beds} Beds</div>
                                        <div><CiDroplet /> {item.baths} Baths</div>
                                        <div><BiFullscreen /> {item.area} sqft</div>
                                    </div>
                                </div>
                                <div className="p-3 pt-0">
                                    <button onClick={() => handleEnquiry(item.title)} className="btn btn-danger w-100 rounded-pill">View Offer</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllOffers;
