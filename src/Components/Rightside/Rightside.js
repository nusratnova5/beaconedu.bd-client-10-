import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaStar, FaDollarSign, FaFile,FaDownload } from 'react-icons/fa';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Pdf from "react-to-pdf";
const ref = React.createRef();




const Rightside = () => {

    const courseDetails = useLoaderData()[0];
    const { name } = courseDetails;
    const { details } = courseDetails;
    const { image } = courseDetails;
    const { price } = courseDetails;
    const { rating } = courseDetails;
    const { lesson } = courseDetails;
    return (
        <div>
            <div className='d-flex justify-content-between align-items-center'>
                <div>
                    <h2 className='m-2 p-2'>{name}</h2>
                </div>
                <div>

                <OverlayTrigger
                      key={'bottom'}
                      placement={'bottom'}
                      overlay={
                        <Tooltip id={`tooltip-${'bottom'}`}>Click Here To Download THe Whole Details</Tooltip>
                      }
                    >

                      <Button className='bg-transparent border border-0 p-0'><Pdf targetRef={ref} filename={`C_Programming_${name}_details.pdf`}>
                    {({ toPdf }) => <button onClick={toPdf}><FaDownload></FaDownload></button>}
                    </Pdf></Button>
                    </OverlayTrigger>


                    {/* <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button onClick={toPdf}><FaDownload></FaDownload></button>}
                    </Pdf> */}
                </div>
            </div>
            <div ref={ref}>
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
                    <Link to='/checkout'>
                        <Button variant="success" size="lg">Get premium access</Button>
                    </Link>
                </Card.Body>
            </Card>
            </div>
        </div>
    );
};

export default Rightside;