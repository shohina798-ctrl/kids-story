import img from '/Vector (11).png';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { getVideosData } from '../slice/api/apiVideo';

export default function Banner() {
    let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideosData())
  }, [dispatch])
  let {videos} = useSelector(state => state.VideoSlice)
  return (
    <div>
      <Swiper
        slidesPerView={3}
        effect={'coverflow'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
         {videos?.map(elm => (
          <SwiperSlide key={elm.id}><iframe className="w-full h-[333px] rounded-2xl mb-15"  src={elm.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></SwiperSlide>
        ))}
      </Swiper>
      <img src = {img} className='absolute -mt-40 -z-1'/>
    </div>
  );
}
