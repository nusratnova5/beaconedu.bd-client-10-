import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Courses = () => {
    return (
        <div>
            <h2>this is Courses</h2>
            <Container>
                <Row>
                    <Col lg="4">
                        <h2>this is nav site</h2>
                    </Col>
                    <Col lg="8">
                        <h2>This is couurse detail part</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;