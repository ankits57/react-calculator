import React from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'

const Display = ({text, toggle, setToggle}) => {
  
  return (
    <div className='relative bg-black h-[280px] lg:h-screen'>
        <button className='text-white w-8 h-8 text-xl' onClick={()=>setToggle(!toggle)} type='button'><BsThreeDotsVertical/></button>
       {toggle &&
      <div className="w-[110px] bg-white absolute top-0 ml-2 mt-2 rounded-md">
          <p onClick={()=>setToggle(!toggle)}>System Default</p>
          <p onClick={()=>setToggle(!toggle)}>Dark</p>
          <p onClick={()=>setToggle(!toggle)}>Light</p>
        </div>
        }
        <div className='absolute bottom-0 right-0 h-30 w-full mt-auto pr-1'>
            <h1 className='text-white text-end text-8xl tracking-tighter overflow-hidden break-words'>{text}</h1>
        </div>
    </div>
  )
}

export default Display