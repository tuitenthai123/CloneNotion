import React,{useState,useEffect} from 'react'
import axios from 'axios'

import anh1 from '../asset/anh1.jpg'
import anh2 from '../asset/anh2.jpg'
import Chart from './Chart'

const MainContent = () => {
    const [Nhietdo, setNhietdo] = useState(0)
    const [Doam, setDoam] = useState(0)
    const [arr, setArr] = useState([]);

    //Hàm sử lý thêm vào mảng
    const handleAddArr = (newValue) => setArr(
        pre => {
            if(pre.length < 10) return [...pre, newValue];
            else{
                let [firstPositionArr, ...arrRemaining] = pre;
                return [...arrRemaining, newValue];
            }
        }
    )

    const laydulieu = async () => {
        const response = await axios.get('https://nguyenhuynhphuc-608dc-default-rtdb.asia-southeast1.firebasedatabase.app/data.json');
        const currentNhietDo = response.data?.nhietDo;
        const currentDoAm = response.data?.doAm;
        handleAddArr(response.data)
        setNhietdo(currentNhietDo)
        setDoam(currentDoAm)
    }

    useEffect(() => {
    const inter= setInterval(() => {
                    laydulieu();
                }, 1000);
    return () => clearInterval(inter);
    }, [Nhietdo, Doam, arr])


  return (
    <div className='flex flex-col'>
    <div className='flex gap-5 mb-20'>
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
        <Chart 
            labelChart='Biểu đồ nhiệt độ độ ẩm'
            labelX='Thời gian-số giây trước(s)'
            arrLabelX={[
              '1','2','3','4','5','6','7','8','9','10'
            ]}
            nameLeftY='Nhiệt độ'
            typeChartLeftY='spline'
            dataLeftY={arr.map(item=>item.nhietDo)}
            labelLeftY='Nhiệt độ(độ C)'

            nameRightY='Độ ẩm'
            typeChartRightY='spline'
            dataRightY={arr.map(item=>item.doAm)}
            labelRightY='Độ ẩm(%)'
          />
    </div>
  )
}

export default MainContent