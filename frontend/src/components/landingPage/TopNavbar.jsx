// import React from 'react'
// import { TiMail } from "react-icons/ti";
// import { IoLocationOutline } from "react-icons/io5";
// import { SlSocialFacebook } from "react-icons/sl";
// import { CiTwitter } from "react-icons/ci";
// import { FaInstagram } from "react-icons/fa";
// import { FaDribbble } from "react-icons/fa6";
// const TopNavbar = () => {
//     return (
//         <>
//             <div className="bg-dark text-white py-1 px-3 d-flex justify-content-between align-items-center small">
//                 <div className="ms-5">
//                     <i className="text-danger me-2"><TiMail /></i> info@webmail.com
//                     <span className="mx-2">|</span>
//                     <i className="text-danger me-2"><IoLocationOutline /></i> 15/A, Nest Tower, NYC
//                 </div>
//                 <div className="d-flex align-items-center gap-3 me-5">
//                     <SlSocialFacebook />
//                     <CiTwitter />
//                     <FaInstagram />
//                     <FaDribbble />

//                 </div>
//             </div>
//         </>
//     )
// }

// export default TopNavbar




import React, { useState } from 'react'
import { TiMail } from "react-icons/ti";
import { IoLocationOutline } from "react-icons/io5";
import { SlSocialFacebook } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";

const TopNavbar = () => {
    const [hoveredIcon, setHoveredIcon] = useState("");

    const iconStyle = (name) => ({
        color: hoveredIcon === name ? "#dc3545" : "white",
        fontSize: "18px",
        transition: "color 0.3s ease, transform 0.2s ease",
        transform: hoveredIcon === name ? "scale(1.2)" : "scale(1)",
        cursor: "pointer",
    });

    return (
        <>
            <div className="bg-dark text-white py-1 px-3 d-none d-md-flex justify-content-between align-items-center small">
                <div className="ms-5">
                    <i className="text-danger me-2"><TiMail /></i>
                    <a href="mailto:nknitishsingh91@gmail.com" className="text-white text-decoration-none">
                        nknitishsingh91@gmail.com
                    </a>
                    <span className="mx-2">|</span>
                    <i className="text-danger me-2"><IoLocationOutline /></i> Uttar Pradesh, India
                </div>
                <div className="d-flex align-items-center gap-3 me-5">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                        onMouseEnter={() => setHoveredIcon("facebook")}
                        onMouseLeave={() => setHoveredIcon("")}
                        style={iconStyle("facebook")}
                    >
                        <SlSocialFacebook />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                        onMouseEnter={() => setHoveredIcon("twitter")}
                        onMouseLeave={() => setHoveredIcon("")}
                        style={iconStyle("twitter")}
                    >
                        <CiTwitter />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                        onMouseEnter={() => setHoveredIcon("instagram")}
                        onMouseLeave={() => setHoveredIcon("")}
                        style={iconStyle("instagram")}
                    >
                        <FaInstagram />
                    </a>
                    <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer"
                        onMouseEnter={() => setHoveredIcon("dribbble")}
                        onMouseLeave={() => setHoveredIcon("")}
                        style={iconStyle("dribbble")}
                    >
                        <FaDribbble />
                    </a>
                </div>
            </div>
        </>
    )
}

export default TopNavbar
