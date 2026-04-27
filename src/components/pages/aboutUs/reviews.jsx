import React from 'react'
import Reviews from '../../../banner/reviews'

const ReviewsAboutCenter = () => {
  return (
    <div className='w-[95%] m-auto bg-[#F2F2FF] rounded-2xl'>
      <div className='w-[95%] m-auto bg-[#F2F2FF] my-10 p-10'>
        <b className='text-[#334155] text-[40px]'>Отзывы о саде</b>
        <Reviews/>
      </div>
    </div>
  )
}

export default ReviewsAboutCenter