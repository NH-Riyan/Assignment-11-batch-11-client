import React, { useContext, useEffect, useState } from 'react';
import Authcontext from '../../Provider/AuthContext';
import { Card } from 'flowbite-react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import Loading from '../Loading/Loading';


const EnrolledCourses = () => {
    const { user } = useContext(Authcontext);
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:3000/users/${user.email}`,
            {
                headers: {
                    authorization: `Bearer ${user.accessToken}`
                }
            }
        )
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


    const handleRemove = async (id) => {

        const { data } = await axios.get(`http://localhost:3000/users/${user.email}` ,{
            headers: {
                Authorization: `Bearer ${user.accessToken}`,
                "Content-Type": "application/json",
            }
        });
        const CourseArray = data.enrolledcourses || [];
        const updatedcourses = CourseArray.filter(cid => cid !== id)
        console.log(id, updatedcourses)
        const updatedData = {
            updatedcourses,
        }

        await axios.patch(`http://localhost:3000/users/${user.email}`, updatedData);

        setEnrolledCourses(prev => prev.filter(c => (c._id || c.id) !== id));
        toast.success("cancelled enrollment")

    }



    if (!user || loading) return <Loading></Loading>

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
                                <button className="btn bg-white" onClick={() => handleRemove(course._id || course.id)}>
                                    Remove Enrollment`
                                </button>
                                <ToastContainer></ToastContainer>
                            </Card>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default EnrolledCourses;
