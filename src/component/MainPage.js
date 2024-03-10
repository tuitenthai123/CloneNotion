import React from 'react'
import { LuLogOut } from "react-icons/lu";
import { FaUserCheck } from "react-icons/fa";
import about1 from '../asset/about1.png'


const MainPage = () => {
  return (
    <div>
        <div className='flex items-center justify-end gap-5'> 
            <div className='bg-white py-2 w-20  rounded-xl mt-2 flex justify-center items-center text-sm hover:scale-110 duration-300 cursor-pointer font-bold '>
                <LuLogOut /> <span className='ml-1'>Login</span> 
            </div>
            <div className='bg-white  py-2 w-28 rounded-xl mt-2 flex justify-center items-center text-sm hover:scale-110 duration-300 cursor-pointer font-bold mr-5'>
                <FaUserCheck /> <span className='ml-1'>Sign Up</span> 
            </div>
        </div>
        <div className='mt-14 flex items-center justify-center'>
            <img src={about1}></img>
        </div>
    </div>
  )
}

export default MainPage