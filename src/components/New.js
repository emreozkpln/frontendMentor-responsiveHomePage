import React from 'react'

export default function () {
  return (
    <div className='flex flex-col bg-gray-900 p-5 gap-y-6 py-7'>
        <div className='text-amber-400 text-4xl font-semibold'>New</div>
        <div className='grid gap-y-3 w-full'>
            <div className='text-white font-bold text-lg'>Hyrdrogen VS Electric Cars</div>
            <div className='text-gray-400'>Will hyrdrogen-fueled cars ever catch up to EVs?</div>
        </div>
        <div className='w-full border border-gray-400 h-px my-2'></div>
        <div className='grid gap-y-3 w-full'>
            <div className='text-white font-bold text-lg'>The Downsides of Al Artistry</div>
            <div className='text-gray-400'>What are the possible adverse effects of on-demand Al image generation?</div>
        </div>
        <div className='w-full border border-gray-400 h-px my-2'></div>
        <div className='grid gap-y-3 w-full'>
            <div className='text-white font-bold text-lg'>Is Vc Funding Drying Up?</div>
            <div className='text-gray-400'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</div>
        </div>
    </div>
  )
}
