import React from 'react'

export default function () {
    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 xl:gap-x-6 gap-y-3'>
            <div className='col-span-1 text-6xl font-bold'>The Bright Future of Web 3.0?</div>
            <div className='flex flex-col gap-x-5'>
                <div className='text-gray-700 leading-6 font-sans tracking-wide'>
                    We dive into the next evolution of the web that claims to put the power of the patforms back into the hands of the people. But is it really  fulfiiling its promise?
                </div>
                <button className='text-start  bg-red-500 py-3 px-14 w-40 mt-10'>
                    <div className='text-white items-center justify-center flex font-medium tracking-[.25rem] gap-x-2'>
                        READ <div>MORE</div>
                    </div>
                </button>
            </div>
        </div>
    )
}
