import React from 'react';
import { Link } from 'react-router-dom';
import Course from '../Course/Course';

const Leftside = ({courses}) => {
    return (
        <div className='bg-secondary'>
            {
                courses.map( course => <Course
                    key={course.id}
                    course={course}
                ></Course>)
            }
        </div>
    );
};

export default Leftside;