import { useState } from 'react'
import axios from 'axios';


const Signup = ({hideForm, convert}) => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [repass, setRepass] = useState('')

  const handleSubmit = () => {
      if(pass === repass){
        axios.post('http://localhost:9001/user/signup',{user, pass})
          .then(res => alert(res.data.respone ? 'Đăng kí tài khoản thành công':'Đăng kí tài khoản không thành công') );
      }else{
        alert('Nhập lại mật khẩu không khớp')
      }   
  }

  return (
    <div className="relative py-6 px-10 h-100 mt-20 bg-white shadow-xl rounded-xl ">
    <span className="absolute font-bold top-0 right-0 px-4 py-2 hover:bg-[#f00] hover:cursor-pointer hover:text-white" onClick={hideForm}>x</span>
    <form action="">
      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-800 font-bold">Username:</label>
        <input 
          type="text" 
          name="name" 
          id="name" 
          placeholder="Username" 
          className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
          value={user}
          onChange={(e)=>setUser(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="pass" className="block text-gray-800 font-bold">Password:</label>
        <input 
          type="password" 
          name="name" id="pass" 
          placeholder="Password" 
          className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
          value={pass}
          onChange={(e)=>setPass(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="repass" className="block text-gray-800 font-bold">Enter Password:</label>
        <input 
          type="password" 
          name="repass" 
          id="repass" 
          placeholder="Enter Password" 
          className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" 
          value={repass}
          onChange={(e)=>setRepass(e.target.value)}
        />

        <p href="#" className="text-sm font-thin text-gray-800 hover:underline mt-4 inline-block hover:text-indigo-600 cursor-pointer" onClick={convert}>To Form LogIn?</p>
      </div>
      <button 
        className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded"
        onClick={handleSubmit}
      >
        Login
      </button>
    </form>
  </div>
  )
}

export default Signup;