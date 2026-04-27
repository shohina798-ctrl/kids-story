import React from 'react'
import img from '/команда (12).png';
import { ToyBrick } from 'lucide-react';

const MainImgLogo = () => {
  return (
    <div>
        <div className='w-[95%] m-auto relative'>
          <img src = {img} className='w-full h-[490px]'/>
          <div className='text-white absolute bg-[#EA5D4A] p-7 rounded-2xl bottom-0 left-20 flex items-center gap-3'>
            <ToyBrick className='w-[80px] h-[50px]'/>
            <p className='text-[32px] w-1/2'>Легостроение и конструирование</p>
          </div>
        </div>
        <div className='w-[85%] m-auto py-10'>
            <button className='bg-[#8081BD] text-white rounded-2xl px-5 py-1 mb-10'>записаться на первый урок</button>
            <b className='text-[#8081BD] text-[40px] flex mb-5'>О нашем центре</b>
            <p>Согласно результатам исследования австралийских ученых из Griffith Institute for Educational Research, дети, которые постоянно занимаются плаванием, растут более умными, физически и эмоционально здоровыми. Собственный бассейна с комфортной температурой, современными, безопасными для здоровья ребенка методами очищения и профессиональным тренером — все это найдется в Тридевятом царстве в Новогорске.</p>
        </div>
    </div>
  )
}

export default MainImgLogo
