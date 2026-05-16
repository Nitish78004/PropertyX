import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    const [formData, setFormData] = useState({ name: '', feedback: '' });

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        const res = await axios.get('http://localhost:5000/api/get-reviews');
        if (res.data?.code === 200) {
            setReviews(res.data.data);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:5000/api/add-review', {
            ...formData,
            image: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 50)}.jpg`
        });
        if (res.data?.code === 200) {
            Swal.fire("Success", "Review submitted!", "success");
            setFormData({ name: '', feedback: '' });
            fetchReviews();
        }
    };

    // Duplicate reviews for infinite scroll
    const displayReviews = [...reviews, ...reviews, ...reviews];

    return (
        <section className="py-5" style={{ backgroundColor: '#fff' }}>
            <div className="container" data-aos="fade-up">
                <div className="text-center mb-5">
                    <span className="badge bg-danger-subtle text-danger mb-2">Our Testimonial</span>
                    <h2 className="fw-bold">Clients Feedback</h2>
                </div>

                {/* Marquee Container */}
                <div className="marquee-container mb-5">
                    <div className="marquee-content">
                        {displayReviews.length > 0 ? displayReviews.map((item, index) => (
                            <div className="card border-0 shadow-sm p-4 me-3" key={index} style={{ minWidth: '350px', whiteSpace: 'normal' }}>
                                <p className="text-muted">❝ {item.feedback} ❞</p>
                                <div className="d-flex align-items-center mt-3">
                                    <img src={item.image} className="rounded-circle me-3" width="50" height="50" alt="" />
                                    <div>
                                        <h6 className="mb-0 fw-bold">{item.name}</h6>
                                        <small className="text-muted">{item.role}</small>
                                    </div>
                                </div>
                            </div>
                        )) : (
                            <p className="text-center w-100">No reviews yet. Be the first!</p>
                        )}
                    </div>
                </div>

                {/* Submit Review Form */}
                <div className="row justify-content-center mt-5">
                    <div className="col-md-6 p-4 rounded-4 shadow-sm" 
                         style={{ background: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(5px)', border: '1px solid rgba(0,0,0,0.05)' }} 
                         data-aos="zoom-in">
                        <h4 className="fw-bold text-center mb-4">Write a Review</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input 
                                    type="text" 
                                    className="form-control rounded-pill border-0 px-4 py-2 shadow-sm" 
                                    style={{ background: 'rgba(255,255,255,0.8)' }}
                                    placeholder="Your Name" 
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    required 
                                />
                            </div>
                            <div className="mb-3">
                                <textarea 
                                    className="form-control rounded-4 border-0 px-4 py-2 shadow-sm" 
                                    style={{ background: 'rgba(255,255,255,0.8)' }}
                                    rows="3" 
                                    placeholder="Your Feedback" 
                                    value={formData.feedback}
                                    onChange={(e) => setFormData({...formData, feedback: e.target.value})}
                                    required
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-danger rounded-pill px-5 fw-bold shadow">Submit Review</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;