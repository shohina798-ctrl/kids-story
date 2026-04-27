import React from 'react'
import img from '/Mask group (16).png';
import Map from '../../components/pages/aboutUs/map';
import Questions2 from '../../components/pages/aboutUs/questions2';
const ThreeDTur = () => {
  return (
    <div>
      <div className='w-[85%] m-auto py-10'>
        <div className='flex w-1/5 justify-between'>
              <p className='text-[#334155]'>Главная</p>
              <p className='text-[#334155]'>О нас</p>
              <p className='text-[#8081BD]'>3D тур</p>
        </div>
        <b className='text-[#8081BD] text-[40px]'>3D тур</b>
      </div>
      <img src = {img} className='w-[85%] m-auto'/>
      <Questions2 className={"text-white mb-45"} inputStyle={"bg-white"} buttonStyle={"bg-[#F6B31F] text-white"} bgColor={"#8081BD"}/>
      <Map/>
    </div>
  )
}

export default ThreeDTur
