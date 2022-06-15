import React from 'react'
import video from '../images/video.png'

function Upperside() {
    return (
      
        <div className=' font-inter justify-center flex flex-col text-white h-screen container mx-auto'>
            <div className="w-full ">
                <p className=' text-center xl:text-4xl  xl:px-72 2xl:px-96 md:text-2xl px-36 lg:text-3xl lg:px-48'>Accelerate your data-driven decisioning with an algorithm that’s been trained on the world’s best datasets!</p>
            </div>
            <div className='w-full  flex justify-center lg:mt-7 md:mt-7 mt-5 pb-5 '>
                <a href='#'>
                    <img src={video} className=" lg:p-5 md:p-4 p-2 rounded-full bg-yellow-400 hover:border  " /></a>
                <a href='#' className='lg:m-3  font-inter md:m-3 m-2 lg:text-base md:text-sm text-xs hover:underline '>Watch video</a>
            </div>
        </div>
    )
}

export default Upperside