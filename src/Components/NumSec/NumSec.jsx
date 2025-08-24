import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const NumSec = () => {
    const [courses, setCourses] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://a11-b11-server.vercel.app/courses")
            .then((res) => res.json())
            .then((data) => setCourses(data))
            .catch((err) => console.error("Failed to load listings:", err));
    }, []);

    useEffect(() => {
        fetch("https://a11-b11-server.vercel.app/users")
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => console.error("Failed to load listings:", err));
    }, []);

    const course = courses.length - 1
    const user = users.length - 1

    return (
        <div >
            <h1 className='text-2xl mb-2 font-semibold font-mono text-center'>Our Platform has the best Courses</h1>
            <p className='text-lg mb-6 font-mono text-center'>Our platform connects you with verified courses across various specialities</p>
            <div className='grid grid-cols-2 px-25 gap-6 lg:grid-cols-2 lg:gap-10 lg:my-7'>

                <div className='border-2 rounded-2xl py-4 flex flex-col justify-center items-center'>
                    <img className='w-1/2' src="/public/images/course.jpg" alt="" />
                    <h1 className='text-4xl font-semibold'><CountUp end={course} enableScrollSpy />+</h1>
                    <h1>Total Courses</h1>
                </div>

                <div className='border-2 rounded-2xl py-4 flex flex-col justify-center items-center'>
                    <img className='w-1/2' src="/public/images/user.jpg" alt="" />
                    <h1 className='text-4xl font-semibold'><CountUp end={user} enableScrollSpy />+</h1>
                    <h1>Total users</h1>
                </div>

            </div>
        </div>
    );
};

export default NumSec;