import React from 'react'
import Logo from '../../public/logo.png'
import Image from 'next/image'

export const Footer = () => {
    return (


        <footer class=" rounded-lg shadow w-full bg-[#00308F]">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Image src={Logo} className="w-64" alt="SuperRay Logo" />
                        {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SuperRay</span> */}
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 ">
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/" class="hover:underline">SuperRay™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )

    {/* <footer className='w-full bg-[#00308F] h-20 p-2 ' >

            <h4 className="text-white text-center ">Super Ray</h4>
        </footer > */}

}
