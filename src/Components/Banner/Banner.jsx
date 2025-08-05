import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1200,
    };
    return (
        <Slider {...settings}>

            <div className="relative h-[550px] bg-[url('/images/s1.jpg')] bg-cover bg-center ">
                <div className="absolute inset-0  bg-black opacity-50"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center px-7 text-center  z-10 text-white">
                    <h1 className="text-5xl font-mono font-bold">Begin your Learning Journey</h1>
                    <p className="text-xl">Explore thousands of courses from top instructors worldwide.</p>
                </div>
            </div>

            <div className="relative h-[550px]  bg-[url('/images/s2.jpg')] bg-cover bg-center ">
                <div className="absolute inset-0  bg-black opacity-50"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center px-7 z-10 text-center text-white">
                    <h1 className="text-5xl font-mono font-bold">Step Into Success with Online Learning</h1>
                    <p className="text-xl">Learn at your own pace with expert-led content.</p>
                </div>
            </div>

            <div className="relative h-[550px] bg-[url('/images/s3.jpg')] bg-cover bg-center ">
                <div className="absolute inset-0  bg-black opacity-50"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center px-7 text-center  z-10 text-white">
                    <h1 className="text-5xl font-mono font-bold">Master New Skills from Home</h1>
                    <p className="text-xl">From beginner to pro — courses for every level.</p>
                </div>
            </div>

        </Slider>
    );
};

export default Banner;