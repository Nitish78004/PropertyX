import React from 'react'
import { IoCarOutline } from "react-icons/io5";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { BsShieldCheck } from "react-icons/bs";
import { GiStethoscope } from "react-icons/gi";
import { IoLibraryOutline } from "react-icons/io5";
import { LiaBedSolid } from "react-icons/lia";
import { TbHomeShield } from "react-icons/tb";
import { GiJapaneseBridge } from "react-icons/gi";
const amenities = [
    { icon: <IoCarOutline />, title: 'Parking Space' },
    { icon: <LiaSwimmingPoolSolid />, title: 'Swimming Pool' },
    { icon: <BsShieldCheck />, title: 'Private Security' },
    { icon: <GiStethoscope />, title: 'Medical Center' },
    { icon: <IoLibraryOutline />, title: 'Library Area' },
    { icon: <LiaBedSolid />, title: 'King Size Beds' },
    { icon: <TbHomeShield />, title: 'Smart Homes' },
    { icon: <GiJapaneseBridge />, title: 'Flaticon-Slider' },
];
const OurAmenities = () => {
    return (
        <>
            <div className="container py-5 text-center" data-aos="fade-up">
                <span className="badge bg-danger-subtle text-danger mb-2">Our Amenities</span>
                <h2 className="fw-bold mb-4">Building Amenities</h2>
                <div className="row g-4">
                    {amenities.map((item, index) => (
                        <div className="col-sm-6 col-md-4 col-lg-3" key={index} data-aos="zoom-in" data-aos-delay={index * 50}>
                            <div className="border rounded shadow-sm p-4 h-100 amenities">
                                <div className="fs-1 mb-3 text-danger rounded-circle"
                                    style={{ backgroundColor: '#fdf1f0', borderRadius: '50%' }}>{item.icon}</div>
                                <h5 className="fw-semibold">{item.title}</h5>
                                <div className="mt-3">
                                    <button className="btn btn-light rounded-circle">
                                        →
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default OurAmenities