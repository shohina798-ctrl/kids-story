import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { User } from 'lucide-react';
import { getReviewsData } from '../slice/api/apiReviews';

export default function Reviews() {
    let dispatch = useDispatch();
    let activeCommants = [];
    let { reviewsData } = useSelector(state => state.ReviewsDataSlice);
    activeCommants = reviewsData.filter(elm => elm.active)
    useEffect(() => {
        dispatch(getReviewsData())
    }, [dispatch])
  return (
    <div>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
      <div className='w-[80%] m-auto'>
        {activeCommants?.map(elm => (
            <SwiperSlide key={elm.id} className='mb-15 mt-10'>
              <div key={elm.id} className='bg-white py-10 rounded-2xl text-[#334155] mb-4 flex flex-col gap-10 justify-start'>
                  <div className='flex gap-10 items-center'>
                    <img src = {elm?.profile} className={`w-[65px] h-[65px] rounded-[50%] ml-10 ${!elm?.profile && 'hidden'}`}/>
                    {!elm?.profile ? (
                        <div><User className='w-[60px] h-[60px] rounded-[50%] ml-10 text-white p-2 bg-[#8081BD]'/></div>
                    ): ''}
                    <div className='flex flex-col'>
                      <b>{elm.name}</b>
                      <p>{elm.city}</p>
                    </div>
                  </div>
                  <p className='px-10'>{elm.comment}</p>
              </div>
              <p className='px-10'>Прочитать отзыв</p>
            </SwiperSlide>
        ))}
      </div>
      </Swiper>
    </div>
  );
}
