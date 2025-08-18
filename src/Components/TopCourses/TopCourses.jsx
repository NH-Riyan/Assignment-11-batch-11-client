import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';

const TopCourses = () => {
     const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/topcourses')
            .then(res => setCourses(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h3 className='text-center text-3xl font-mono my-7'>Most Enrolled Courses</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {courses.map(course => (
                <Cards key={course._id} course={course} />
            ))}
        </div>
        </div>
    );
};

export default TopCourses;