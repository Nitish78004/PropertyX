import React from 'react'

import { useLocation } from 'react-router-dom';
const services = [
    {
        img: 'home.png',
        title: 'Buy a home',
        desc: 'over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.',
        linkText: 'Find A Home →',
        linkColor: 'text-success'
    },
    {
        img: '22.png',
        title: 'Rent a home',
        desc: 'over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.',
        linkText: 'Find A Home →',
        linkColor: 'text-danger border-bottom border-2 border-danger'
    },
    {
        img: '23.png',
        title: 'Sell a home',
        desc: 'over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.',
        linkText: 'Find A Home →',
        linkColor: 'text-success'
    }
];
const Services = () => {
    const location = useLocation();
    return (
        <>

            <section className="bg-light py-5 text-center" data-aos="fade-up">
                <div className="container">
                    <span className="badge bg-danger-subtle text-danger mb-2">Our Services</span>
                    <h2 className="fw-bold mb-5">Our Main Focus</h2>
                    <div className="row g-4">
                        {services.map((item, index) => (
                            <div key={index} className="col-md-4" data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="p-4 shadow-sm rounded-3 h-100 focus-card border-bottom-hover services" style={{ background: 'rgba(255,255,255,0.3)', border: '1px solid rgba(0,0,0,0.05)' }}>
                                    <div className="mb-3">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            style={{ width: '150px', height: '150px', objectFit: 'contain' }}
                                        />
                                    </div>
                                    <h5 className="fw-bold">{item.title}</h5>
                                    <p className="text-muted">{item.desc}</p>
                                    <p className={`fw-semibold ${item.linkColor}`} style={{ cursor: 'pointer' }}>{item.linkText}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services