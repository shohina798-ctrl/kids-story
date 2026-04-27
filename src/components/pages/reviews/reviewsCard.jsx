import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { User } from 'lucide-react';
import { getReviewsData } from '../../../slice/api/apiReviews';

const ReviewsCard = () => {
    let {reviewsData} = useSelector(state => state.ReviewsDataSlice);
    let dispatch = useDispatch()
    let activeCommants = [];
    activeCommants = reviewsData.filter(elm => elm.active)
    useEffect(() => {
        dispatch(getReviewsData())
    }, [dispatch])
  return (
    <div>
        <div className='flex flex-wrap w-[85%] m-auto justify-between'>
            {activeCommants.map(elm => (
                <div key={elm.id} className='w-[49%] bg-[#F2F2FF] rounded-2xl my-4 py-10'>
                    <div key={elm.id} className='text-[#334155] flex flex-col mb-10 gap-10 justify-start'>
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
                    <div className='flex justify-between px-10 items-center'>
                        <p className=''>Прочитать отзыв</p>
                        <button className='bg-white rounded-2xl px-25 py-1'>источник</button>
                    </div>
                </div>
            ))}
            <p className='text-center text-[#334155] text-[16px] pt-10 m-auto'>смотреть еще отзывы</p>
        </div>
    </div>
  )
}

export default ReviewsCard