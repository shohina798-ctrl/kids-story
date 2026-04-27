import React from 'react'
import CardTeam from '../../components/pages/ourTeam/cardTeam'
import Questions from '../../components/pages/aboutUs/questions'
import Map from '../../components/pages/aboutUs/map'
import WorkScheduleServices from '../../components/pages/additionalServices/workScheduleServices'

const OurTeam = () => {
  return (
    <div>
        <div className='w-[85%] m-auto py-10'>
            <div className='flex w-1/5 justify-between'>
            <p className='text-[#334155]'>Главная</p>
            <p className='text-[#334155]'>О нас</p>
            <p className='text-[#8081BD]'>Наша команда</p>
            </div>
            <b className='text-[#8081BD] text-[40px]'>Наша команда</b>
        </div>
        <CardTeam/>
        <WorkScheduleServices/>
        <Questions/>
        <Map/>
    </div>
  )
}

export default OurTeam
