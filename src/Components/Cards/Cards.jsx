import { Card } from 'flowbite-react';
import React from 'react';

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
          {course.Description}
        </p>
      </Card>
    </div>


  );
};

export default Cards;