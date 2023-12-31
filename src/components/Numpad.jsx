import React from 'react'
import { MdBackspace,MdPercent } from "react-icons/md";
import {LuDivide} from  "react-icons/lu"
import {RxCross2} from  "react-icons/rx"
import {HiMinus,HiPlus} from  "react-icons/hi"
import {BsDot} from 'react-icons/bs'
import {FaEquals} from 'react-icons/fa'

const Numpad = ({setText, text}) => {
  const handleChange = (val) => {
    setText(text+val);
  }
  const evaluate = () => {
    const ans = eval(text)
    if(Number.isInteger(ans)) {
      setText(ans, toString())
    }
    else{
      setText(ans.toFixed(3).toString())
    }
  }
  return (
    <div className='grid grid-cols-4 gap-3 text-4xl m-auto mt-10 lg:h-screen lg:w-screen/2 lg:mt-1 lg:text-7xl lg:gap-20'>
        <button type="button" onClick={()=>setText('')}>AC</button>
        <button type="button" onClick={()=>setText(text.slice(0, text.length-1))}><MdBackspace className='m-auto'/></button>
        <button type="button" onClick={()=>handleChange('%')}><MdPercent className='m-auto'/></button>
        <button type="button" onClick={()=>handleChange('/')}><LuDivide className='m-auto'/></button>
        <button type="button" onClick={()=>handleChange('7')} className='mt-8'>7</button>
        <button type="button" onClick={()=>handleChange('8')} className='mt-8'>8</button>
        <button type="button" onClick={()=>handleChange('9')} className='mt-8'>9</button>
        <button type="button" onClick={()=>handleChange('*')} className='mt-8'><RxCross2 className='m-auto'/></button>
        <button type="button" onClick={()=>handleChange('4')} className='mt-8'>4</button>
        <button type="button" onClick={()=>handleChange('5')} className='mt-8'>5</button>
        <button type="button" onClick={()=>handleChange('6')} className='mt-8'>6</button>
        <button type="button" onClick={()=>handleChange('-')} className='mt-8'><HiMinus className='m-auto'/></button>
        <button type="button" onClick={()=>handleChange('1')} className='mt-8'>1</button>
        <button type="button" onClick={()=>handleChange('2')} className='mt-8'>2</button>
        <button type="button" onClick={()=>handleChange('3')} className='mt-8'>3</button>
        <button type="button" onClick={()=>handleChange('+')} className='mt-8'><HiPlus className='m-auto'/></button>
        <button type="button" className='mt-8'></button>
        <button type="button" onClick={()=>handleChange('0')} className='mt-8'>0</button>
        <button type="button" onClick={()=>handleChange('.')} className='mt-8'><BsDot className='m-auto'/></button>
        <button type="button" onClick={evaluate} className='mt-8'><FaEquals className='m-auto'/></button>
    </div>
  )
}

export default Numpad