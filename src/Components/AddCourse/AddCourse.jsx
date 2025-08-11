import axios from 'axios';
import React, { useContext } from 'react';
import Authcontext from '../../Provider/AuthContext';
import Swal from 'sweetalert2';

const AddCourse = () => {

    const { user } = useContext(Authcontext)


    const AddCourse = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const poster = e.target.poster.value;
        const duration = e.target.duration.value;

        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();

        const newcourse = {
            username: user.displayName,
            email: user.email,
            title,
            description,
            poster,
            duration,
            time: date +" "+ time,
        }

        console.log(newcourse)


        axios.post('http://localhost:3000/addcourses', newcourse)
            .then(response => {
                const data = response.data;
                if (data.insertedId) {
                    Swal.fire({
                        title: "New post Added",
                        icon: "success",
                        draggable: false
                    });
                }
            })
            .catch(error => {
                console.error("Error posting data:", error);
                Swal.fire({
                    title: "Error!",
                    text: "Failed to add the post",
                    icon: "error"
                });
            });

    }

    return (
        <div className='flex justify-center items-center '>
            <form onSubmit={AddCourse} className="card-body bg-base-300 m-5 rounded-2xl">
                <h2 className='mx-5 text-center text-xl font-semibold'>Create New Account </h2>
                <fieldset className="fieldset mx-auto w-80">

                    <label className="label">Course Title</label>
                    <input type="text" name='title' className="input" placeholder="Course Title" required />

                    <label className="label">Short Description</label>
                    <textarea name="description" className="input" placeholder="Description" required rows={4} />

                    <label className="label">Course Poster</label>
                    <input type="text" name='poster' className="input" placeholder="Poster" required />

                    <label className="label">Duration</label>
                    <input type="text" name='duration' className="input" placeholder="Course Duration" required />

                    <button type='submit' className="btn btn-neutral mt-4">Add Course</button>
                </fieldset>
            </form>
        </div>
    );
};

export default AddCourse;