import React from 'react'
import img from '../assets/images/image-web-3-desktop.jpg'
import AltMenu from './AltMenu'
import New from './New'

export default function 
() {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-3 gap-x-7 grid-rows-[320px-250px] gap-y-6 '>
        <div className='xl:col-start-1 xl:col-span-2'>
            <img src={img}/>
        </div>
        <div className='xl:col-start-3 xl:row-start-1 xl:row-span-2'>
            <New/>
        </div>
        <div className='xl:row-start-2 xl:row-span-1 xl:col-span-2'>
            <AltMenu/>
        </div>
    </div>
  )
}
