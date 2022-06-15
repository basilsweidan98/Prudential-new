import React from 'react'
import logo from '../images/logo.png';
import facebook from '../images/facebook.png';
import linkedin from '../images/linkedin.png';
import twitt from '../images/twitter.png';


function Footer() {
    return (

        <footer className="bg-gray-800 font-inter">
            <div className='py-2 px-10 bg-gray-800 md:flex md:items-center md:justify-between border-b '>
                <dev className="flex gap-2 ">
                    <a href="#" className='rounded hover:bg-yellow-400  hover:text-black text-xs text-white font-semibold p-2'>Research</a>
                    <a href="#" className='rounded hover:bg-yellow-400 hover:text-black text-xs text-white  font-semibold p-2'>Use Cases</a>
                    <a href="#" className='rounded hover:bg-yellow-400 hover:text-black text-xs text-white  font-semibold p-2'>About</a>
                    <a href="#" className='rounded hover:bg-yellow-400 hover:text-black text-xs text-white  font-semibold p-2'>News </a>
                    <a href="#" className='rounded hover:bg-yellow-400 hover:text-black text-xs text-white  font-semibold p-2'>Contact</a>
                </dev>

            </div>
            <div className="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
                <div>
                    <div className="grow text-left text-white text-2xl  rounded-md  font-medium">
                        <img src={logo} alt="prudential logo" className=' lg:w-40 md:w-40 lg:pl-3 w-32 ' />
                    </div>
                    <div className="flex space-x-2 mt-5  pl-3 w-36 lg:w-40 ">
                        <a href="#!" className="border rounded-full lg:p-3 p-2 ">
                            <img src={twitt} />
                        </a>

                        <a href="#!" className="border rounded-full lg:pl-4 lg:pr-4 lg:pt-3 lg:pb-2 pr-2.5 pl-2.5 pt-2 ">
                            <img src={facebook}  />
                        </a>
                        <a href="#!" className="border rounded-full lg:p-3 p-2 ">
                            <img src={linkedin}  />
                        </a>

                    </div>
                </div>
                <div>
                    <h2 className="mb-6  text-sm font-semibold text-white uppercase">Prudential</h2>
                    <ul className="text-gray-300">
                        <li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm">
                            <a href="#" className="hover:underline">About</a>
                        </li>
                        <li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm">
                            <a href="#" className="hover:underline">News</a>
                        </li>
                        <li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm">
                            <a href="#" className="hover:underline">Investor relations</a>
                        </li><a href="#" className="hover:underline">
                        </a><li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm">
                            <a href="#" className="hover:underline">
                        </a><a href="#" className="hover:underline">Corporate Responsibility</a>
                        </li>
                        <li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-s"><a href="#" className="hover:underline">
                        </a><a href="#" className="hover:underline">Careers</a>
                        </li>
                        <li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm"><a href="#" className="hover:underline">
                        </a><a href="#" className="hover:underline">Help & Support</a>
                        </li>
                        <li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm"><a href="#" className="hover:underline">
                        </a><a href="#" className="hover:underline">Forms</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6  text-sm font-semibold text-white uppercase">Prudential</h2>
                    <ul className="text-gray-300">
                        <li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm">
                            <a href="#" className="hover:underline">About</a>
                        </li>
                        <li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm">
                            <a href="#" className="hover:underline">News</a>
                        </li>
                        <li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm">
                            <a href="#" className="hover:underline">Investor relations</a>
                        </li><a href="#" className="hover:underline">
                        </a><li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm"><a href="#" className="hover:underline">
                        </a><a href="#" className="hover:underline">Corporate Responsibility</a>
                        </li>
                        <li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm"><a href="#" className="hover:underline">
                        </a><a href="#" className="hover:underline">Careers</a>
                        </li>
                        <li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm"><a href="#" className="hover:underline">
                        </a><a href="#" className="hover:underline">Help & Support</a>
                        </li>
                        <li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm"><a href="#" className="hover:underline">
                        </a><a href="#" className="hover:underline">Forms</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6  text-sm font-semibold text-white uppercase">Prudential</h2>
                    <ul className="text-gray-300">
                        <li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm">
                            <a href="#" className="hover:underline">About</a>
                        </li>
                        <li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm">
                            <a href="#" className="hover:underline">News</a>
                        </li>
                        <li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm">
                            <a href="#" className="hover:underline">Investor relations</a>
                        </li><a href="#" className="hover:underline">
                        </a><li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm"><a href="#" className="hover:underline">
                        </a><a href="#" className="hover:underline">Corporate Responsibility</a>
                        </li>
                        <li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm"><a href="#" className="hover:underline">
                        </a><a href="#" className="hover:underline">Careers</a>
                        </li>
                        <li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm"><a href="#" className="hover:underline">
                        </a><a href="#" className="hover:underline">Help & Support</a>
                        </li>
                        <li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm"><a href="#" className="hover:underline">
                        </a><a href="#" className="hover:underline">Forms</a>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="py-2 px-10 bg-gray-800  border-t">
                <span className=" text-gray-300 lg:text-sm md:text-sm text-xs">© 2021 <a href="#">Prudential Financial, Inc. and its related entities.</a>
                </span>

            </div>
        </footer>

    )
}
export default Footer