import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { Link } from 'react-router-dom';
// https://b-app-server.vercel.app/appUserEmail?email=siam@gamil.com
const SingleHome = ({x}) => {
    const { name, email, role, number} = x;
    
    const y = role;
    console.log(y)



    return (
        <div>
            <h1>{name}</h1>
            <h1>{role}</h1>
            <li>
                            {
                                role?.Admin?
                                    <>
                                        <Link>Role-Ad</Link> 
                                        
                                    </>
                                    :
                                    <>
                                        <Link className='blog-container header-option1' to='/login'>Role-Ad</Link> 
                                    </>
                            }

                        </li>
        </div>
    );
};

export default SingleHome;