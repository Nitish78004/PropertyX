import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../landingPage/Navbar';
import axios from "axios";

const AdminContactUsLists = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            const response = await axios.get("https://propertyx-0l2i.onrender.com/api/admin-contact-list");
            if (response.data?.code === 200) {
                setMessages(response.data?.data);
            }
        } catch (error) {
            console.error("Error fetching messages:", error);
        }
    };

    return (
        <>
            <Navbar />
            <section style={{ backgroundColor: "#fdf1f0", minHeight: "100vh", padding: "60px 0" }}>
                <div className="container text-center mb-4">
                    <h2 className="fw-bold text-danger">Contact Messages (Admin)</h2>
                </div>
                <div className="container">
                    <div className="bg-white p-4 shadow rounded">
                        {messages?.length > 0 ? (
                            <div className="table-responsive">
                                <table className="table table-striped table-hover">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Sr.No.</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Subject</th>
                                            <th>Message</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {messages.map((item, index) => (
                                            <tr key={item._id}>
                                                <td>{index + 1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.contact}</td>
                                                <td>{item.subject}</td>
                                                <td>{item.message}</td>
                                                <td>{item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'N/A'}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <p className="text-center my-4 fw-bold">No Messages Found!</p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AdminContactUsLists;