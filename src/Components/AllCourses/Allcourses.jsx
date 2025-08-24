import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';

const Allcourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("https://a11-b11-server.vercel.app/courses")
            .then((res) => res.json())
            .then((data) => setCourses(data))
            .catch((err) => console.error("Failed to load listings:", err));
    }, []);


    return (

        <div className="grid space-y-5 px-15 grid-cols-1 md:grid-cols-3 gap-6">
        {
        courses.map(course => ( <Cards key={course._id} course={course} />))
        }
      </div>
    );
};

export default Allcourses;