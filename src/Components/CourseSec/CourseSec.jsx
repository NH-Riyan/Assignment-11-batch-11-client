import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';

const CourseSec = () => {
    const [courses, setCourses] = useState([]);

     useEffect(() => {
            fetch("http://localhost:3000/latestcourses")
                .then((res) => res.json())
                .then((data) => setCourses(data))
                .catch((err) => console.error("Failed to load listings:", err));
        }, []);

    return (
        <div>
            <h3 className='text-center text-3xl font-mono my-7'>Latest Courses</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                courses.map(course => (<Cards key={course._id} course={course} />))
            }
        </div>
        </div>
    );
};

export default CourseSec;