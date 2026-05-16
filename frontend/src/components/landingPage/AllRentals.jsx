import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BsFillGeoAltFill, BsHouseDoor } from "react-icons/bs";
import { CiDroplet } from "react-icons/ci";
import { BiFullscreen } from "react-icons/bi";

const fallbackRentals = [
    { title: 'Luxury Penthouse', price: '$2,500', location: 'Manhattan, NY', pic: 'rent1.webp', beds: 4, baths: 3, area: 2800, label: 'FOR RENT', desc: 'Stunning penthouse with panoramic city views and modern amenities.' },
    { title: 'Modern Studio', price: '$1,200', location: 'Brooklyn, NY', pic: 'rent4.jpg', beds: 1, baths: 1, area: 850, label: 'FOR RENT', desc: 'Compact and cozy studio in a vibrant neighborhood.' },
    { title: 'Cozy Cottage', price: '$1,800', location: 'Staten Island, NY', pic: 'rent3.jpg', beds: 2, baths: 1, area: 1200, label: 'FOR RENT', desc: 'Charming cottage with a private garden and peaceful surroundings.' },
    { title: 'Spacious Family Flat', price: '$3,200', location: 'Queens, NY', pic: 'rent2.jpg', beds: 3, baths: 2, area: 1800, label: 'FOR RENT', desc: 'Perfect for families, close to schools and parks.' },
    { title: 'City Center Loft', price: '$2,100', location: 'Manhattan, NY', pic: 'rent8.jpg', beds: 2, baths: 2, area: 1100, label: 'FOR RENT', desc: 'Trendy loft in the heart of the city with industrial design.' },
    { title: 'Garden Apartment', price: '$1,500', location: 'Bronx, NY', pic: 'rent6.webp', beds: 2, baths: 1, area: 950, label: 'FOR RENT', desc: 'Quiet apartment with direct access to a shared garden.' }
];

const AllRentals = () => {
    const [listData, setListData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/property-list');
                if (response?.data?.code === 200 && response.data.data.length > 0) {
                    const rentals = response?.data?.data.filter(item => item.label?.toLowerCase().includes('rent'));
                    setListData(rentals.length > 0 ? rentals : response?.data?.data);
                } else {
                    setListData(fallbackRentals);
                }
            } catch (error) {
                setListData(fallbackRentals);
            }
        };
        fetchData();
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="py-5 bg-light min-vh-100">
            <div className="container mt-5">
                <div className="text-center mb-5" data-aos="fade-down">
                    <span className="badge bg-danger-subtle text-danger mb-2">Rentals</span>
                    <h2 className="fw-bold">Places for Rent</h2>
                    <p className="text-muted">Explore our wide range of properties available for rent.</p>
                </div>
                <div className="row g-4">
                    {listData.map((item, i) => (
                        <div key={i} className="col-12 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={i * 100}>
                            <div className="card h-100 shadow-sm border-0 property">
                                <div className="position-relative">
                                    <img 
                                        src={item.pic.startsWith('http') || item.pic.includes('.') ? item.pic : `http://localhost:5000/img/${item?.pic}`} 
                                        className="card-img-top" 
                                        alt={item.title} 
                                        style={{height: '200px', objectFit: 'cover'}} 
                                        onError={(e) => { e.target.src = 'house4.jpg' }}
                                    />
                                    <span className="badge bg-success position-absolute top-0 end-0 m-2">{item.label}</span>
                                </div>
                                <div className="card-body">
                                    <h6 className="text-danger">{item.price} <small className="text-muted">/Month</small></h6>
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text text-muted small">{item.location}</p>
                                    <div className="d-flex justify-content-between text-muted small mt-3">
                                        <div><BsHouseDoor /> {item.beds} Beds</div>
                                        <div><CiDroplet /> {item.baths} Baths</div>
                                        <div><BiFullscreen /> {item.area} sqft</div>
                                    </div>
                                </div>
                                <div className="p-3 pt-0">
                                    <button className="btn btn-danger w-100 rounded-pill">Rent Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllRentals;
