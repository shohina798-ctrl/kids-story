import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNewsCard } from '../../../slice/api/apiNews'

const NewsCard = () => {
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getNewsCard())
    }, [dispatch])
    let {newsCard} = useSelector(state => state.NewsSlice);
  return (
    <div>
      <div className='w-[85%] m-auto flex flex-wrap gap-5'>
        {newsCard.map((elm => (
            <div key={elm.id} className='w-[32%] pb-10'>
                <img src = {elm.img} className='w-full rounded-2xl'/>
                <div className='flex flex-col gap-5 items-start'>
                    <div className='flex items-end gap-2 pt-5'>
                        <p>Дата публикации:</p>
                        <b>{elm.publicDate}</b>
                    </div>
                    <b className='text-[#8081BD] text-[20px]'>{elm.text1}</b>
                    <b>{elm.text2}</b>
                    <button className='rounded-2xl py-1 px-18 text-[#334155] border-1 border-[#8081BD] hover:text-white hover:bg-[#EA5D4A] hover:border-0 font-bold'>подробнее</button>
                </div>
            </div>
        )))}
      </div>
    </div>
  )
}

export default NewsCard
