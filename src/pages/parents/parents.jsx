import React from 'react'
import img from '/1614600055_48-p-shkola-na-belom-fone-61 1.png';
import Questions2 from '../../components/pages/aboutUs/questions2';
import BoxQuestions from '../../components/pages/parents/boxQuestions';
import Map from '../../components/pages/aboutUs/map';

const Parents = () => {
  return (
    <div>
        <div className='w-[85%] m-auto py-15'>
            <div className='flex w-1/5 justify-between'>
                <p className='text-[#334155]'>Главная</p>
                <p className='text-[#334155]'>О нас</p>
                <p className='text-[#8081BD]'>Родителям</p>
            </div>
            <b className='text-[#8081BD] text-[40px]'>Родителям</b>
        </div>
        <BoxQuestions/>
        <Questions2 className={"bg-[#f2a5c4] text-white mb-45"} inputStyle={"bg-white"} buttonStyle={"bg-[#F6B31F] text-white"} imgComp={img}/>
        <Map/>
    </div>
  )
}

export default Parents
