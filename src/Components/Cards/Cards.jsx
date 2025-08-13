import { Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router';

const Cards = ({ course }) => {
  return (
    <div className="max-w-sm ">
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
          {course.description.split(" ").slice(0, 8).join(" ")}...
        </p>

        <Link className='btn bg-white' to={`/details/${course._id}`}>View Details</Link>
      </Card>
    </div>


  );
};

export default Cards;