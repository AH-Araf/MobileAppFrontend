import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FNameSingle from './FNameSingle';

const FilterName = () => {
    const jobs = useLoaderData();
    const [searchTerm, setSerachTerm] = useState('')


    return (
        <div>

            <div className='s-box-div'>
            <input 
            className='search-box'
            type="text" 
            placeholder='Search By Name' 
            onChange={event =>{
                setSerachTerm(event.target.value)
                }}
                />
            </div>


            <div className='display-flex m-3 all-jobs'>
            
                {

                    jobs.filter((val)=>{
                        if(searchTerm == ""){
                            return val
                        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        }
                    }).map(a => <FNameSingle
                    key={a._id}
                    a={a}
                    >    
                    </FNameSingle>)
                }
                
            </div>
        </div>
    );
};

export default FilterName;