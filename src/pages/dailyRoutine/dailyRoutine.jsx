import React from 'react'
import Questions2 from '../../components/pages/aboutUs/questions2'
import Map from '../../components/pages/aboutUs/map'

const DailyRoutine = () => {
  return (
    <div>
        <div className='w-[85%] m-auto py-10'>
            <div className='flex w-1/5 justify-between'>
            <p className='text-[#334155]'>Главная</p>
            <p className='text-[#334155]'>Расписание</p>
            <p className='text-[#8081BD]'>Режим дня</p>
            </div>
            <b className='text-[#8081BD] text-[40px]'>Режим дня</b>
        </div>
        <table className='w-[85%] m-auto mb-20'>
            <thead>
                <tr className="flex justify-between">
                    <th className='w-[13%]'></th>
                    <th className='bg-[#FDDC4E] w-[64%] rounded-2xl py-1 text-left px-10'>Виды деятельности</th>
                    <th className='bg-[#FDDC4E] w-[20%] rounded-2xl py-1'>Время</th>
                </tr>
            </thead>
            <tbody>
                <tr className='flex justify-between'>
                    <td className='w-[13%] text-[#8081BD] border-b-[3px] border-[#FDDC4E] flex justify-center items-center py-4'>Дома</td>
                    <td className='w-[64%] border-b-[3px] border-[#FDDC4E] py-4'>
                        <div className='text-[#334155]'>
                            <p className='pl-5'>Подъем, утренние гигиенические процедуры</p>
                        </div>
                    </td>
                    <td className='w-[20%] border-b-[3px] border-[#FDDC4E] py-4'>
                        <div className='text-[#8081BD]'>
                            <p className='text-center'>06.30 (7.00) - 7.30</p>
                        </div>
                    </td>
                </tr>
                <tr className='flex justify-between'>
                    <td className='w-[13%] text-[#8081BD] border-b-[3px] border-[#FDDC4E] flex justify-center items-center'>В ДК</td>
                    <td className='w-[64%] border-b-[3px] border-[#FDDC4E]'>
                        <div className='text-[#334155] py-2'>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] pl-5'>Прием, утренний фильтр, индивидуальная работа, самостоятельная деятельность, общение с родителями</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] pl-5'>Утренняя гимнастика</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] pl-5'>Самостоятельная деятельность, игры на развитие мелкой моторики</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] pl-5'>Подготовка к завтраку, завтрак (гигиенические процедуры)</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] pl-5'>Свободная игровая деятельность, подготовка к совместной игровой деятельности</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] pl-5'>Совместная игровая деятельность: познавательное общение предметно – практическая и обследовательская деятельности совместная игровая деятельность со специалистами</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] pl-5'>Второй завтрак (гигиенические процедуры) </p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] pl-5'>Подготовка к прогулке, прогулка (гигиенические процедуры)</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] pl-5'>Возвращение с прогулки </p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] pl-5'>Подготовка к обеду, обед (гигиенические процедуры) </p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] pl-5'>Подготовка ко сну / Дневной сон</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] pl-5'>Подъем, водные, воздушные процедуры, гимнастика после сна</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] pl-5'>Подготовка к полднику, полдник (гигиенические процедуры)</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] pl-5'>Игры на развитие мелкой моторики</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] pl-5'>Чтение книг, рассказывание, познавательное общение /  Развивающие игры</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] pl-5'>Подготовка к ужину, ужин (гигиенические процедуры) </p>
                            <p className='pl-5'>Подготовка к прогулке, прогулка. / Уход домой, обение с родителями</p>
                        </div>
                    </td>
                    <td className='w-[20%] border-b-[3px] border-[#FDDC4E] py-2'>
                        <div className='text-[#8081BD]'>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] text-center'>07.00 – 08.15</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] text-center'>08.15 - 08.25</p>
                            <p   className='pb-2 border-b-[3px] border-[#D9D9D9] text-center'>08.25 - 08.35</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] text-center'>08.35 - 08.55</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] text-center'>08.55 - 09.00</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] text-center'>09.00 - 09.55 <br/> (по подгруппам)</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] text-center'>09.55 - 10.05</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] text-center'>10.25 - 12.05</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] text-center'>12.05- 12.20</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] text-center'>12.20 - 12.50</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] text-center'>12.50 - 15.00</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] text-center'>15.00 - 15.10</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] text-center'>15.10 - 15.25</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] text-center'>15.25 - 16.15</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] text-center'>16.15 - 17.15</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] text-center'>17.15 - 17.45</p>
                            <p className='text-center'>17.45-19.00</p>
                        </div>
                    </td>
                </tr>
                <tr className='flex justify-between'>
                    <td className='w-[13%] text-[#8081BD] border-b-[3px] border-[#FDDC4E] flex justify-center items-center'>Дома</td>
                    <td className='w-[64%] border-b-[3px] border-[#FDDC4E]'>
                        <div className='text-[#334155] py-2'>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] pl-5'>Прогулка, возвращение с прогулки</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] pl-5'>Спокойные игры, семейное чтение</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] pl-5'>Легкий второй ужин. Вечерние гигиенические процедуры</p>
                            <p className='pl-5'>Укладывание, ночной сон</p>
                        </div>
                    </td>
                    <td className='w-[20%] border-b-[3px] border-[#FDDC4E] py-2'>
                        <div className='text-[#8081BD]'>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] text-center'>19.00-19.50</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] text-center'>19.50-20.20</p>
                            <p className='pb-2 border-b-[3px] border-[#D9D9D9] text-center'>20.20-20.45</p>
                            <p className='text-center'>20.30 (21.00) -06.30 (07.00)</p>
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

export default DailyRoutine
