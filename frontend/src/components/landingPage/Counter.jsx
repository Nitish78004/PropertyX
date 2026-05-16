import React from 'react';
import CountUp from 'react-countup';

const stats = [
    {
        img: 'c11.png',
        value: 5600,
        label: 'Total Area Sq'
    },
    {
        img: 'c2.png',
        value: 1970,
        label: 'Apartments Sold'
    },
    {
        img: 'c3.png',
        value: 2680,
        label: 'Total Constructions'
    },
    {
        img: 'c4.png',
        value: 3400,
        label: 'Apartio Rooms'
    }
];

const Counter = () => {
    return (
        <>
            <section className="bg-light py-5" data-aos="fade-up">
                <div className="container">
                    <div className="row text-center">
                        {stats.map((item, index) => (
                            <div key={index} className="col-6 col-md-3 mb-4">
                                <img
                                    src={item.img}
                                    alt={item.label}
                                    style={{ width: '80px', height: '80px', objectFit: 'contain' }}
                                />
                                <h3 className="fw-bold mt-3">
                                    <CountUp
                                        end={item.value}
                                        duration={3}
                                        separator=","
                                    />+
                                </h3>
                                <p className="text-muted">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Counter;
