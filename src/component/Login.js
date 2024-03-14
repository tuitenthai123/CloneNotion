import React from 'react'
// import { Form, Link } from 'react-router-dom'
import { FaUser, FaUnlockAlt } from "react-icons/fa";


const Login = ({hideForm}) => {
  return (
      <form action='' method='' className='relative flex flex-col items-center h-1/3 w-1/5 bg-[#ffffff] p-3'>
          <span className='absolute top-0 right-0 px-3 py-1 hover:bg-[#f55] font-bold cursor-pointer' onClick={hideForm}>x</span>
          <h3 className='text-xl my-2 cl-[#c5c5c5]'>Log In</h3>
          <div className='flex items-center w-full p-2 bg-[#fff] border-2 border-solid rounded-2xl mb-2'>
              <FaUser />
              <input type='text' placeholder='Username' className='flex-1 mx-2 outline-none'/>
          </div> 
          <div className='flex items-center w-full p-2 bg-[#fff] border-2 border-solid rounded-2xl'>
              <FaUnlockAlt />
              <input type='password' placeholder='Password' className='flex-1 mx-2 outline-none'/>
          </div>
          <input type='submit' value={'Login'} className=' w-full py-2 bg-[#55ff55] border-2 border-solid mt-10  border-solid rounded-2xl cursor-pointer' />
          {/* <div>
            <div>
              <input type='checkbox' />Remember me
            </div>
            <Link to='/'>Forgot passwork</Link>
          </div> */}
      </form>
  )
}

export default Login