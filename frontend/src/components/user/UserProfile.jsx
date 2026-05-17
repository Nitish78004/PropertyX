import React, { useEffect } from 'react';
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
import Navbar from '../landingPage/Navbar'
const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    contact: yup.string().required(),
    password: yup.string().required().min(8).max(20),
    address: yup.string().required(),
    profile: yup.mixed()
});
const UserProfile = () => {
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userInfo'));
        setValue('name', userData?.name);
        setValue('email', userData?.email);
        setValue('contact', userData?.contact);
        setValue('password', userData?.password);
        setValue('address', userData?.address);
    }, [])
    const { register, handleSubmit, setValue, formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const handleRegister = async (data) => {
        const userData = JSON.parse(localStorage.getItem('userInfo'))
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('contact', data.contact);
        formData.append('password', data.password);
        formData.append('address', data.address);
        if (data?.profile && data.profile.length > 0) {
            formData.append('profile', data.profile[0]);
        }
        formData.append('userId', userData?._id)

        const response = await axios.put('https://propertyx-0l2i.onrender.com/api/user-update', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        if (response.data?.code === 200) {
            Swal.fire({
                title: "Profile Update",
                text: response?.data?.message,
                icon: "success"
            });
            localStorage.setItem('userInfo', JSON.stringify(response?.data?.data))
        } else {
            Swal.fire({
                title: "Profile Update",
                text: response?.data?.message,
                icon: "error"
            });
        }
    };
    return (
        <>
            <Navbar />
            <div className="py-5" style={{ backgroundColor: '#fdf1f0' }}>
                <div className="container">
                    <h2 className="text-center text-danger fw-bold mb-4">User Profile</h2>

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
                                <div className="col-md-6">
                                    <label className="form-label">Profile Picture</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><BsImageFill /></span>
                                        <input type="file" {...register('profile')} className="form-control" />
                                    </div>
                                    {errors.profile && <p className="text-danger">{errors.profile.message}</p>}
                                </div>
                            </div>

                            <div className="text-center">
                                <button type="submit" className="btn btn-outline-danger px-4">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile;