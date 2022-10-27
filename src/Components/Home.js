import React, { useState } from 'react';
import {  Button, Container } from 'react-bootstrap';


const Home = () =>{
   const [dark,setMode]=useState(false)
    return (
        <div className=''>
            <Container className='w-75'>

                <p className='text-start fs-1 fw-bold fst-italic text-info'>WELCOME TO <p className=' fs-2 text-warning'>BeaconEdu.bd</p></p>
                <p className='text-start text-success fs-3 fst-italic '>Wanna explore your dream <p>in fast developing IT sphere!</p></p>
                <p className='text-start fw-bold text-warning'>JOIN WITH US</p>
                
                
            </Container>
        </div>
    );
};

export default Home;