import React from 'react'

function Lifeexpectancy() {
    return (
        <div className=' flex mt-20 ml-5 mr-7 flex-1 lg:space-x-32 '>
            <div >
                <h1 className=' pr-20 text-3xl pt-2 lg:pt-0 md:pt-0 md:text-5xl lg:text-7xl  w-1/3 font-bold text-stone-900'>Life expectancy <br /><span className='text-slate-400 '>algorithm</span></h1>
            </div>

            <div className=' lg:mt-5   container '>
                <p className=' font-sans  text-gray-600  mb-2 lg:w-11/12 lg:mb-11 text-xs lg:text-lg  md:text-base  '>PruScore Alpha is an algorithm that is utilised at present within Prudential to predict life expectancy for their Life products. The algorithm has further commercial benefits across other Prudential business lines, as well as opportunities to commercialize to the external market as a product.</p>
                <a href="#" className='bg-yellow-400  rounded font-semibold lg:font-bold lg:p-3 lg:pl-6  lg:pr-6 text-black text-xs font-sans p-1 hover:border'>Learn more</a>
            </div>
        </div>
    )
}

export default Lifeexpectancy