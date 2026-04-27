import React from 'react'
import img from '/Group 4 (2).png';
import img1 from '/noroot 2.png';
const Questions2 = ({className, inputStyle, buttonStyle, imgComp, bgColor}) => {
  return (
    <div>
      <div style={{background: bgColor}} className={`${className} text-left bg-[#FFF6D1] py-10 w-[95%] m-auto px-20 rounded-2xl text-[#334155] my-30 flex items-end relative`}>
        <div className='w-[48%] flex flex-col gap-4'>
            <b className='text-[40px]'>Есть вопросы? Получите бесплатную консультацию</b>
            <p>Оставьте телефон и мы перезвоним и расскажем все подробности о филиале</p>
            <div className='flex justify-between'>
                <input placeholder='+ 7 _  _  _  -  _  _  _  -  _  _  -  _  _' className={`rounded-2xl w-[49%] px-5 bg-[#FDDC4E] ${inputStyle} text-[#334155] px-2 py-1`}/>
                <button type='submit' className={`bg-[#EA5D4A] ${buttonStyle} text-white rounded-2xl w-[49%] px-2 py-1`}>отправить</button>
            </div>
            <div className='flex items-center w-1/2 gap-3'>
                <input type="radio" />
                <p>Я принимаю условия пользовательского соглашения</p>
            </div>
        </div>
        <div className='absolute right-0 w-[62%] bg-red-300'>
            <div className='relative'>
                <img src = {img} className='w-[90%] absolute right-0 -bottom-50'/>
                <img src = {imgComp || img1} className='absolute -bottom-10 right-24'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Questions2
