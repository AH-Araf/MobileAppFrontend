import React, { useState } from 'react';
import FDateSingle from './FDateSingle';
import { useLoaderData } from 'react-router-dom';
import './All.css'

const FilterDate = () => {
    const jobs = useLoaderData();
    const [searchTerm, setSerachTerm] = useState('')


    return (
        <div>

            <div className='s-box-div'>
            <input 
            className='search-box'
            type="text" 
            placeholder='Search By Date' 
            onChange={event =>{
                setSerachTerm(event.target.value)
                }}
                />
            </div>


            <div className='display-flex m-3 '>
            
                {

                    jobs.filter((val)=>{
                        if(searchTerm == ""){
                            return val
                        } else if (val.date.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        }
                    }).map(a => <FDateSingle
                    key={a._id}
                    a={a}
                    >    
                    </FDateSingle>)
                }
                
            </div>
        </div>
    );
};

export default FilterDate;