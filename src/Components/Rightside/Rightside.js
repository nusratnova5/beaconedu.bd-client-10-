import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Rightside = () => {

    const courseDetails = useLoaderData()[0];
    const {name} = courseDetails;
    return (
        <div>
            <p>{name}</p>
        </div>
    );
};

export default Rightside;