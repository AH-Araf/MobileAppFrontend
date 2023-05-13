import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateCustomer = () => {
    const storedUser = useLoaderData();
    const {date, name, total, paid, due, note, _id} = storedUser;

    const [user, setUser] = useState(storedUser);

    const handleUpdateUser = event =>{
        event.preventDefault();
        // console.log(user);
        fetch(`https://b-app-server.vercel.app/singleDetails/${storedUser._id}`, {
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
                console.log(data);
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
            <h2 className='c-details'>Customer: {storedUser.name}</h2>
            <form className='form-up' onSubmit={handleUpdateUser}>
                
                <p>Date: <input onChange={handleInputChange} type="text" defaultValue={storedUser.date} name='date'  required /></p>
                <br />
                <p>Total: <input onChange={handleInputChange} type="text" defaultValue={storedUser.total} name="total" id=""  required /></p>
                <br />
                <p>Paid: <input onChange={handleInputChange} type="text" defaultValue={storedUser.paid}  name='paid'  required /></p>
                <br />
                <p>Due: <input onChange={handleInputChange} type="text" defaultValue={storedUser.due} name='due'  required /></p>
                <br />
                <p>Note: <input onChange={handleInputChange} type="text" defaultValue={storedUser.note} name="note" id=""  required /></p>
                <br />
                <button className='btn-up' type="submit">Update Customer</button>
            </form>
        </div>
    );
};

export default UpdateCustomer;