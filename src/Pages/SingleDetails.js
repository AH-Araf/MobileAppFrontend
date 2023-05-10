import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleDetails = () => {
    const a = useLoaderData();
    const {date, name, total, paid, due, note, _id} = a;

    return (
        <div>
            <p>Name: {name}</p>
            <p>Date: {date}</p>
            <p>Total: {total}</p>
            <p>Paid: {paid}</p>
            <p>Due: {due}</p>
            <p>Note: {note}</p>
        </div>
    );
};

export default SingleDetails;