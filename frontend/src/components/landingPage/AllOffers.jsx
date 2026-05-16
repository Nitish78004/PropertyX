import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BsFillGeoAltFill, BsHouseDoor, BsTagFill } from "react-icons/bs";
import { CiDroplet } from "react-icons/ci";
import { BiFullscreen } from "react-icons/bi";

const AllOffers = () => {
    const [listData, setListData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:5000/api/property-list');
            if (response?.data?.code === 200) {
                // For "Offers", we can show properties with special labels or just the most recent ones
                setListData(response?.data?.data);
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
                                    <img src={`http://localhost:5000/img/${item?.pic}`} className="card-img-top" alt={item.title} style={{height: '200px', objectFit: 'cover'}} />
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
                                    <button className="btn btn-danger w-100 rounded-pill">View Offer</button>
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
