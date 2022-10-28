import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const {name} =useLoaderData()[0];
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default CheckOut;