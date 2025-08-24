import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Authcontext from '../../Provider/AuthContext';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const Details = () => {
    const { user } = useContext(Authcontext)
    const { _id, title, description, duration, poster } = useLoaderData();
    const [enrolled, Setenrolled] = useState(false)

    useEffect(() => {
        fetch(`https://a11-b11-server.vercel.app/users/${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(res => res.json())
            .then(data => {
                const enrolled = data.enrolledcourses || [];
                Setenrolled(enrolled.includes(_id));
            });
    }, []);

    const handleEnroll = (id) => {
        if (!enrolled) {

            fetch(`https://a11-b11-server.vercel.app/users/${user.email}`, {
                headers: {
                    authorization: `Bearer ${user.accessToken}`
                }
            })
                .then(res => res.json())
                .then(async (data) => {

                    const currentCourses = data?.enrolledcourses || [];
                    if (currentCourses.length < 3) {

                        const updatedcourses = data.enrolledcourses || [];

                        if (!updatedcourses.includes(id)) {
                            updatedcourses.push(id);
                        }

                        const updatedData = {
                            updatedcourses
                        };
                        await axios.patch(`https://a11-b11-server.vercel.app/users/${user.email}`, updatedData);

                        await axios.patch(`https://a11-b11-server.vercel.app/courses/${id}`, {
                            $inc: { enrollCount: 1 }  
                        });
                        toast.success("successfully Enrolled")
                        Setenrolled(true)
                    }
                    else
                        toast.error("You have already enrolled in 3 Courses");

                })
                .catch(error => {
                    console.error("error:", error);
                });
        }
    }
    return (
        <div className='flex w-10/12 mx-auto gap-5 border-4 border-base-200 rounded-2xl'>
            <div  className='w-[100%] m-5'>
                <img className=' rounded-2xl' src={poster} alt="" />
            </div>
            <div className='mx-auto'>
                <div className="py-10 space-y-3 h-[80%]">
                    <h3 className='text-3xl'>Course name:  <span className='text-green-700'>{title}</span> </h3>
                    <h3 className='text-2xl'>Course Description:  <span className='text-green-700'>{description}</span> </h3>
                    <h3 className='text-2xl'>Duration:  <span className='text-green-700'>{duration}</span> </h3>
                </div>

                <div className=''>
                    <button onClick={() => handleEnroll(_id)} disabled={enrolled} className='btn w-full '>
                        {
                            enrolled ?
                                "Enrolled"
                                :
                                "Enroll"}
                    </button>
                    <ToastContainer></ToastContainer>
                </div>
            </div>

        </div>
    );
};

export default Details;