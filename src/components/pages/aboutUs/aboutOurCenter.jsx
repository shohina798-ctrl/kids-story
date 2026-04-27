import React from 'react'

const AboutOurCenter = () => {
  return (
    <div>
        <div className='w-[85%] m-auto flex flex-col gap-10 text-[20px]'>
            <div className='text-[#8081BD] w-1/2 flex flex-col gap-5'>
                <b className='text-[40px]'>О нашем центре</b>
                <p className='text-[#334155]'>Мы создали пространство, в котором каждый ребёнок проявляет и раскрывает себя, развивает индивидуальные особенности и таланты.</p>
            </div>
            <div className='flex flex-col gap-5'>
                <b className='text-[#EA5D4A]'>Наша задача — сделать так, чтобы каждый день в Kids story был счастливым.</b>
                <div className='flex flex-col w-[95%] ml-6'>
                    <li>
                        <ul>Английский детский клуб. Для детей с 2 до 7 лет. Погружение в языковую среду, собственная кухня, охраняемая огороженная территория, медицинский кабинет, соляная пещера.</ul>
                    </li>
                    <li>
                        <ul>Дополнительные услуги. Для детей с 2 до 18 лет. Развивающие студии, творческие мастерские, спортивные секции.</ul>
                    </li>
                    <li>
                        <ul>Kids story - «ежедневное развитие детей на 360 градусов».</ul>
                    </li>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutOurCenter
