import React from 'react'
import img from '/Mask group (11).png';
import img1 from '/1532352878 2.png';
import img2 from '/Mask group (12).png';
import waves from '/Vector (28).png';
const ProgrammGroups = () => {
  return (
    <div className='relative'>
        <img src = {waves} className='absolute -z-1 top-50'/>
        <div className='w-[85%] m-auto flex flex-col gap-20'>
            <div className='flex justify-between items-center gap-15'>
                <img src = {img2} className='w-[34%] rounded-2xl'/>
                <div className='flex flex-col'>
                    <b className='text-[#8081BD] text-[32px]'>Группа (2-3 года)</b>
                    <p className='text-[#334155] pt-5'>Специалисты, работающие в этой группе (воспитатели, педагог по английскому языку), страница с фото и текстами в шахматном порядке. Что ждет ребенка (режим пребывания). Сколько человек в группе. Какое питание. Какие проводятся занятия (расписание). Физ упражнения. Как проходит день.Фото специалиста, кто оказывает услугу.</p>
                </div>
            </div>
            <div className='flex justify-between items-center gap-15'>
                <div className='flex flex-col'>
                    <b className='text-[#8081BD] text-[32px]'>Группа (2-3 года)</b>
                    <p className='text-[#334155] pt-5'>Специалисты, работающие в этой группе (воспитатели, педагог по английскому языку), страница с фото и текстами в шахматном порядке. Что ждет ребенка (режим пребывания). Сколько человек в группе. Какое питание. Какие проводятся занятия (расписание). Физ упражнения. Как проходит день.Фото специалиста, кто оказывает услугу.</p>
                </div>
                <img src = {img1} className='w-[34%] rounded-2xl'/>
            </div>
            <div className='flex justify-between items-center gap-15'>
                <img src = {img} className='w-[34%] rounded-2xl'/>
                <div className='flex flex-col'>
                    <b className='text-[#8081BD] text-[32px]'>Группа (2-3 года)</b>
                    <p className='text-[#334155] pt-5'>Специалисты, работающие в этой группе (воспитатели, педагог по английскому языку), страница с фото и текстами в шахматном порядке. Что ждет ребенка (режим пребывания). Сколько человек в группе. Какое питание. Какие проводятся занятия (расписание). Физ упражнения. Как проходит день.Фото специалиста, кто оказывает услугу.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProgrammGroups
