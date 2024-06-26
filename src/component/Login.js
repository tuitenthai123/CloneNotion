import { useRef, useState } from 'react'
import axios from 'axios';


const Login = ({hideForm, convert}) => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [isLogin, setIsLogin] = useState(false);


  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/user/login', { user, pass });
      if (response.data.respone) {
        setIsLogin(true);
        // Chuyển hướng đến dashboard sau khi đăng nhập thành công 
          window.location.href = `http://localhost:3000/dashboard/main`;
      } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng');
      }
    } catch (error) {
      console.error('Đăng nhập thất bại:', error);
    }

  };

  return (
        <div className="relative py-6 px-8 h-80 mt-20 bg-white rounded-xl shadow-xl">
        <span className="absolute font-bold top-0 right-0 px-4 py-2 hover:bg-[#f00] hover:cursor-pointer hover:text-white" onClick={hideForm}>x</span>
        <form action="post" method='post'>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-800 font-bold">Username:</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              placeholder="username" 
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" 
              value={user}
              onChange={(e)=>setUser(e.target.value)}
              />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-800 font-bold">Password:</label>
            <input 
              type="password" 
              name="email" 
              id="email" 
              placeholder="password" 
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" 
              value={pass}
              onChange={(e)=>setPass(e.target.value)}
              />

            <p href="#" className="text-sm font-thin text-gray-800 hover:underline mt-4 inline-block hover:text-indigo-600 cursor-pointer" onClick={convert}>To Form SignUp?</p>
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

export default Login