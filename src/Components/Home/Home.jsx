import React from 'react';
import Banner from '../Banner/Banner';
import CourseSec from '../CourseSec/CourseSec';
import TopCourses from '../TopCourses/TopCourses';
import NumSec from '../NumSec/NumSec';
import Review from '../Review/Review';


const Home = () => {
    return (
        <div>
            <div className='mt-5 mb-10 w-5xl mx-auto'>
                <Banner></Banner>
            </div>
            <section className='mt-20 mb-10'>
                <CourseSec></CourseSec>
            </section>
            <section className='mt-20 mb-10'>
                <TopCourses></TopCourses>
            </section>
            <section className='flex  mt-18' >
                <div className='w-2/3'>
                    <NumSec></NumSec>
                </div>
                <div className=''>
                    <Review></Review>
                </div>
            </section>
        </div>
    );
};

export default Home;