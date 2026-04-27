import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import img from '/Group 7.png';
import { getAdventages } from '../../../slice/api/apiAdventages';
const Advantages = () => {
    let dispatch = useDispatch();
    const { adventagesData } = useSelector((state) => state.AdventagesSlice)
    useEffect(() => {
        dispatch(getAdventages())
    }, [dispatch])
  return (
    <div className='relative'>
      <div className='w-[85%] m-auto my-10'>
        <b className='text-[#8081BD] text-[40px]'>Преимущества</b>
        <p className='text-[#334155] w-1/2'>Наша авторская программа ведётся на русском и английском языках и состоит из увлекательных мероприятий</p>
        <div className='flex flex-wrap justify-between gap-5 py-10'>
            {adventagesData?.map(elm => (
                <div key={elm.id} className='flex items-center w-[32%] gap-5'>
                    <img src = {elm.img} style={{backgroundColor: elm.color}} className='rounded-2xl w-[50px] h-[50px] p-2'/>
                    <b className='text-[#334155]'>{elm.text}</b>
                </div>
            ))}
        </div>
      </div>
      <img src = {img} className='absolute -bottom-3 w-[15%] left-0'/>
    </div>
  )
}

export default Advantages
