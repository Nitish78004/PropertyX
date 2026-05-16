import React from 'react'
import { IoMailOutline } from "react-icons/io5";
import { IoKey } from "react-icons/io5";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'

const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required().min(8).max(20)
});
const Login = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const handleLogin = async (data) => {
        const response = await axios.post('http://localhost:5000/api/login', data)
        if (response?.data?.code == 200) {
            Swal.fire({
                title: "Login",
                text: response?.data?.message,
                icon: "success"
            });
            localStorage.setItem('userInfo', JSON.stringify(response?.data?.data));
            if (response?.data?.data?.userType == "admin") {
                navigate('/admin-add')
            } else if (response?.data?.data?.userType == "user") {
                navigate('/user-property')
            }
        } else {
            Swal.fire({
                title: "Login",
                text: response?.data?.message,
                icon: "error"
            });
        }
    }
    return (
        <>

            <div className=" py-5" style={{ backgroundColor: '#fdf1f0' }}>
                <div className="container">
                    <h2 className="text-center text-danger fw-bold mb-4">Login</h2>

                    <div className="bg-white p-4 shadow rounded mx-auto" style={{ maxWidth: '600px' }}>
                        <form onSubmit={handleSubmit((d) => handleLogin(d))}>
                            <div className="mb-3">
                                <label className="form-label">Your Email</label>
                                <div className="input-group">
                                    <span className="input-group-text"><IoMailOutline /></span>
                                    <input type="email" {...register('email')} className="form-control" placeholder="Enter your email" />
                                </div>
                            </div>
                            {errors?.email && <p className='text-danger'>{errors?.email?.message}</p>}
                            <div className="mb-4">
                                <label className="form-label">Password</label>
                                <div className="input-group">
                                    <span className="input-group-text"><IoKey /></span>
                                    <input type="password" {...register('password')} className="form-control" placeholder="Password" />
                                </div>
                            </div>
                            {errors?.password && <p className='text-danger'>{errors?.password?.message}</p>}
                            <div className="text-center">
                                <button type="submit" className="btn btn-outline-danger px-4">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;