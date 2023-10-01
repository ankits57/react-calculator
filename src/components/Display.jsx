import React from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'

const Display = ({text}) => {
  return (
    <div className='relative bg-black h-[280px] lg:h-screen'>
        <button className='text-white w-8 h-8 text-xl' type='button'><BsThreeDotsVertical/></button>
        <div className='absolute bottom-0 right-0 h-30 w-full mt-auto pr-1'>
            <h1 className='text-white text-end text-8xl tracking-tighter overflow-hidden break-words'>{text}</h1>
        </div>
    </div>
  )
}

export default Display