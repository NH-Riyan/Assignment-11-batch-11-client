import React, { useContext, useEffect, useState } from 'react';
import Authcontext from '../../Provider/AuthContext';
import { Card } from 'flowbite-react';


const EnrolledCourses = () => {
    const { user } = useContext(Authcontext);
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:3000/users/${user.email}`)
            .then(res => res.json())
            .then(async (data) => {
                const courseIds = data.enrolledcourses || [];

                const coursePromises = courseIds.map(id =>
                    fetch(`http://localhost:3000/courses/${id}`).then(res => res.json())
                  );
            
                  const courses = await Promise.all(coursePromises);

                setEnrolledCourses(courses);
                console.log(enrolledCourses.length)
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);



    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h2>Your Enrolled Courses</h2>
            {enrolledCourses.length === 0 ? (
                <p>You are not enrolled in any courses yet.</p>
            ) : (
                <div className='grid grid-cols-3 gap-5'>
                    {enrolledCourses.map(course => (
                        <div className="max-w-sm" key={course._id}>
                            <Card
                                renderImage={() => (
                                    <img
                                        src={course.poster}
                                        alt="course poster"
                                        className="w-full h-[250px] shadow-lg object-cover rounded-t-2xl bg-white border-white"
                                    />
                                )}
                                className="rounded-t-3xl rounded-b-2xl border-0"
                            >
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {course.title}
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    {course.description}
                                </p>
                                <button className="btn bg-white" to={`/details/${course._id}`}>
                                       Remove Enrollment`
                                </button>
                            </Card>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default EnrolledCourses;
