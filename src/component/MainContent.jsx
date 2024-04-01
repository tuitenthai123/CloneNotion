import React,{useState,useEffect} from 'react'
import axios from 'axios'

import anh1 from '../asset/anh1.jpg'
import anh2 from '../asset/anh2.jpg'

const MainContent = () => {
    const [Nhietdo, setNhietdo] = useState(0)
    const [Doam, setDoam] = useState(0)
    const laydulieu = async () => {
        const response = await axios.get('https://nguyenhuynhphuc-608dc-default-rtdb.asia-southeast1.firebasedatabase.app/data.json');
        const currentNhietDo = response.data?.nhietDo;
        const currentDoAm = response.data?.doAm;
        setNhietdo(currentNhietDo)
        setDoam(currentDoAm)
    }
    useEffect(() => {
    const inter= setInterval(() => {
                    laydulieu();
                }, 1000);
    return () => clearInterval(inter);
    }, [])


  return (
    <div className='flex gap-5'>
{/* card 1 */}
        <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-1/2 max-w-[45rem] flex-row ">
        <div
            className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
            <img
            src={anh1}
            alt="card-image" className="object-scale-down w-full h-full" />
        </div>
        <div className="p-6 flex flex-col items-start justify-center">
            <h6
            className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
            Nhiệt Độ
            </h6>
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {Nhietdo}°C
            </h4>
        </div>
        </div> 
 {/* card 2 */}
        <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-1/2 max-w-[45rem] flex-row ">
        <div
            className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
            <img
            src={anh2}
            alt="card-image" className="object-scale-down w-full h-full" />
        </div>
        <div className="p-6 flex flex-col items-start justify-center">
            <h6
            className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
            Độ Ẩm
            </h6>
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {Doam} %
            </h4>
        </div>
        </div> 

    </div>
  )
}

export default MainContent