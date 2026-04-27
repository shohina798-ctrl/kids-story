import React from 'react'
import img from '/Vector.png';
import img1 from '/Vector (1).png';
import img2 from '/Vector (2).png';
import img3 from '/Vector (3).png';
import img4 from '/Vector (4).png';
import img5 from '/Vector (5).png';
import img6 from '/Group 23.png';
import img7 from '/Vector (7).png';
import img8 from '/Vector (8).png';
import img9 from '/Group 24.png';
import img10 from '/Vector (9).png';
const AdditionalServices = () => {
  return (
    <div>
      <div className='w-[85%] m-auto'>
        <b className='text-[40px] text-[#8081BD]'>Дополнительные услуги</b>
        <div className='flex flex-wrap justify-between text-[#334155] text-[16px] py-5'>
            <div className='bg-[#FFF6D1] rounded-2xl flex w-fit p-3 items-center gap-5 text-center my-3'>
                <img src = {img} className='p-4 rounded-2xl bg-white'/>
                <p className='px-10'>Йога</p>
            </div>
            <div className='bg-[#FFF6D1] rounded-2xl flex w-fit p-3 items-center gap-5 text-center my-3'>
                <img src = {img1} className='p-4 rounded-2xl bg-white'/>
                <p className='px-10'>Монтессори группа с уникальным<br/>древесинным оборудованием</p>
            </div>
            <div className='bg-[#FFF6D1] rounded-2xl flex w-fit p-3 items-center gap-5 text-center my-3'>
                <img src = {img2} className='p-4 rounded-2xl bg-white'/>
                <p className='px-10'>Гольф для<br/>малышей</p>
            </div>
            <div className='bg-[#FFF6D1] rounded-2xl flex w-fit p-3 items-center gap-5 text-center my-3'>
                <img src = {img3} className='p-4 rounded-2xl bg-white'/>
                <p className='px-10'>Занятия с<br/>беговелами</p>
            </div>
            <div className='bg-[#FFF6D1] rounded-2xl flex w-fit p-3 items-center gap-5 text-center my-3'>
                <img src = {img4} className='p-4 rounded-2xl bg-white'/>
                <p className='px-5'>Легостроение и<br/>конструирование</p>
            </div>
            <div className='bg-[#FFF6D1] rounded-2xl flex w-fit p-3 items-center gap-5 text-center my-3'>
                <img src = {img5} className='p-4 rounded-2xl bg-white'/>
                <p className='px-4'>Тестопластика и<br/>глинопластика</p>
            </div>
            <div className='bg-[#FFF6D1] rounded-2xl flex w-fit p-3 items-center gap-5 text-center my-3'>
                <img src = {img6} className='p-4 rounded-2xl bg-white'/>
                <p className='px-5'>Риторика и ораторское<br/>мастерство</p>
            </div>
            <div className='bg-[#FFF6D1] rounded-2xl flex w-fit p-3 items-center gap-5 text-center my-3'>
                <img src = {img7} className='p-4 rounded-2xl bg-white'/>
                <p className='px-4'>Занятия по скалолазанию</p>
            </div>
            <div className='bg-[#FFF6D1] rounded-2xl flex w-fit p-3 items-center gap-5 text-center my-3'>
                <img src = {img8} className='p-4 rounded-2xl bg-white'/>
                <p className='px-5'>Театрализация на английском языке</p>
            </div>
            <div className='bg-[#FFF6D1] rounded-2xl flex w-fit p-3 items-center gap-5 text-center my-3'>
                <img src = {img9} className='p-4 rounded-2xl bg-white'/>
                <p className='px-5'>Кулинария и этикет сервисного стола</p>
            </div>
            <div className='bg-[#FFF6D1] rounded-2xl flex w-fit p-3 items-center gap-5 text-center my-3'>
                <img src = {img10} className='p-4 rounded-2xl bg-white'/>
                <p className='px-5'>Песочная терапия. Работа на<br/>интерактивных столах и досках</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AdditionalServices
