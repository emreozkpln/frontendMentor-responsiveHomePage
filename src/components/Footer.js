import React from 'react'
import img1 from '../assets/images/image-retro-pcs.jpg'
import img2 from '../assets/images/image-top-laptops.jpg'
import img3 from '../assets/images/image-gaming-growth.jpg'

export default function () {
  return (
    <div className='grid grid-cols-1 grid-rows-3 xl:grid-rows-[120px] gap-y-6 mt-7 xl:grid-cols-3'>
        <div className='col-span-1 flex gap-x-7'>
            <img src={img1}/>
            <div className='flex flex-col gap-y-1'>
                <div className='text-gray-300 font-bold text-3xl'>01</div>
                <div className='font-bold text-lg'>Reviving Retro Pc</div>
                <div className='text-gray-400'>What happends when old PCs are given moders upgrades?</div>
            </div>
        </div>
        <div className='col-span-1 flex gap-x-7'>
            <img src={img2}/>
            <div className='flex flex-col gap-y-1'>
                <div className='text-gray-300 font-bold text-3xl'>02</div>
                <div className='font-bold text-lg'>Top 10 Laptops of 2022</div>
                <div className='text-gray-400'>Our best picks for various needs and budgets</div>
            </div>
        </div>
        <div className='col-span-1 flex gap-x-7'>
            <img src={img3}/>
            <div className='flex flex-col gap-y-1'>
                <div className='text-gray-300 font-bold text-3xl'>03</div>
                <div className='font-bold text-lg'>The Growth of Gaming</div>
                <div className='text-gray-400'>How the pandemic has sparked fresh opportunities</div>
            </div>
        </div>
    </div>
  )
}
