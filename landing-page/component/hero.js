import React from 'react'
import house from '@/public/house.png'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className='h-[350px] pb-'>
        <div className='relative'>
            
            {/* Text */}
            <div className='absolute z-20 top-0 left-0 w-full h-[170px] place-content-center justify-center'>
                <p className='text-4xl font-bold text-center'>Your Dream Space, Our Creative Passion</p>
            </div>

            
            {/* Overlay */}
            <div className='flex flex-col absolute z-10 top-0 left-0 w-full bg-[#e4e3d3]/60 h-[350px]'>

            </div>

            {/* Image: House */}
            <div className='absolute top-0 left-0 h-full bg-[#e4e3d3]'>
                <Image 
                    className='w-[full] h-[350px]'
                    src={house}
                    alt='house'
                    placeholder='blur'
                    
                />
            </div>
        </div>
        
        {/* <div className='h-32'></div> */}
    </div>
  )
}
{/* <div className='flex flex-col items-center justify-center bg-scroll w-full'>
        <div className='relative'>
            <div className=''>
                <Image 
                    src={house}
                    alt='house'
                    placeholder='blur'
                />
            </div>
            <div className="absolute z-20 top-0 left-0 w-full h-full bg-[#e4e3d3]/65 place-content-center">
                <p className='text-center font-semibold text-7xl'>Your Dream Space, Our Creative Passion</p>
            </div>
            
            
        </div>
    </div> */}