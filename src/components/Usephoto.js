import React from 'react';
import photo from '../images/photo.png';

function Usephoto() {
    return (

        <div className=" lg:gap-5  md:gap-3 gap-1 grid grid-cols-3 lg:m-0 md:m-0 m-1 font-inter ">

            <div className=' border rounded hover:shadow-xl '>
                <div className='mb-5 '>
                    <img src={photo} className=' rounded container' />
                    <h3 className=' font-bold m-4 text-xs lg:text-base xl:text-xl md:text-sm whitespace-nowrap  '>Wealth Management</h3>
                    <p className=' text-xs lg:text-xs md:text-xs text-left m-4  lg:mb-8 xl:mb-7  pb-4 md:pb-7  lg:pr-1 text-slate-500 '>PruScore can help make it personalized with more precise lifespan for the individual and family</p>
                    <a href='#' className=' text-blue-600 font-bold m-4  lg:text-sm md:text-xs text-xs hover:underline '>LEARN MORE</a>
                </div>
            </div>

            <div className=' border rounded hover:shadow-xl '>
                <div className='mb-5'>
                    <img src={photo} className=' rounded container' />
                    <h3 className='font-bold m-4 text-xs lg:text-lg md:text-sm '>Wellness</h3>
                    <p className='text-xs lg:text-xs md:text-xs text-left m-4  lg:pr-1 lg:mb-10 md:pb-0 text-slate-500 '>PruScore combined with a wellness app can provide more incentives incorporating wellness into insurance products</p>
                    <a href='#' className=' text-blue-600 font-bold m-4 lg:text-sm md:text-xs text-xs hover:underline'>LEARN MORE</a>
                </div>
            </div>

            <div className=' border rounded hover:shadow-xl'>
                <div className='mb-5'>
                    <img src={photo} className=' rounded container' />
                    <h3 className='font-bold m-4 text-xs lg:text-lg md:text-sm whitespace-nowrap '>Long-term Care</h3>
                    <p className=' text-xs lg:text-xs md:text-xs text-left m-4 mb-8 lg:mb-6 xl:mb-10 md:pb-4  lg:pr-1 text-slate-500 '>PruScore combined with a health tracking device app can provide for precise planning of cashflows</p>
                    <a href='#' className=' text-blue-600 font-bold m-4 lg:text-sm md:text-xs text-xs hover:underline '>LEARN MORE</a>
                </div>
            </div>
        </div>
    )
}

export default Usephoto

