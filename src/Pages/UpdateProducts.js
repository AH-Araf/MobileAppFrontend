import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const UpdateProducts = () => {
    const storedUser = useLoaderData();
    // console.log(storedUser)
 

    return (
        <div>
            {
                storedUser.map(a => <div
                    key={a._id}
                    a={a}
                    >  
                    {/* <p>{a._id}  </p> */}
                    <div><p><Link to={`/updateProduct/${a._id}`}><button className=''>{a.name} — {a.price}</button></Link></p> </div>
                    </div>)
            }
            
        
        </div>
    );
};


export default UpdateProducts;