import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';

const Allcourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/courses")
            .then((res) => res.json())
            .then((data) => setCourses(data))
            .catch((err) => console.error("Failed to load listings:", err));
    }, []);


    return (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {
        courses.map(course => ( <Cards key={course._id} course={course} />))
        }
      </div>
    );
};

export default Allcourses;