import React, { useState } from 'react'
import { LuLogOut} from "react-icons/lu";
import { FaUserCheck } from "react-icons/fa";

import about1 from '../asset/about1.png'
import Modal from './Modal';
import Login from './Login';
import Signup from './Signup';


const MainPage = () => {
    const [login,setLogin] = useState(false);
    const showLogin = () => setLogin(true);
    const hideLogin = () => setLogin(false);

    const [signup,setSignup] = useState(false);
    const showSignup = () => setSignup(true);
    const hideSignup = () => setSignup(false);

  return (
    <>
      <div className="relative flex flex-col items-center justify-center w-full h-screen bg-[url('https://elead.com.vn/wp-content/uploads/2020/04/tai-hinh-nen-hoa-sen-dep-cho-may-tinh-20.jpg')] bg-no-repeat bg-cover">
          <div className="absolute flex items-center w-full h-full bg-[#00000080] z-0">
              <img src='https://ems.vlute.edu.vn/images/vlute_icon96.png' className='absolute top-0 left-0 px-5 py-2'/>
              <div className="absolute top-0 right-0 h-10 my-3 mx-3 text-2xl font-normal text-white">
                <button className="px-8 h-full rounded-2xl hover:bg-[#fff] hover:text-black" onClick={showLogin}>Login</button>
                <button className="px-8 h-full rounded-2xl hover:bg-[#fff] hover:text-black" onClick={showSignup}>Signup</button>
              </div>
          </div>
          <p className='text-6xl text-white z-10'>Take on Any Challenge of the Digital World</p>
          <p className='text-lg text-white text-center py-5 px-20 z-10'>Nguyễn Huỳnh Phúc 21004303</p>
      </div>

      {signup && 
        <Modal>
          <Signup 
            hideForm={hideSignup} 
            convert = {()=>{
              hideSignup();
              showLogin();
            }}
          />
            </Modal>
      }
      {
          login && 
            <Modal>
              <Login 
                hideForm={hideLogin}
                convert = {()=>{
                  hideLogin();
                  showSignup();
                }}
          />
        </Modal>
      }
    </>
  )
}

export default MainPage