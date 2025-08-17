import React, { useContext, useEffect, useState } from 'react';
import Authcontext from '../../Provider/AuthContext';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Link } from 'react-router';
import Loading from '../Loading/Loading';

const MyCourse = () => {
    const { user } = useContext(Authcontext)
    const [Mycourses, setmyCourses] = useState([]);



    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/courses/user/${user.email}`,
                {
                    headers: {
                        authorization: `Bearer ${user.accessToken}`
                    }
                }
            )
                .then((res) => res.json())
                .then((data) => setmyCourses(data))
                .catch((err) => console.error("Failed to load courses:", err));
        }
    }, [user?.email]);



    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/courses/${id}`)
                    .then(() => {
                        setmyCourses(prev => prev.filter(course => course._id !== id))
                        alert("Course deleted successfully!");
                    })
                    .catch(err => console.error("Failed to delete course:", err));
            }
        })
    }

    if (!user) return <Loading></Loading>


    return (

        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">My Courses</h1>
            <table className="table-auto w-full border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border px-4 py-2">S/N</th>
                        <th className="border px-4 py-2">Title</th>
                        <th className="border px-4 py-2">Duration</th>
                        <th className="border px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Mycourses.length > 0 ? (
                            Mycourses.map((course, index) => (
                                <tr key={course._id}>

                                    <td className="border px-4 py-2 text-center">{index + 1}</td>
                                    <td className="border px-4 py-2 text-center">{course.title}</td>
                                    <td className="border px-4 py-2 text-center" >{course.duration}</td>
                                    <td className="border px-4 py-2 text-center">
                                        <Link to={`/editcourses/${course._id || course.id}`}

                                            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(course._id)}
                                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="3"
                                    className="border px-4 py-2 text-center text-gray-500"
                                >
                                    No courses found.
                                </td>
                            </tr>
                        )}
                </tbody>
            </table>


        </div>
    );
};


export default MyCourse;