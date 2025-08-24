import React from 'react';
import { LuCircleUserRound } from 'react-icons/lu';

const Review = () => {
    return (
        <div className='space-y-4 mx-15'>
            <h2 className='font-semibold text-xl font-mono text-center'>Reviews About Us</h2>
            <div className='border-2 border-gray-300 rounded-md p-4'>

                <p className='text-gray-400 text-left'><LuCircleUserRound className='inline-block size-7 mr-2' />SQL course helped me handle databases confidently.</p>
            </div>
            <div className='border-2 border-gray-300 rounded-md p-4'>

                <p className='text-gray-400 text-left'><LuCircleUserRound className='inline-block size-7 mr-2' />he platform is super easy to use. I enrolled in the Python course and within weeks I was able to build my first project.</p>
            </div>
            <div className='border-2 border-gray-300 rounded-md p-4'>

                <p className='text-gray-400 text-left'><LuCircleUserRound className='inline-block size-7 mr-2' />Affordable, interactive, and practical. The Kotlin course was exactly what I needed to start Android development</p>
            </div>

        </div>
    );
};

export default Review;