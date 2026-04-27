import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import img from '/Vector (14).png';
import img1 from '/Vector (15).png';
import { Navigation } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPersonData } from '../slice/api/apiPersonData';
export default function OurComand() {
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPersonData())
    }, [dispatch])
    const { personData } = useSelector((state) => state.PersonDataSlice)
  return (
    <div className='relative'>
      <Swiper
        slidesPerView={4}
            centeredSlides={false}
            grabCursor={true}
            pagination={{
            clickable: false,
            }}
           navigation={true} modules={[Navigation]}  className="mySwiper w-[85%] m-auto relative"
        >
        {personData?.map(elm => (
            <SwiperSlide key={elm.id}>
                <div className='w-[283px] mb-10'>
                    <img src = {elm.img} className='w-full h-[278px] ml-5'/>
                    <div className='ml-5'>
                        <b className='text-[#8081BD] text-[20px]'>{elm.name}</b>
                        <p className='text-[20px]'>{elm.fullname}</p>
                        <p>{elm.profession}</p>
                        <p>{elm.experience}</p>
                    </div>
                </div>
            </SwiperSlide>
        ))}
        <img src = {img1} className='absolute bottom-30 right-80 z-100'/>
      </Swiper>
      <img src={img} className='absolute -top-15 left-100 w-[8%] z-10'/>
    </div>
  );
}