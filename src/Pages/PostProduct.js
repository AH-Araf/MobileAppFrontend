import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const PostProduct = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const {user} = useContext(AuthContext);
    
    const handleAddCustomer = data => {
        
                const doctor = {
                    name: data.name, 
                    price: data.price,
                }

                // save doctor information to the database
                fetch('https://b-app-server.vercel.app/productInfo', {
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
                    alert(`Product added successfully`);
                    
                    
                })
            }
        // })
    // }


    return (
        <div>
            <h2 className="text-4xl home-title">Add Products</h2>
            <div className=' add-jobs-container'>
            
            <form onSubmit={handleSubmit(handleAddCustomer)}>
                
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product Name</span></label>
                    <input  type="text" {...register("name", {
                        required: "name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Price</span></label>
                    <input type="text" {...register("price", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
                </div>
                

                

                
                              
                <input  className='btn btn-accent w-full mt-4' value="Submit" type="submit" />
            </form>
        </div>
        </div>
    );
};



export default PostProduct;