import React from 'react'
import Navbar from '../landingPage/Navbar'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
const schemaproperty = yup
    .object()
    .shape({
        title: yup.string().required().min(2).max(100),
        price: yup.string().required(),
        area: yup.string().required().min(2).max(100),
        location: yup.string().required().min(2).max(100),
        description: yup.string().required().min(2),
        pic: yup.mixed()
    })

const AddProperty = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schemaproperty),
    });
    const addProperty = async (data) => {
        const formData = new FormData();
        formData.append('title', data?.title);
        formData.append('price', data?.price);
        formData.append('area', data?.area);
        formData.append('location', data?.location);
        formData.append('description', data?.description);
        formData.append('pic', data?.pic[0]);
        const response = await axios.post('https://propertyx-0l2i.onrender.com/api/add-property', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        if (response?.data?.code == 200) {
            Swal.fire({
                title: "Add Property",
                text: response?.data?.message,
                icon: "success"
            })
            reset()
        } else {
            Swal.fire({
                title: "Add Property",
                text: response?.data?.message,
                icon: "error"
            })
        }
    }
    return (
        <>
            <Navbar />
            <div className=" py-5" style={{ backgroundColor: '#fdf1f0' }}>
                <div className="container">
                    <h2 className="text-center text-danger fw-bold mb-4">Add A Property</h2>

                    <div className="bg-white p-4 shadow rounded mx-auto" style={{ maxWidth: '800px' }}>
                        <form onSubmit={handleSubmit((d) => addProperty(d))}>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label className="form-label">Property Title</label>
                                    <input{...register('title')} type="text" className="form-control" placeholder="Enter property title" />
                                </div>
                                {errors?.title && <p className='text-danger'>{errors?.title?.message}</p>}
                                <div className="col-md-6">
                                    <label className="form-label">Area</label>
                                    <input  {...register('area')} type="text" className="form-control" placeholder="Enter property area" />
                                </div>
                                {errors?.area && <p className='text-danger'>{errors?.area?.message}</p>}
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label className="form-label">Price</label>
                                    <input {...register('price')} type="text" className="form-control" placeholder="Enter property price" />
                                </div>
                                {errors?.price && <p className='text-danger'>{errors?.price?.message}</p>}

                                <div className="col-md-6">
                                    <label className="form-label">Pic</label>
                                    <input{...register('pic')} type="file" className="form-control" placeholder="Enter property photo" />
                                </div>
                                {errors?.pic && <p className='text-danger'>{errors?.pic?.message}</p>}
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label className="form-label">Description</label>
                                    <input {...register('description')} type="text" className="form-control" placeholder="Enter property description" />
                                </div>
                                {errors?.description && <p className='text-danger'>{errors?.description?.message}</p>}
                                <div className="col-md-6">
                                    <label className="form-label">Location</label>
                                    <input {...register('location')} type="text" className="form-control" placeholder="Enter property location" />
                                </div>
                                {errors?.location && <p className='text-danger'>{errors?.location?.message}</p>}
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-outline-danger px-4">Add Property</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProperty