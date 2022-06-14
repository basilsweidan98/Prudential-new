import React from 'react'
import Tools from './Tools'
function Coderight() {
    return (

        <div className='grid grid-rows-2 text-left ml-7 mr-7 mb-5 lg:mb-0 '>
            <div className=' '>
                <h2 className=' font-bold mt-9 lg:w-4/5 lg:text-3xl  md:text-2xl text-lg'>The world’s most powerful and easy-to-use APIs</h2>
                <p className="text-gray-500 lg:mt-5 mt-1 lg:mb-10 mb-7 text-sm lg:text-base md:text-base ">We agonise over the right abstractions so your teams don’t need to stitch together disparate systems or spend months integrating payments functionality.</p>
                <a href="#" className='bg-yellow-400 rounded font-bold text-black text-xs font-sans p-2 lg:p-3 lg:pl-4 lg:pr-4 hover:border '>Read documentation</a>
            </div>

            <div className=' '>
                <div className="grid grid-rows-2">
                    <Tools />
                    <Tools />
                </div>
            </div>
        </div>
    )
}

export default Coderight