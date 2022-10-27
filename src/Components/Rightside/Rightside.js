import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaStar,FaDollarSign,FaFile } from 'react-icons/fa';
import { Button } from 'react-bootstrap';



const Rightside = () => {

    const courseDetails = useLoaderData()[0];
    const {name} = courseDetails;
    const {details} = courseDetails;
    const {image} = courseDetails;
    const {price} = courseDetails;
    const {rating} = courseDetails;
    const {lesson} = courseDetails;
    return (
        <div>
            <Card>
        <Card.Img variant="top" src={image} height={400} />
        <Card.Body>
            <div className='text-start text-warning d-flex flex-row px-2 gap-3 '>
            <div>{rating}</div>
            <div className=''>
                <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar>
             </div>
            </div>
            <div className='text-start fw-bold fs-1 text-success'>{name}</div>
          <div className='text-start fs-5'>{details}</div>
          <div className='text-start  d-flex flex-row justify-content-around my-3 text-secondary'>
          <div><FaFile></FaFile>{lesson}</div>
          <div><FaDollarSign></FaDollarSign>{price}</div>
          </div>
           <Button variant="success" size="lg">Get premium access</Button>
        </Card.Body>
      </Card>
        </div>
    );
};

export default Rightside;