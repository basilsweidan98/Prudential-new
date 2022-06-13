import React from 'react'

function Usecase() {
    return (
        <div className=' ml-6 grow grid lg:border-r md:border-r '>
            <div className=' container'>
                <p className=' lg:w-60 md:w-52 lg:text-left md:text-left text-center  text-3xl  font-simibold  text-gray-700 '>Use Cases for <span className='text-black text-3xl font-bold'>PruScore Alpha</span></p>
                <p className=' lg:w-96 md:w-52 lg:text-left md:text-left md:pr-2 lg:text-base md:text-sm text-gray-600 text-center lg:mt-11  mt-5 mr-3'>Some example use cases lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ante eget mattis quisque id urna quis scelerisque sit.</p>
            </div>
            <div className='flex lg:mt-32  gap-3 mt-14 container lg:text-left md:text-left w-full justify-center lg:justify-start md:justify-start mb-8 lg:mb-0 md:mb-0'>
                <a href='#'>
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-alt-circle-left" className="lg:w-14 lg:h-14 md:w-10 w-10 h-10 hover:border rounded-full" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-72-20v40c0 6.6-5.4 12-12 12H256v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12z"></path>
                    </svg>
                </a>
                <a href='#'>
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-alt-circle-right" className="lg:w-14 lg:h-14 md:w-10 w-10 h-10 hover:border rounded-full" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"></path>
                    </svg></a>

            </div>
        </div>
    )
}

export default Usecase