import React from 'react'
import img from '/Mask group.png';
const Registration = () => {
  return (
    <div>
      <div className='relative w-[95%] m-auto mt-10'>
        <img src = {img} className='w-full absolute top-0 -z-1'/>
        <div className='text-[#334155] pl-20 pt-[8%] w-[30%]'>
            <b className='text-[96px]'>Kidsstory</b>
            <p className='text-[36px]'>Английский детский сад и клуб</p>
        </div>
        <div className='bg-[#8081BD] text-[12.6px] p-1 flex flex-col justify-center w-[21.5%] absolute right-0 top-0 rounded-2xl px-4 text-white'>
            <p className='text-[32px]'>Запишитесь на персональную экскурсию</p>
            <p>Заполните форму и посмотрите детский сад вживую в удобное для вас время</p>
            <div className='flex flex-col py-3 gap-2'>
                <input placeholder='Ваше имя' className='bg-white p-3 rounded-4xl text-black w-full'/>
                <input placeholder='+ 7 _  _  _  -  _  _  _  -  _  _  -  _  ' className='w-full bg-white p-3 rounded-4xl text-black'/>
                <input placeholder='Ваш e-mail' className='bg-white p-3 rounded-4xl text-black w-full'/>
                <div className='flex items-center gap-4'>
                    <input type='radio'/>          
                    <p>Я принимаю условия пользовательского соглашения</p>
                </div>
                <button className='bg-[#EA5D4A] rounded-2xl py-2 text-white w-full'>записаться</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Registration
