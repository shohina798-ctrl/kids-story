import React from 'react'
import MainImgLogo from '../../components/pages/aboutUs/mainImgLogo'
import HelpForKidsHealth from '../../components/pages/aboutOurCenter/helpForKidsHealth'
import Map from '../../components/pages/aboutUs/map'
import Questions from '../../components/pages/aboutUs/questions'
import CardCenter from '../../components/pages/aboutOurCenter/cardCenter'

const AboutOurCenter = () => {
  return (
    <div>
        <div className='w-[85%] m-auto py-10'>
            <div className='flex w-1/5 justify-between'>
                <p className='text-[#334155]'>Главная</p>
                <p className='text-[#8081BD]'>Дополнительные услуги</p>
            </div>
        </div>
        <MainImgLogo/>
        <CardCenter/>
        <HelpForKidsHealth/>
        <Questions/>
        <Map/>
    </div>
  )
}

export default AboutOurCenter
