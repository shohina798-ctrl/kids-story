import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import WorkSchedule from '../aboutUs/workSchedule';
import Questions2 from '../aboutUs/questions2';
import img from '/1614600055_48-p-shkola-na-belom-fone-61 1.png';
import { getVideosData } from '../../../slice/api/apiVideo';

const OurGardenAndVideo = () => {
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getVideosData())
    }, [dispatch])
    let { videos } = useSelector(state => state.VideoSlice);
    return (
            <div>    
 <div className="relative bg-[#FFF6D1] my-[22px] overflow-hidden">

      {/* Верхняя волна */}
      <div className="absolute top-0 left-0 w-full bg-reed-200">
        <svg
          className="w-full h-[213px]"
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
        >
          <path
            d="M0,75 
               Q120,0 240,75 
               T480,75 
               T720,75 
               T960,75 
               T1200,75 
               T1440,75 
               L1440,0 L0,0 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* Контент */}
      <div className="relative z-10 text-center">
        <div className='w-[85%] m-auto pt-65'>
            <b className='text-[#8081BD] text-[40px] flex'>Наш сад в видео</b>
            <div className='flex justify-between mt-15'>
                {videos?.map((elm, ind) => {
                    if (ind < 3)
                        return (
                            <div key={elm.id} className='w-[32%]'>
                                <iframe className="w-full h-[333px] rounded-2xl" src={elm.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </div>
                        )
                })}
            </div>
        </div>
        <WorkSchedule className={"hidden"}/>
        <Questions2 className={"bg-[#f2a5c4] text-white mb-45"} inputStyle={"bg-white"} buttonStyle={"bg-[#F6B31F] text-white"} imgComp={img}/>
      </div>

      {/* Нижняя волна */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          className="w-full h-[213px]"
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
        >
          <path
            d="M0,75 
               Q120,150 240,75 
               T480,75 
               T720,75 
               T960,75 
               T1200,75 
               T1440,75 
               L1440,150 L0,150 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </div>
    </div>
    )
}

export default OurGardenAndVideo
