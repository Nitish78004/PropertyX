import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const ContactUs = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post("http://localhost:5000/api/add-contact-us", data);
            if (response.data?.code === 200) {
                Swal.fire({
                    title: "Message Sent",
                    text: response.data?.message,
                    icon: "success"
                });
                reset();
            } else {
                Swal.fire({
                    title: "Error",
                    text: response.data?.message || "Failed to send message",
                    icon: "error"
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: "Failed to send message. Please try again.",
                icon: "error"
            });
        }
    };

    return (
        <section style={{ backgroundColor: "#fdf1f0", padding: "60px 0" }} data-aos="fade-up">
            <div className="container text-center mb-4">
                <h2 className="fw-bold text-danger">Contact Us!</h2>
            </div>
            <div className="container d-flex justify-content-center" data-aos="zoom-in">
                <div className="p-4 shadow bg-white rounded" style={{ width: "100%", maxWidth: "900px" }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row mb-3">
                            <div className="col-md-6 mb-3">
                                <label className="form-label fw-bold">Your Name</label>
                                <input {...register("name", { required: "Name is required" })} type="text" className="form-control" placeholder="Enter your name" />
                                {errors.name && <small className="text-danger">{errors.name.message}</small>}
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label fw-bold">Your Email</label>
                                <input {...register("email", { required: "Email is required" })} type="email" className="form-control" placeholder="Enter your email" />
                                {errors.email && <small className="text-danger">{errors.email.message}</small>}
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label fw-bold">Phone Number</label>
                                <input {...register("contact", { required: "Phone number is required" })} type="text" className="form-control" placeholder="Enter phone number" />
                                {errors.contact && <small className="text-danger">{errors.contact.message}</small>}
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label fw-bold">Subject</label>
                                <input {...register("subject", { required: "Subject is required" })} type="text" className="form-control" placeholder="Subject" />
                                {errors.subject && <small className="text-danger">{errors.subject.message}</small>}
                            </div>
                            <div className="col-12 mb-3">
                                <label className="form-label fw-bold">Message</label>
                                <textarea {...register("message", { required: "Message is required" })} className="form-control" rows="4" placeholder="Your message"></textarea>
                                {errors.message && <small className="text-danger">{errors.message.message}</small>}
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-outline-danger px-4">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;