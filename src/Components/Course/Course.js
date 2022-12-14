import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    return (
        <div>
            <Link to={`/course/${course.name}`}>{course.name}</Link>
        </div>
    );
};

export default Course;