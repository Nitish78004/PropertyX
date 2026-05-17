import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BsFillGeoAltFill, BsHouseDoor } from "react-icons/bs";
import { CiDroplet } from "react-icons/ci";
import { BiFullscreen } from "react-icons/bi";

const fallbackSales = [
    { title: 'Golden Gate Villa', price: '$850,000', location: 'San Francisco, CA', pic: 'rent1.webp', beds: 5, baths: 4, area: 4500, label: 'FOR SALE', desc: 'Elegant villa with breathtaking views of the Golden Gate Bridge.' },
    { title: 'Modern Hilltop House', price: '$650,000', location: 'Los Angeles, CA', pic: 'rent4.jpg', beds: 4, baths: 3, area: 3200, label: 'FOR SALE', desc: 'Sleek modern home nestled in the Hollywood Hills.' },
    { title: 'Suburban Family Home', price: '$450,000', location: 'Sacramento, CA', pic: 'rent3.jpg', beds: 3, baths: 2, area: 2100, label: 'FOR SALE', desc: 'Spacious backyard and renovated kitchen, perfect for families.' },
    { title: 'Beachfront Mansion', price: '$1,250,000', location: 'Malibu, CA', pic: 'rent2.jpg', beds: 6, baths: 5, area: 5800, label: 'FOR SALE', desc: 'Ultimate luxury with direct private beach access.' },
    { title: 'Downtown Condo', price: '$350,000', location: 'San Diego, CA', pic: 'rent8.jpg', beds: 2, baths: 2, area: 1200, label: 'FOR SALE', desc: 'High-rise living with luxury amenities and city access.' },
    { title: 'Countryside Estate', price: '$550,000', location: 'Napa Valley, CA', pic: 'rent6.webp', beds: 4, baths: 3, area: 3500, label: 'FOR SALE', desc: 'Beautiful estate surrounded by vineyards and nature.' }
];

const AllSales = () => {
    const [listData, setListData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://propertyx-0l2i.onrender.com/api/property-list');
                if (response?.data?.code === 200 && response.data.data.length > 0) {
                    const sales = response?.data?.data.filter(item => item.label?.toLowerCase().includes('sale'));
                    setListData(sales.length > 0 ? sales : response?.data?.data);
                } else {
                    setListData(fallbackSales);
                }
            } catch (error) {
                setListData(fallbackSales);
            }
        };
        fetchData();
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="py-5 bg-light min-vh-100">
            <div className="container mt-5">
                <div className="text-center mb-5" data-aos="fade-down">
                    <span className="badge bg-danger-subtle text-danger mb-2">For Sale</span>
                    <h2 className="fw-bold">Properties for Sale</h2>
                    <p className="text-muted">Find your dream home among our premium listings for sale.</p>
                </div>
                <div className="row g-4">
                    {listData.slice(0, 4).map((item, i) => (
                        <div key={i} className="col-12 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={i * 100}>
                            <div className="card h-100 shadow-sm border-0 property">
                                <div className="position-relative">
                                    <img 
                                        src={item.pic.startsWith('http')  ? item.pic : `https://propertyx-0l2i.onrender.com/img/${item?.pic}`} 
                                        className="card-img-top" 
                                        alt={item.title} 
                                        style={{height: '200px', objectFit: 'cover'}} 
                                        onError={(e) => { e.target.src = 'house6.jpg' }}
                                    />
                                    <span className="badge bg-danger position-absolute top-0 end-0 m-2">{item.label}</span>
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
                                    <Link to="/property" className="btn btn-outline-danger w-100 rounded-pill d-block text-center text-decoration-none">View Details</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllSales;
