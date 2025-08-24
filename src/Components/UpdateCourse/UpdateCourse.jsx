import axios from 'axios';
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

import Swal from 'sweetalert2';

const UpdateCourse = () => {
    const { _id, title, description, duration, poster } = useLoaderData();
    const navigate = useNavigate();

    const UpdateCourse = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const poster = e.target.poster.value;
        const duration = e.target.duration.value;

        const updatedData = {
            title,
            description,
            poster,
            duration,
        };

        const response = await axios.patch(`https://a11-b11-server.vercel.app/courses/${_id}`, updatedData);
        if(response.data.modifiedCount){
        Swal.fire({
            title: "Updated",
            icon: "success",
            draggable: false
        });
    }

        navigate("/mycourses")
    }


    return (
        <div className='flex justify-center items-center '>
            <form onSubmit={UpdateCourse} className="card-body bg-base-300 m-5 rounded-2xl">
                <h2 className='mx-5 text-center text-xl font-semibold'>Update Your Course</h2>
                <fieldset className="fieldset mx-auto w-80">

                    <label className="label">Course Title</label>
                    <input type="text" name='title' className="input" defaultValue={title} placeholder="Course Title" required />

                    <label className="label">Short Description</label>
                    <textarea name="description" className="input" defaultValue={description} placeholder="Description" required rows={4} />

                    <label className="label">Course Poster</label>
                    <input type="text" name='poster' className="input" defaultValue={poster} placeholder="Poster" required />

                    <label className="label">Duration</label>
                    <input type="text" name='duration' className="input" defaultValue={duration} placeholder="Course Duration" required />
                    <button type='submit' className="btn btn-neutral mt-4">Update Course</button>

                </fieldset>
            </form>
        </div>
    );
};

export default UpdateCourse;