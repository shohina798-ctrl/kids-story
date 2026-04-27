import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getKidCards } from '../../../slice/api/apiKidCard'

const CardServices = () => {
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getKidCards())
    }, [dispatch])
    let {kidCards} = useSelector(state => state.KidCardsSlice)
    console.log(kidCards)
    return (
    <div className='w-[85%] m-auto'>
        <div className='flex flex-wrap gap-5'>
            {kidCards?.map((elm) => (
                <div key = {elm.id} className='w-[32%] text-[#334155] h-[340px] relative'>
                    <img src = {elm.imgKid} className='w-full'/>
                    <div className='bg-[#F2F2FF] p-2 rounded-2xl w-full flex absolute bottom-6'>
                        <img src = {elm.imgIcon} className='bg-[#FDDC4E] rounded-2xl p-3 w-[57px] h-[60px]'/>
                        <p className='flex items-center ml-4 text-center text-[16px]'>{elm.text}</p>
                    </div>
                </div>
            ))}
        </div> 
    </div>
  )
}

export default CardServices
