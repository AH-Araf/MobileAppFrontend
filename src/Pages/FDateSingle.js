import React from 'react';
import { Link } from 'react-router-dom';

const FDateSingle = ({a}) => {
    const {date, name, total, paid, due, note, _id} = a;

    return (
        <div>
            <div className='filter-date'>
            
            <p>Customer's Name: <Link to={`/updateCustomer/${_id}`}><button className=''>{name}</button></Link></p>
            <p>Total Due: {due}</p>
            
           
        </div>
        </div>
    );
};

export default FDateSingle;