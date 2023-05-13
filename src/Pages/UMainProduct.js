import React, { useState } from 'react';
import { Navigate, useLoaderData } from 'react-router-dom';

const UMainProduct = () => {
    const storedUser = useLoaderData();
    // console.log(storedUser._id)
    const [user, setUser] = useState(storedUser);

    const handleUpdateUser = event =>{
        event.preventDefault();
        // console.log(user);
        fetch(`https://b-app-server.vercel.app/updateProduct/${storedUser._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0){
                alert('customer updated')
                // console.log(data);
               
            }
            
        })
    }

    const handleInputChange = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newUser = {...user}
        newUser[field] = value;
        setUser(newUser);
    }

    return (
        <div>
            <h2 className='c-details'>Product Name: {storedUser.name}</h2>
            <form className='form-up' onSubmit={handleUpdateUser}>
                
                <p>Price: <input onChange={handleInputChange} type="text" defaultValue={storedUser.price} name='price'  required /></p>
                
                <button className='btn-up' type="submit">Update Product Price</button>
            </form>
        </div>
    );
};

export default UMainProduct;