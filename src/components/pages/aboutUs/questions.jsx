import React from 'react'
import img from '/Group 4.png';
import img1 from '/Positive_curious_schoolboy_in_casual_wear_looking_at_camera_through 1.png';
const Questions = ({className}) => {
  return (
    <div>
      <div className={`bg-[#8081BD] py-10 w-[95%] m-auto px-20 rounded-2xl text-white my-30 flex items-end relative ${className}`} style={{ backgroundColor: className }}>
        <div className='w-[48%] flex flex-col gap-4'>
            <b className='text-[40px]'>Есть вопросы? Получите бесплатную консультацию</b>
            <p>Оставьте телефон и мы перезвоним и расскажем все подробности о филиале</p>
            <div className='flex justify-between'>
                <input placeholder='+ 7 _  _  _  -  _  _  _  -  _  _  -  _  _' className='rounded-2xl px-5 w-[49%] bg-white text-[#334155] px-2 py-1'/>
                <button type='submit' className='bg-[#F6B31F] text-[#334155] rounded-2xl w-[49%] px-2 py-1'>отправить</button>
            </div>
            <div className='flex items-center w-1/2 gap-3'>
                <input type="radio" />
                <p>Я принимаю условия пользовательского соглашения</p>
            </div>
        </div>
        <div className='absolute right-0 w-[62%] bg-red-300'>
            <div className='relative'>
                <img src = {img} className='w-full absolute -bottom-80'/>
                <img src = {img1} className='absolute -bottom-10 right-60'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Questions
