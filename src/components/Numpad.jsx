import React from 'react'
import { MdBackspace,MdPercent } from "react-icons/md";
import {LuDivide} from  "react-icons/lu"
import {RxCross2} from  "react-icons/rx"
import {HiMinus,HiPlus} from  "react-icons/hi"
import {BsDot} from 'react-icons/bs'
import {FaEquals} from 'react-icons/fa'

const Numpad = () => {
  return (
    <div className='grid grid-cols-4 gap-3 text-4xl m-auto mt-10'>
        <button type="button">AC</button>
        <button type="button"><MdBackspace className='m-auto'/></button>
        <button type="button"><MdPercent className='m-auto'/></button>
        <button type="button"><LuDivide className='m-auto'/></button>
        <button type="button" className='mt-8'>7</button>
        <button type="button" className='mt-8'>8</button>
        <button type="button" className='mt-8'>9</button>
        <button type="button" className='mt-8'><RxCross2 className='m-auto'/></button>
        <button type="button" className='mt-8'>4</button>
        <button type="button" className='mt-8'>5</button>
        <button type="button" className='mt-8'>6</button>
        <button type="button" className='mt-8'><HiMinus className='m-auto'/></button>
        <button type="button" className='mt-8'>1</button>
        <button type="button" className='mt-8'>2</button>
        <button type="button" className='mt-8'>3</button>
        <button type="button" className='mt-8'><HiPlus className='m-auto'/></button>
        <button type="button" className='mt-8'></button>
        <button type="button" className='mt-8'>0</button>
        <button type="button" className='mt-8'><BsDot className='m-auto'/></button>
        <button type="button" className='mt-8'><FaEquals className='m-auto'/></button>
    </div>
  )
}

export default Numpad