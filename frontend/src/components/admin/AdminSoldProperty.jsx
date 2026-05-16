import React, { useEffect, useState } from 'react'
import Navbar from '../landingPage/Navbar';
import axios from 'axios'
const AdminSoldProperty = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const response = await axios.get('http://localhost:5000/api/admin-sold-list');
        if (response?.data?.code == 200) {
            setData(response?.data?.data)
        }
    }
    return (
        <>
            <div className="py-5" style={{ backgroundColor: "#fdf1f0", minHeight: "100vh" }}>
                <div className="container">
                    <h2 className='text-center text-danger fw-bold mb-4'>Admin Sold Properties</h2>
                    <div className="bg-white p-4 shadow rounded">
                        <div className="table-responsive">
                            <table className='table table-striped table-hover'>
                                <thead className='table-dark'>
                                    <tr>
                                        <th>Sr.No.</th>
                                        <th>Buyer Name</th>
                                        <th>Email</th>
                                        <th>Contact</th>
                                        <th>Property Title</th>
                                        <th>Price</th>
                                        <th>Area</th>
                                        <th>Location</th>
                                        <th>Media</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.map((item, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item?.name}</td>
                                            <td>{item?.email}</td>
                                            <td>{item?.contact}</td>
                                            <td>{item?.title}</td>
                                            <td>{item?.price}</td>
                                            <td>{item?.area}</td>
                                            <td>{item?.location}</td>
                                            <td>
                                                <img 
                                                    height="50" 
                                                    width="80" 
                                                    src={`http://localhost:5000/img/${item?.pic}`} 
                                                    alt='property' 
                                                    style={{ objectFit: 'cover', borderRadius: '4px' }}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {data?.length === 0 && <p className='text-center my-4 fw-bold'>No Records Found!</p>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminSoldProperty