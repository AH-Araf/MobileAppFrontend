import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UpdateProducts from './UpdateProducts';

const UpdateP = () => {
    const jobs = useLoaderData();
    // console.log(jobs)
    return (
        <div>
            <p>hi</p>
            {
                jobs.map(a => <UpdateProducts
                    key={a._id}
                    a={a}
                    >    
                    </UpdateProducts>)
            }
        </div>
    );
};

export default UpdateP;