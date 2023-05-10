import React from 'react';
import { Link } from 'react-router-dom';

const FNameSingle = ({a}) => {
    const {date, name, total, paid, due, note, _id} = a;

    return (
        <div>
            
            <p><Link to={`/singleDetails/${_id}`}><button className=''>{name}</button></Link></p>   
           
        </div>
    );
};

export default FNameSingle;