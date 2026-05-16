import React, { useState } from 'react'
import { LuHouse } from "react-icons/lu";
import { FaRegCirclePlay } from "react-icons/fa6";
import Typewriter from 'typewriter-effect';
const Slider = () => {
    const defaultMainImage = "Luxury-house.jpg";
    const thumbnails = ["tumb1.jpg", "tumb2.png", "tumb3.jpg"];
    const [mainImage, setMainImage] = useState(defaultMainImage);
    return (
        <>
            <div className="container-fluid py-5" style={{ backgroundColor: '#f1f6f7' }}>
                <div className="row align-items-center justify-content-center">
                    {/* Left Side */}
                    <div className="col-md-6 text-center text-md-start px-5">
                        <p className="text-danger fw-bold mb-1">
                            <i className="me-2"><LuHouse /></i>Real Estate Agency
                        </p>
                        <h1 className="fw-bold display-8">
                            <Typewriter
                                options={{
                                    strings: [' Find your Luxury House.'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />

                        </h1>
                        <p className="text-muted mt-3 mb-4"
                            style={{ maxWidth: '400px', borderLeft: '2px solid black', paddingLeft: '10px' }}>
                            Our luxury houses are not just places to live—they are masterpieces of comfort and sophistication.
                            Every corner reflects quality craftsmanship, offering you a perfect blend of privacy, convenience, and lavish living.
                        </p>
                        <div className="d-flex align-items-center gap-3">
                            <button className="btn btn-danger px-4 py-2 fw-semibold">Make An Enquiry</button>
                            <button className="btn btn-outline-light rounded-circle shadow-sm" style={{ width: '48px', height: '48px' }}>
                                <i className="text-danger fs-4"><FaRegCirclePlay /></i>
                            </button>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="col-md-6 mt-4 mt-md-0 px-4">
                        <div className="position-relative">
                            <img
                                src={mainImage}
                                alt="Luxury House"
                                className="img-fluid rounded shadow"
                                style={{ height: 'auto', minHeight: '250px', maxHeight: '400px', width: '100%', objectFit: 'cover', transition: '0.5s' }}
                            />
                            <div className="d-flex gap-2 position-absolute bottom-0 start-50 translate-middle-x mb-3 w-100 justify-content-center">
                                {thumbnails.map((src, i) => (
                                    <img
                                        key={i}
                                        src={src}
                                        alt={`thumb - ${i + 1}`}
                                        onMouseEnter={() => setMainImage(src)}
                                        onMouseLeave={() => setMainImage(defaultMainImage)}
                                        className="img-thumbnail border-0 shadow-sm rounded-3"
                                        style={{ width: '70px', height: '70px', objectFit: 'cover', cursor: 'pointer', transition: '0.3s' }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider