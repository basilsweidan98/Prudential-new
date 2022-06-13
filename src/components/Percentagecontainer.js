import React from 'react'

function Percentagecontainer() {
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 mt-20 m-14 mb-20 lg:gap-3 md:gap-4 gap-8 container'>
            <div>
                <h2 className='text-blue-600 lg:text-5xl md:text-3xl text-3xl font-bold mb-2 lg:mb-4 container'>250+</h2>
                <p className='text-gray-500 text-xs  lg:mb-0 lg:text-sm '>API requests per day, peaking at 13,000 request second</p>
            </div>
            <div>
                <h2 className='text-blue-600 lg:text-5xl md:text-3xl text-3xl font-bold mb-2 lg:mb-4 container'>90%</h2>
                <p className='text-gray-500 text-xs  lg:mb-0 lg:text-sm'>Amet ante eget mattis quisque id urna quis scelerisque sit.</p>
            </div>
            <div>
                <h2 className='text-blue-600 lg:text-5xl md:text-3xl text-3xl font-bold mb-2 lg:mb-4 container'>135+</h2>
                <p className='text-gray-500 text-xs lg:mb-0 lg:text-sm'>Amet ante eget mattis quisque id urna quis scelerisque sit.</p>
            </div>
            <div>
                <h2 className='text-blue-600 lg:text-5xl md:text-3xl text-3xl font-bold mb-2 lg:mb-4 container'>69+</h2>
                <p className='text-gray-500 text-xs lg:mb-0 lg:text-sm'>Amet ante eget mattis quisque id urna quis scelerisque sit.</p>
            </div>

        </div>
    )
}

export default Percentagecontainer