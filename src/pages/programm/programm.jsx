import React from 'react'
import ProgrammGroups from '../../components/pages/programm/programmGroups'
import Map from '../../components/pages/aboutUs/map'
import Questions2 from '../../components/pages/aboutUs/questions2'
import img from '/1614600055_48-p-shkola-na-belom-fone-61 1.png';
const Programm = () => {
  return (
    <div>
      <div className='w-[85%] m-auto py-10'>
        <div className='flex w-1/5 justify-between'>
              <p className='text-[#334155]'>Главная</p>
              <p className='text-[#334155]'>Расписание</p>
              <p className='text-[#8081BD]'>Программа</p>
        </div>
        <b className='text-[#8081BD] text-[40px]'>Программа</b>
      </div>
      <ProgrammGroups/>
      <Questions2 className={"bg-[#f2a5c4] text-white mb-45"} inputStyle={"bg-white"} buttonStyle={"bg-[#F6B31F] text-white"} imgComp={img}/>
      <Map/>
    </div>
  )
}

export default Programm
