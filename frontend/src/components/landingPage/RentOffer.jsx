import React from "react";
import { Link } from "react-router-dom";
import { BsFillGeoAltFill } from "react-icons/bs";
const RentOffer = () => {
    const recentOffers = [
        {
            img: "rent1.webp",
            title: "Modern Apartment",
            location: "New Delhi",
            price: "$1,200 / month",
        },
        {
            img: "rent4.jpg",
            title: "Luxury Villa",
            location: "Mumbai",
            price: "$350,000",
        },
    ];

    const recentRent = [
        {
            img: "rent3.jpg",
            title: "Cozy Studio",
            location: "Punjab",
            price: "$800 / month",
        },
        {
            img: "rent2.jpg",
            title: "Cozy Studio",
            location: "Kerala",
            price: "$600 / month",
        },
        {
            img: "rent8.jpg",
            title: "Cozy Studio",
            location: "Bangalore",
            price: "$550 / month",
        },
    ];

    const recentSale = [
        {
            img: "rent6.webp",
            title: "Family House",
            location: "Lucknow",
            price: "$150,000",
        },
        {
            img: "rent7.webp",
            title: "Family House",
            location: "Gujrat",
            price: "$165,000",
        },
        {
            img: "rent5.jpg",
            title: "Family House",
            location: "Pune",
            price: "$180,000",
        },
    ];

    const renderSection = (title, linkText, to, items) => (
        <div className="mb-5">
            <div className="mb-1 d-flex justify-content-between align-items-center">
                <h6 className="fw-semibold mb-0">{title}</h6>
                <Link to={to} className="text-danger small fw-bold text-decoration-none hover-underline">
                    {linkText} →
                </Link>
            </div>
            <div className="row">
                {items.map((item, i) => (
                    <div key={i} className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay={i * 100}>
                        <div className="card shadow-sm border-0 h-100 property-card-mini">
                            <img
                                src={`/${item.img}`}
                                alt={item.title}
                                className="card-img-top"
                                style={{ height: "180px", objectFit: "cover" }}
                            />
                            <div className="card-body">
                                <h6 className="text-danger fw-semibold">{item.title}</h6>
                                <p className="text-muted small mb-1">
                                    <i className="me-1 text-success"><BsFillGeoAltFill /></i>
                                    {item.location}
                                </p>
                                <p className="text-success fw-semibold mb-0">{item.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <>
            <div className=" py-5" style={{ backgroundColor: "#fceeee" }}>
                <div className="container">
                    {renderSection("Recent Offers", "Show more offers", "/offers", recentOffers)}
                    {renderSection("Recent Places for Rent", "Show more places for rent", "/rentals", recentRent)}
                    {renderSection("Recent Places for Sale", "Show more places for sale", "/sales", recentSale)}
                </div>
            </div>
        </>
    );
};

export default RentOffer;