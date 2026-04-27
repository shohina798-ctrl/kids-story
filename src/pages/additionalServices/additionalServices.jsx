import React from 'react'
import WorkScheduleServices from '../../components/pages/additionalServices/workScheduleServices'
import Questions from '../../components/pages/aboutUs/questions'
import Map from '../../components/pages/aboutUs/map'
import CardServices from '../../components/pages/additionalServices/cardServices'

const AdditionalServices = () => {
  return (
    <div>
      <div className='w-[85%] m-auto py-10'>
        <div className='flex w-1/5 justify-between'>
          <p className='text-[#334155]'>Главная</p>
          <p className='text-[#8081BD]'>Дополнительные услуги</p>
        </div>
        <b className='text-[#8081BD] text-[40px]'>Дополнительные услуги</b>
      </div>
      <CardServices/>
      <WorkScheduleServices/>
      <Questions/>
      <Map/>
    </div>
  )
}

export default AdditionalServices
