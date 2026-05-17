import React, { useEffect, useState } from 'react'
import Navbar from '../landingPage/Navbar'
import axios from 'axios'
const UserBoughtList = () => {
    const [list, setList] = useState([])
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const UserData = JSON.parse(localStorage.getItem('userInfo'));
        const response = await axios.post('https://propertyx-0l2i.onrender.com/api/user-bought-list', {
            userId: UserData?._id
        })
        if (response?.data?.code == 200) {
            setList(response?.data?.data)
            console.log(list)
        }
        else {
            console.log("error")
        }
    }
    return (
            <div className="py-5" style={{ backgroundColor: "#fdf1f0", minHeight: "100vh" }}>
                <div className="container">
                    <h2 className='text-center text-danger fw-bold mb-4'>My Purchased Properties</h2>
                    <div className="bg-white p-4 shadow rounded">
                        <div className="table-responsive">
                            <table className="table table-striped table-hover">
                                <thead className='table-dark'>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Area</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Location</th>
                                        <th scope="col">Media</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {list?.map((item, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{item?.title}</td>
                                            <td>{item?.price}</td>
                                            <td>{item?.area}</td>
                                            <td>{item?.description}</td>
                                            <td>{item?.location}</td>
                                            <td>
                                                <img 
                                                    height="50" 
                                                    width="80" 
                                                    src={`https://propertyx-0l2i.onrender.com/img/${item?.pic}`} 
                                                    alt='property'
                                                    style={{ objectFit: 'cover', borderRadius: '4px' }}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {list?.length === 0 && <p className='text-center my-4 fw-bold'>You haven't bought any properties yet!</p>}
                    </div>
                </div>
            </div>
    )
}

export default UserBoughtList