import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';

const TopCourses = () => {
     const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get('https://a11-b11-server.vercel.app/topcourses')
            .then(res => setCourses(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div> 
            <h3 className='text-center text-3xl font-mono my-7 mx-15'>Most Enrolled Courses</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {courses.map(course => (
                <Cards key={course._id} course={course} />
            ))}
        </div>
        </div>
    );
};

export default TopCourses;