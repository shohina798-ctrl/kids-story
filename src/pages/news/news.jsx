import React from 'react'
import Questions from '../../components/pages/aboutUs/questions'
import Map from '../../components/pages/aboutUs/map'
import NewsCard from '../../components/pages/news/newsCard'

const News = () => {
  return (
    <div>
        <div className='w-[85%] m-auto py-10'>
            <div className='flex w-1/5 justify-between'>
            <p className='text-[#334155]'>Главная</p>
            <p className='text-[#334155]'>О нас</p>
            <p className='text-[#8081BD]'>Новости</p>
            </div>
            <b className='text-[#8081BD] text-[40px]'>Новости</b>
        </div>
        <NewsCard/>
        <Questions className="#79BC6D"/>
        <Map/>
    </div>
  )
}

export default News
