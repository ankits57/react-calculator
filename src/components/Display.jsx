import React from 'react'

const Display = ({text}) => {
  return (
    <div className='relative bg-black h-96 lg:h-screen'>
        <div className='absolute bottom-0 right-0 h-30 w-full mt-auto pr-1'>
            <h1 className='text-white text-end text-8xl tracking-tighter overflow-hidden break-words'>{text}</h1>
        </div>
    </div>
  )
}

export default Display