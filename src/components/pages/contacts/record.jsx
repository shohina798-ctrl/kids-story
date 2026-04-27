import React from 'react'
import img1 from '/соц сети.png';
import { Phone } from 'lucide-react';
const Record = () => {
  return (
    <div>
        <div className='w-[85%] m-auto flex justify-between items-center'>
            <div className='flex flex-col gap-5 items-start'>
                <div className='w-fit'>
                    <div className='flex items-center gap-3'>
                        <Phone className='text-white rounded-[50%] p-[3px] w-[30px] h-[30px] bg-[#EA5D4A]'/>
                        <b className='text-[40px]'>+7 495 123 34 25</b>
                    </div>
                    <p className='ml-10'>dir@kidsstory.life</p>
                </div>
                <div className=''>
                    <p>Москва, ул. Муравская д.38, к.1</p>
                    <p>ЖК Мир Митино <span className='text-[#0E95D3]'>М. Пятницкое шоссе</span></p>
                </div>
                <img src = {img1}/>
            </div>
            <div className='bg-[#FFF6D1] rounded-2xl p-10 w-[65%] flex flex-col gap-5'>
                <div className='text-[#334155] text-[32px]'>
                    <b>Запишитесь на персональную экскурсию</b>
                    <p className='text-[14px]'>Заполните форму и посмотрите детский сад вживую в удобное для вас время</p>
                </div>
                <div className='flex justify-between'>
                    <input placeholder='Ваше имя' className='bg-white rounded-2xl px-10 py-1 text-[#334155] w-[48%]'/>
                    <input placeholder='Ваш e-mail' className='bg-white rounded-2xl px-10 py-1 text-[#334155] w-[48%]'/>
                </div>
                <div className='flex justify-between items-center'>
                    <input placeholder='+ 7 _  _  _  -  _  _  _  -  _  _  -  _  _' className='bg-white rounded-2xl px-10 py-1 text-[#334155] w-[48%]'/>
                    <div className='flex items-center w-[48%]'>
                        <input type='radio'/>
                        <p className='text-[#334155] pl-5'>Я принимаю условия  пользовательского соглашения</p>
                    </div>
                </div>
                <textarea placeholder='Комментарий' className='bg-white p-5 rounded-2xl'/>
                <button className='text-white rounded-4xl bg-[#EA5D4A] py-2'>записаться</button>
            </div>
        </div>
    </div>
  )
}

export default Record
