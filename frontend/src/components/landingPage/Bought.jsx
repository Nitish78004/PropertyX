import React from 'react'

const Bought = () => {
    const boughtData = [
        {
            img: 'br.jpg',
            title: 'Modern Apartment',
            location: 'New Delhi',
            price: '$1,200 / month',
        },
        {
            img: 'ber2.jpg',
            title: 'Luxury Villa',
            location: 'Mumbai',
            price: '$250,000',
        },
        {
            img: 'der1.jpg',
            title: 'Luxury Villa',
            location: 'Mumbai',
            price: '$250,000',
        },
    ];
    return (
        <>
            <div className=" py-5" style={{ backgroundColor: '#fceeee' }}>
                <div className="container">
                    <h2 className="text-center mb-5 text-danger" style={{ fontWeight: '500' }}>
                        Bought Properties
                    </h2>
                    <div className="row">
                        {boughtData.map((item, index) => (
                            <div key={index} className="col-md-4 mb-4">
                                <div className="card border-0 shadow-sm h-100 bought">
                                    <div className="position-relative">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="card-img-top"
                                            style={{ height: '220px', objectFit: 'cover' }}
                                        />
                                        <span
                                            className="badge bg-danger position-absolute top-0 start-0 m-2"
                                            style={{ fontSize: '0.8rem' }}
                                        >
                                            Bought
                                        </span>
                                    </div>
                                    <div className="card-body">
                                        <h6 className="text-danger fw-bold">{item.title}</h6>
                                        <p className="mb-1">{item.location}</p>
                                        <p className="text-muted small mb-2">No description available.</p>
                                        <p className="text-success fw-semibold">{item.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bought