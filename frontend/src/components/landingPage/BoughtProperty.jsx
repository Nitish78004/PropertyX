import React from 'react'

const BoughtProperty = () => {
    const areas = [
        {
            img: "12.jpg",
            city: "San Francisco",
            area: "Mission District Area",
            properties: 2
        },
        {
            img: "13.jpg",
            city: "New York",
            area: "Pacific Heights Area",
            properties: 5
        },
        {
            img: "11.webp",
            city: "Sedona, Arizona",
            area: "Noe Valley Zones",
            properties: 9
        }
    ];
    return (
        <>
            <div className="fluid py-5" style={{ backgroundColor: "#f1f6f7" }}>
                <div className="container">
                    <p className="text-danger fw-semibold">Area Properties</p>
                    <h2 className="fw-bold mb-5">Find Your Dream House<br />Search By Area</h2>

                    <div className="row">
                        {areas.map((item, index) => (
                            <div key={index} className="col-md-4 mb-4">
                                <div className="card shadow border-0 area-property">
                                    <div className="position-relative">
                                        <img
                                            src={item.img}
                                            className="card-img-top"
                                            alt={item.area}
                                            style={{ height: "240px", objectFit: "cover" }}
                                        />
                                        <span className="badge bg-light text-dark position-absolute top-0 start-0 m-2 px-3 py-2 shadow-sm">
                                            {item.properties} PROPERTIES
                                        </span>
                                    </div>
                                    <div className="card-body">
                                        <small className="text-muted">{item.city}</small>
                                        <h5 className="fw-bold">{item.area}</h5>
                                        <a href="#" className="text-danger text-decoration-none fw-semibold">
                                            View Property →
                                        </a>
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

export default BoughtProperty