import React from 'react'
import Navbar from './Navbar'
import video from '../images/video.png'
function Upperside() {
    return (
        <div className=" lg:h-screen lg:w-full md:w-full  h-screen  bg-cover bg-no-repeat lgLmx-auto bg-slate-700 text-white bg-[url('images/image3.png')]  " >
            <Navbar />
            <div className="w-full flex  justify-center lg:mt-36 lg:pt-7 md:mt-40 mt-40 ">
                <p className='text-center  w-72 lg:w-2/4  md:w-2/5  md:text-xl lg:text-4xl  '>Accelerate your data-driven decisioning with an algorithm that’s been trained on the world’s best datasets!</p>
            </div>
            <div className='w-full  flex justify-center lg:mt-7 md:mt-7 mt-5 pb-5 '>
                <a href='#'>
                    <img src={video} className=" lg:p-5 md:p-4 p-2 rounded-full bg-yellow-400 hover:border  " /></a>
                <a href='#' className='lg:m-3   md:m-3 m-2 lg:text-base md:text-sm text-xs hover:underline '>Watch video</a>
            </div>
        </div>
    )
}

export default Upperside