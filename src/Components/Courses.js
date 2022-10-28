import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet, useLoaderData } from 'react-router-dom';
import Leftside from './Leftside/Leftside';

const Courses = () => {

    const courses = useLoaderData();
    console.log(courses);

    return (
        <div>
            <div className='fs-1 fw-bold text-info'>Course Details</div>
            <Container>
                <Row>
                    <Col lg="4">
                        <Leftside 
                            key={courses.id}
                            courses = {courses}
                        ></Leftside>
                    </Col>
                    <Col lg="8">
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;