import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleHome from './SingleHome';
import { AuthContext } from '../contexts/AuthProvider';

const Home = () => {
    const {user} = useContext(AuthContext);

    const [apply, setApply] = useState([])
    useEffect(() => {
        fetch(`https://b-app-server.vercel.app/appUserEmail?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setApply(data))
    }, [user?.email])

    return (
        <div><h1>Home</h1>
            {

apply.map(x => <SingleHome
key={x._id}
x={x}
>    
</SingleHome>)
}
        </div>
    );
};

export default Home;