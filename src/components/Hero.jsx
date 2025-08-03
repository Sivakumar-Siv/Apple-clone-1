import React from "react";

const Hero = () => {
    return(
        <>
        <div className='bg-[#F5F5F7] flex flex-col gap-3 justify-center text-center mt-8'>
                <h1 className='text-3xl md:text-6xl font-bold mt-5'>iPhone</h1>
                <p className='md:text-2xl font-semibold'>Meet the iPhone 16 family.</p>
                <div className='flex gap-5 justify-center text-center'>
                    <button className='rounded-full bg-blue-500 px-5 py-2 text-white hover:bg-blue-600 transition'>Learn more</button>
                    <button className="border border-blue-500 text-blue-500 px-5 py-2 rounded-full hover:bg-blue-600 hover:text-white transition">Shop iPhone</button>
                </div>
                <p className='w-fit mx-auto justify-center text-center bg-gradient-to-r from-blue-700 via-violet-600 to-orange-500 text-transparent bg-clip-text md:text-xl pb-5'>Built for Apple Intelligence</p>
            </div>

            <div>
                <video
                    src="/images/iphone-video.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className='w-screen'
                />
            </div>

        </>
    );
}
export default Hero;