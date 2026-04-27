import React from 'react'
import VideoGlleryGarde from '../../components/pages/aboutUs/videoGlleryGarde'
import WorkScheduleServices from '../../components/pages/additionalServices/workScheduleServices'
import Questions2 from '../../components/pages/aboutUs/questions2'
import img from '/1614600055_48-p-shkola-na-belom-fone-61 1.png';
import Map from '../../components/pages/aboutUs/map';

const PhotoAndVideo = () => {
  return (
    <div>
        <div className='w-[85%] m-auto py-15'>
            <div className='flex w-1/5 justify-between'>
                <p className='text-[#334155]'>Главная</p>
                <p className='text-[#334155]'>Расписание</p>
                <p className='text-[#8081BD]'>Фото и видео</p>
            </div>
            <b className='text-[#8081BD] text-[40px]'>Фото и видео</b>
            <div className='flex flex-wrap justify-between mt-10'>
                <img src = {"/Mask group (11).png"} className='w-[32%]'/>
                <img src = {"/Mask group (1).png"} className='w-[32%] py-4'/>
                <img src = {"/Mask group (4).png"} className='w-[32%] py-4'/>
                <img src = {"/Mask group (5).png"} className='w-[32%] py-4'/>
                <img src = {"/Mask group (12).png"} className='w-[32%] py-4'/>
                <img src = {"/Mask group (11).png"} className='w-[32%] py-4'/>
                <img src = {"/Mask group (12).png"} className='w-[32%] py-4'/>
                <img src = {"/Mask group (13).png"} className='w-[32%] py-4'/>
                <img src = {"/Mask group (1).png"} className='w-[32%] py-4'/>
            </div>
        </div>
        <VideoGlleryGarde/>
        <WorkScheduleServices/>
        <Questions2 className={"bg-[#f2a5c4] text-white mb-45"} inputStyle={"bg-white"} buttonStyle={"bg-[#F6B31F] text-white"} imgComp={img}/>
        <Map/>
    </div>
  )
}

export default PhotoAndVideo
