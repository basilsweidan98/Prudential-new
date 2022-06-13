import React from 'react'
import helthrisk from '../images/helthrisk.png';
import lifeexpec from '../images/lifeexpec.png';
import analysis from '../images/analysis.png'
function Products() {
    return (
        <div className=" gap-3 grid grid-cols-3 mt-5 ml-5 mr-3">

            <div className="text-center pb-20 hover:shadow">
                <img src={analysis} className="hover:border rounded-full bg-slate-100 lg:w-32 md:w-24 w-16 mb-4 mx-auto " />
                <h5 className="lg:text-xl md:text-base text-sm font-medium md:mb-2  lg:mb-2 mb-7">Retirement Analytics</h5>
                <p className="text-gray-500 mt-4 mb-10 lg:text-base text-xs">Some example use cases lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ante eget mattis quisque id urna quis scelerisque sit.</p>
                <a href='#' className=' text-blue-600 font-bold m-4 mt-5 lg:text-sm md:text-sm text-xs hover:underline hover:bg-blue-600 hover:text-white hover:p-2 rounded-lg'>LEARN MORE</a>
            </div>

            <div class="text-center pb-20 hover:shadow">
                <img src={analysis} className="hover:border rounded-full bg-slate-100 lg:w-32 md:w-24 w-16 mb-4 mx-auto " />
                <h5 className="lg:text-xl md:text-base text-sm font-medium  mb-7 md:mb-2  lg:mb-2 ">Life Expectancy Analytics</h5>
                <p className="text-gray-500 mb-10 md:mt-4 lg:text-base text-xs">Some example use cases lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ante eget mattis quisque id urna quis scelerisque sit.</p>
                <a href='#' className=' text-blue-600 font-bold m-4 mt-5 lg:text-sm md:text-sm text-xs hover:underline hover:bg-blue-600 hover:text-white hover:p-2 rounded-lg'>LEARN MORE</a>
            </div>


            <div class="text-center pb-20 hover:shadow">
                <img src={analysis} className="hover:border rounded-full bg-slate-100 lg:w-32 md:w-24 w-16 mb-4 mx-auto " />
                <h5 className="lg:text-xl md:text-base text-sm font-medium md:mb-2  lg:mb-2 mb-7">Health Risk Profile</h5>
                <p className="text-gray-500 mt-4 mb-10 lg:text-base text-xs">Some example use cases lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ante eget mattis quisque id urna quis scelerisque sit.</p>
                <a href='#' className=' text-blue-600 font-bold m-4 mt-5 lg:text-sm md:text-sm text-xs hover:underline hover:bg-blue-600 hover:text-white hover:p-2 rounded-lg '>LEARN MORE</a>
            </div>
        </div>
    )
}

export default Products