import React from 'react'
import left from '../images/leftphoto.png'
import right from '../images/rightphoto.png'

function Usecase() {
    return (
        <div className=' ml-6 grow grid lg:border-r md:border-r font-inter'>
            <div>
                <p className=' lg:w-60 md:w-52 lg:text-left md:text-left text-center text-3xl font-simibold  text-gray-700 '>Use Cases for <span className='text-black text-3xl font-bold'>PruScore Alpha</span></p>
                <p className=' lg:w-96  md:w-52 lg:text-left md:text-left md:pr-2 lg:text-base md:text-sm text-gray-600 text-center lg:mt-11  mt-5 mr-3'>Some example use cases lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ante eget mattis quisque id urna quis scelerisque sit.</p>
            </div>
            <div className=' flex lg:mt-32  gap-3 mt-14  lg:text-left md:text-left w-full justify-center lg:justify-start md:justify-start mb-8 lg:mb-0 md:mb-0'>
                <a href='#' className=' border  border-slate-300 p-7 lg:p-7 xl:p-9 rounded-full'>
                   <img src={left} className="w-5  xl:w-6" alt="left side photo" />
                </a>
                <a href='#' className=' border border-slate-300 p-7 lg:p-7 xl:p-9 rounded-full'>
                <img src={right} className="w-5 xl:w-6" alt="right side photo"/>

                   </a>

            </div>
        </div>
    )
}

export default Usecase