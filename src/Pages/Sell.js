import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Sell = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const {user} = useContext(AuthContext);
    
    const handleAddCustomer = data => {
        
                const doctor = {
                    date: data.date, 
                    name: data.name,
                    total: data.total,
                    paid: data.paid, 
                    due: data.due,
                    note: data.note,
                }

                // save doctor information to the database
                fetch('https://b-app-server.vercel.app/customerInfo', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                        // authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    alert(`Details added successfully`);
                    
                     navigate('/')
                })
            }
        // })
    // }


    return (
        <div>
            <h2 className="text-4xl home-title">Sell Here</h2>
            <div className=' add-jobs-container'>
            
            <form onSubmit={handleSubmit(handleAddCustomer)}>
                
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Date</span></label>
                    <input placeholder="Ex: 17-03-23" type="text" {...register("date", {
                        required: "date Title is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.date && <p className='text-red-500'>{errors.date.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Customer Name</span></label>
                    <input type="text" {...register("name", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Total</span></label>
                    <input type="text" {...register("total", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.total && <p className='text-red-500'>{errors.total.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Paid</span></label>
                    <input type="text" {...register("paid", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.paid && <p className='text-red-500'>{errors.paid.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Due</span></label>
                    <input  type="text" {...register("due", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.due && <p className='text-red-500'>{errors.due.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Note</span></label>
                    <input  type="text" {...register("note", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.note && <p className='text-red-500'>{errors.note.message}</p>}
                </div>
                              
                <input  className='btn btn-accent w-full mt-4' value="Submit" type="submit" />
            </form>
        </div>
        </div>
    );
};

export default Sell;