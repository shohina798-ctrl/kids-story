import React from 'react'
import Record from '../../components/pages/contacts/record'
import Map from '../../components/pages/aboutUs/map'
import img from '/1614600055_48-p-shkola-na-belom-fone-61 1.png';
import Questions2 from '../../components/pages/aboutUs/questions2';
const Contacts = () => {
  return (
    <div>
        <div className='w-[85%] m-auto'>
            <div className='flex gap-8 py-5'>
              <p className='text-[#334155]'>Главная</p>
              <p className='text-[#334155]'>Расписаниe</p>
              <p className='text-[#8081BD]'>Контакты</p>
            </div>
            <b className='text-[#8081BD] text-[40px]'>Контакты</b>
        </div>
        <Record/>
        <Map/>
        <Questions2 className={"bg-[#f2a5c4] text-white mb-45"} inputStyle={"bg-white"} buttonStyle={"bg-[#F6B31F] text-white"} imgComp={img}/>
    </div>
  )
}

export default Contacts
