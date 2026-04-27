import React from 'react'
import Teacher from '../../components/pages/aboutCenter/teacher'
import Map from '../../components/pages/aboutUs/map'
import OurGardenAndVideo from '../../components/pages/aboutCenter/ourGardenAndVideo'
const AboutCenter = () => {
  return (
    <div>
      <div className='w-[85%] m-auto py-10'>
        <div className='flex w-1/5 justify-between'>
              <p className='text-[#334155]'>Главная</p>
              <p className='text-[#334155]'>О нас</p>
              <p className='text-[#8081BD]'>О центре</p>
        </div>
        <b className='text-[#8081BD] text-[40px]'>О центре</b>
      </div>
      <Teacher/>
      <OurGardenAndVideo/>
      <Map/>
    </div>
  )
}

export default AboutCenter
