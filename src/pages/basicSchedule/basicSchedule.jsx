import React from 'react'
import Questions2 from '../../components/pages/aboutUs/questions2'
import Map from '../../components/pages/aboutUs/map'

const BasicSchedule = () => {
  return (
    <div>
        <div className='w-[85%] m-auto'>
            <div className='flex gap-8 py-10'>
            <p className='text-[#334155]'>Главная</p>
            <p className='text-[#334155]'>Расписаниe</p>
            <p className='text-[#8081BD]'>Расписание основное</p>
            </div>
            <b className='text-[#8081BD] text-[40px]'>Расписание основное</b>
        </div>
        <table className='w-[85%] m-auto my-10'>
            <thead>
                <tr className='text-[#334155] flex justify-between'>
                    <th className='bg-[#FDDC4E] w-[13%] rounded-2xl py-1'>День недели</th>
                    <th className='bg-[#FDDC4E] w-[24%] rounded-2xl py-1'>Время</th>
                    <th className='bg-[#FDDC4E] w-[60%] rounded-2xl text-left px-15 py-1'>Совместная игровая деятельность</th>
                </tr>
            </thead>
            <tbody>
                <tr className='text-[#334155] flex justify-between pt-5'>
                    <td className='text-center text-[#8081BD] border-b-[3px] border-[#FDDC4E] w-[13%] flex justify-center items-center'>Пн</td>
                    <td className="border-b-[3px] border-[#FDDC4E] w-[24%]">
                        <div className='flex flex-col justify-center text-[#8081BD]'>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] text-center'>8.30 - 9.00</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] text-center'>9.15 - 9.35</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] text-center'>9.40 - 10.00</p>
                            <p className='pb-2 text-center'>10.05 - 10.25</p>
                        </div>
                    </td>
                    <td className="border-b-[3px] border-[#FDDC4E] w-[60%]">
                        <div className='text-[#334155]'>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] pl-5'>Наблюдение психолога</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] pl-5'>Музыка</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] pl-5'>Математика</p>
                            <p className='pb-2 pl-5'>Лепка/Аппликация</p>
                        </div>
                    </td>
                </tr>
                <tr className='text-[#334155] flex justify-between pt-2'>
                    <td className='text-center text-[#8081BD] border-b-[3px] border-[#FDDC4E] w-[13%] flex justify-center items-center'>Вт</td>
                    <td className="border-b-[3px] border-[#FDDC4E] w-[24%]">
                        <div className='flex flex-col justify-center text-[#8081BD]'>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] text-center'>9.00 - 9.20</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] text-center'>9.25 - 9.45</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] text-center'>9.50 - 10.10</p>
                            <p className='pb-2 text-center'>10.05 - 10.25</p>
                        </div>
                    </td>
                    <td className="border-b-[3px] border-[#FDDC4E] w-[60%]">
                        <div className='text-[#334155]'>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] pl-5'>Физическая культура в зале</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] pl-5'>Развитие речи</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] pl-5'>Фронтальная игра с психологом</p>
                            <p className='pb-2 pl-5'>Лепка/Аппликация</p>
                        </div>
                    </td>
                </tr>
                <tr className='text-[#334155] flex justify-between pt-2'>
                    <td className='text-center text-[#8081BD] border-b-[3px] border-[#FDDC4E] w-[13%] flex justify-center items-center'>Ср</td>
                    <td className="border-b-[3px] border-[#FDDC4E] w-[24%]">
                        <div className='flex flex-col justify-center text-[#8081BD]'>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] text-center'>9.00 - 9.20</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] text-center'>9.25 - 9.45</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] text-center'>9.50 - 10.10</p>
                            <p className='pb-2 text-center'>10.15 - 10.35</p>
                        </div>
                    </td>
                    <td className="border-b-[3px] border-[#FDDC4E] w-[60%]">
                        <div className='text-[#334155]'>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] pl-5'>Чтение художественной литературы и фольклора</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] pl-5'>Английский язык</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] pl-5'>Музыка</p>
                            <p className='pb-2 pl-5'>Рисование</p>
                        </div>
                    </td>
                </tr>
                <tr className='text-[#334155] flex justify-between pt-2'>
                    <td className='text-center text-[#8081BD] border-b-[3px] border-[#FDDC4E] w-[13%] flex justify-center items-center'>Чт</td>
                    <td className="border-b-[3px] border-[#FDDC4E] w-[24%]">
                        <div className='flex flex-col justify-center text-[#8081BD]'>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] text-center'>9.00 - 9.20</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] text-center'>9.30 - 9.50</p>
                            <p className='pb-2 text-center'>9.55 - 10.15</p>
                        </div>
                    </td>
                    <td className="border-b-[3px] border-[#FDDC4E] w-[60%]">
                        <div className='text-[#334155]'>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] pl-5'>Физическая культура в зале</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] pl-5'>Ознакомление с окружающим миром</p>
                            <p className='pb-2 pl-5'>Фронтальная игра с логопедом</p>
                        </div>
                    </td>
                </tr>
                <tr className='text-[#334155] flex justify-between pt-2'>
                    <td className='text-center text-[#8081BD] border-b-[3px] border-[#FDDC4E] w-[13%] flex justify-center items-center'>Пт</td>
                    <td className="border-b-[3px] border-[#FDDC4E] w-[24%]">
                        <div className='flex flex-col justify-center text-[#8081BD]'>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] text-center'>9.00 - 9.20</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] text-center'>9.25 - 9.45</p>
                            <p className='pb-2 text-center'>11.10 - 11.30</p>
                        </div>
                    </td>
                    <td className="border-b-[3px] border-[#FDDC4E] w-[60%]">
                        <div className='text-[#334155]'>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] pl-5'>Рисование</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] pl-5'>Ритмика</p>
                            <p className='pb-2 pl-5'>Физическая культура на улице</p>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <Questions2 className={"text-white mb-45"} inputStyle={"bg-white"} buttonStyle={"bg-[#F6B31F] text-white"} bgColor={"#8081BD"}/>
        <Map/>
    </div>
  )
}

export default BasicSchedule
