/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'

const NavBar = () => (
    <div className="w-full z-50 top-0 py-3 sm:py-5  bg-sky-700 fixed">
        <div className="container flex items-center justify-between mx-auto ">
            <div className=' '>
                <a href="/">
                <h2 className='text-white text-2xl font-bold font-inter'>
                        VARUN GUPTA
                    </h2>
                </a>
            </div>
            <div className="hidden md:block">
                <ul className="flex items-center">

                    <li className="group pl-6">

                        <a href="/#about"
                            className="cursor-pointer font-semibold uppercase text-white">About</a>

                        <span className="block h-0.5 w-full group-hover:bg-yellow"></span>
                    </li>

                    <li className="group pl-6">

                        <a href="/#services"
                            className="cursor-pointer font-semibold uppercase text-white">Services</a>

                        <span className="block h-0.5 w-full group-hover:bg-yellow"></span>
                    </li>

                    <li className="group pl-6">

                        <a href="/#clients"
                            className="cursor-pointer font-semibold uppercase text-white">Clients</a>

                        <span className="block h-0.5 w-full group-hover:bg-yellow"></span>
                    </li>
                    <li className="group pl-6">

                        <a href="/#work"
                            className="cursor-pointer font-semibold uppercase text-white">Work</a>

                        <span className="block h-0.5 w-full group-hover:bg-yellow"></span>
                    </li>
                    <li className="group pl-6">

                        <a href="/#resume"
                            className="cursor-pointer font-semibold uppercase text-white">resume</a>

                        <span className="block h-0.5 w-full group-hover:bg-yellow"></span>
                    </li>

                    <li className="group pl-6">

                        <a href="/#contact"
                            className="cursor-pointer font-semibold uppercase text-white">Contact</a>

                        <span className="block h-0.5 w-full group-hover:bg-yellow"></span>
                    </li>

                </ul>
            </div>
        </div>
    </div>
)


export default NavBar