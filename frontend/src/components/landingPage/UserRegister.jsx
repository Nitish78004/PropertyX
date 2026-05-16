import React from 'react'
import { BsTelephoneInbound } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import { IoKeySharp } from "react-icons/io5";
import { BsImageFill } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import API_URL from '../../config';

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    contact: yup.string().required(),
    password: yup.string().required().min(8).max(20),
    address: yup.string().required(),
    profile: yup.mixed().required(),
    userType: yup.string().required()
});
const UserRegister = () => {
    const { register, handleSubmit, formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });


    const handleRegister = async (data) => {
        try {
            const formData = new FormData();

            formData.append('name', data.name);
            formData.append('email', data.email);
            formData.append('contact', data.contact);
            formData.append('password', data.password);
            formData.append('address', data.address);
            formData.append('profile', data.profile[0]);
            formData.append('userType', data.userType);

            const response = await axios.post(`${API_URL}/user-register`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.data.code === 200) {
                // Auto-login after registration
                const userData = response.data.data;
                localStorage.setItem('userInfo', JSON.stringify(userData));
                
                Swal.fire({
                    title: "Welcome to QUIREX!",
                    text: `Hey ${userData.name}, you have registered successfully!`,
                    icon: "success",
                    timer: 2000,
                    showConfirmButton: false
                });

                // Redirect to dashboard/properties
                setTimeout(() => {
                    window.location.href = '/user-property';
                }, 2000);
            }
        } catch (error) {
            console.error('Registration error:', error);
            Swal.fire({
                title: "Registration Failed",
                text: error?.response?.data?.message || error?.message || "Registration failed",
                icon: "error"
            });
        }
    };
    return (
        <>

            <div className="py-5" style={{ backgroundColor: '#fdf1f0' }}>
                <div className="container">
                    <h2 className="text-center text-danger fw-bold mb-4">Register Here</h2>

                    <div className="bg-white p-4 shadow rounded mx-auto" style={{ maxWidth: '1000px' }}>
                        <form onSubmit={handleSubmit(handleRegister)}>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label className="form-label">Your Name</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><BsFillPersonFill /></span>
                                        <input {...register('name')} type="text" className="form-control" placeholder="Enter your name" />
                                    </div>
                                    {errors.name && <p className="text-danger">{errors.name.message}</p>}
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Your Email</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><BsEnvelopeFill /></span>
                                        <input type="email" {...register('email')} className="form-control" placeholder="Enter your email" />
                                    </div>
                                    {errors.email && <p className="text-danger">{errors.email.message}</p>}
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label className="form-label">Phone Number</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><BsTelephoneInbound /> </span>
                                        <input type="tel" {...register('contact')} className="form-control" placeholder="Enter phone number" />
                                    </div>
                                    {errors.contact && <p className="text-danger">{errors.contact.message}</p>}
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Password</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><IoKeySharp /></span>
                                        <input type="password" {...register('password')} className="form-control" placeholder="Password" />
                                    </div>
                                    {errors.password && <p className="text-danger">{errors.password.message}</p>}
                                </div>
                            </div>

                            <div className="row mb-4">
                                <div className="col-md-6">
                                    <label className="form-label">Address</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><FaRegAddressCard /></span>
                                        <input type="text" {...register('address')} className="form-control" placeholder="Enter your Address" />
                                    </div>
                                    {errors.address && <p className="text-danger">{errors.address.message}</p>}
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col-md-6">
                                    <label className="form-label">Profile Picture</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><BsImageFill /></span>
                                        <input type="file" {...register('profile')} className="form-control" />
                                    </div>
                                    {errors.profile && <p className="text-danger">{errors.profile.message}</p>}
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">I am a...</label>
                                    <select {...register('userType')} className="form-select">
                                        <option value="user">Buyer (Wants to Buy)</option>
                                        <option value="seller">Seller (Wants to Sell)</option>
                                    </select>
                                    {errors.userType && <p className="text-danger">{errors.userType.message}</p>}
                                </div>
                            </div>

                            <div className="text-center mt-4">
                                <button type="submit" className="btn btn-outline-danger px-5 rounded-pill fw-bold">Register Now</button>
                            </div>

                            <div className="text-center my-3">
                                <span className="text-muted">OR</span>
                            </div>

                            <div className="d-flex justify-content-center">
                                <GoogleLogin
                                    onSuccess={credentialResponse => {
                                        const decoded = jwtDecode(credentialResponse.credential);
                                        const mockUser = {
                                            _id: "google_" + decoded.sub,
                                            name: decoded.name,
                                            email: decoded.email,
                                            userType: "user"
                                        };
                                        localStorage.setItem('userInfo', JSON.stringify(mockUser));
                                        // Swal.fire("Success", `Welcome ${decoded.name}!`, "success");
                                        window.location.href = '/user-property';
                                    }}
                                    onError={() => {
                                        console.log('Login Failed');
                                    }}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserRegister