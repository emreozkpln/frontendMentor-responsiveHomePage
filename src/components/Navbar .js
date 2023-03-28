import React, { useState } from 'react'
import logo from '../assets/images/logo.svg'
import menuOpen from '../assets/images/icon-menu.svg'
import menuClose from '../assets/images/icon-menu-close.svg'

export default function Navbar() {

    const [menu, setmenu] = useState(false)

    return (
        <div className='h-[60px] flex justify-between '>
            <div>
                <img src={logo} />
            </div>
            <div className='xl:flex items-center gap-x-12 justify-center hidden'>
                <div className='text-gray-700 font-normal'>Home</div>
                <div className='text-gray-700 font-normal'>News</div>
                <div className='text-gray-700 font-normal'>Popular</div>
                <div className='text-gray-700 font-normal'>Trending</div>
                <div className='text-gray-700 font-normal'>Categories</div>
            </div>
            <button className='block xl:hidden group'>
                <div>
                    <img src={menuOpen} />
                </div>
                <div className='p-6 absolute top-0 -right-full opacity-0 h-screen w-8/12 bg-white border transform group-focus:right-0 group-focus:opacity-100 transition-all duration-300'>
                    <button className='flex items-center ml-auto'><img src={menuClose}/></button>
                    <div className='flex flex-col items-start gap-y-4 mt-16 '>
                        <div className='text-gray-900 font-medium'>Home</div>
                        <div className='text-gray-900 font-medium'>News</div>
                        <div className='text-gray-900 font-medium'>Popular</div>
                        <div className='text-gray-900 font-medium'>Trending</div>
                        <div className='text-gray-900 font-medium'>Categories</div>
                    </div>
                </div>
            </button>
        </div>
    )
}
