import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
export default function OurCertificates() {
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSertificates())
    }, [dispatch])
    const { sertificates } = useSelector((state) => state.SertificatesSlice)
  return (
    <div className='relative'>
      <Swiper
        slidesPerView={4}
            centeredSlides={false}
            grabCursor={false}
            pagination={{
            clickable: true,
            }}
           navigation={true} modules={[Navigation]}  className="mySwiper w-[85%] m-auto"
        >
        {sertificates?.map(elm => (
            <SwiperSlide key={elm.id}>
                <div className='w-[283px] m-auto mb-10'>
                    <img src = {elm.sertificat} className='w-full h-[278px]'/>
                </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
import React from 'react'
import { getSertificates } from '../slice/api/apiSertificates';
