import React from 'react'
import img from '/Mask group (2).png';
const Teacher = () => {
  return (
    <div>
      <div className='flex items-start justify-between py-10 w-[85%] m-auto'>
        <img src = {img} className='w-[25%]'/>
        <div className='text-[#334155] w-[70%] flex flex-col gap-5'>
            <b className='text-[#8081BD] text-[32px]'>Руководитель kids story</b>
            <div>
                <b className='text-[#8081BD]'>Журавлев</b>
                <p>Дмитрий Анатольевич</p>
                <p>Педагог - психолог</p>
                <p>Стаж 11 лет</p>
            </div>
            <p>Мы создали пространство, в котором каждый ребёнок проявляет и раскрывает себя, развивает индивидуальные особенности и таланты.</p>
            <b className='text-[#EA5D4A]'>Наша задача — сделать так, чтобы каждый день в Kids story был счастливым.</b>
            <div className='ml-5'>
                <li>Английский детский клуб. Для детей с 2 до 7 лет. Погружение в языковую среду, собственная кухня, охраняемая огороженная территория, медицинский кабинет, соляная пещера.</li>
                <li>Дополнительные услуги. Для детей с 2 до 18 лет. Развивающие студии, творческие мастерские, спортивные секции.</li>
                <li>Kids story - «ежедневное развитие детей на 360 градусов».</li>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Teacher