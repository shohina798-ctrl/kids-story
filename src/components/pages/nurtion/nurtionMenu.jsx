import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import img from '/Mask group (8).png';
import img1 from '/Mask group (9).png';
import img2 from '/Mask group (10).png';
import { getMenu } from '../../../slice/api/apiMenu';

const NutritionMenu = () => {
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMenu())
    }, [dispatch])
    let { menu } = useSelector(state => state.MenuSlice)
  return (
    <div>
        <div className='w-[85%] m-auto flex'>
            <div className='flex justify-between items-start w-full'>
                <div className='w-[40%]'>
                    {menu.map(diet => (
                        <div key = {diet.id} className='flex flex-col gap-3'>
                            <b className='text-[#79BC6D] text-[20px]'>{diet.nutrition}</b>
                            <div className='flex flex-col mb-3'>
                                {diet.meel.map(elm => (
                                    <div className='flex justify-between border-b-2 border-dashed mb-1 border-[#F6B31F]'>
                                        <b className='text-[#8081BD]'>{elm.food}</b>
                                        <p className=''>{elm.measure}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='w-[55%]'>
                    <img src = {img} className='w-full'/>
                    <div className='flex flex-wrap justify-between pt-4'>
                        <img src = {img1} className='w-[24%] rounded-3xl py-2'/>
                        <img src = {img} className='w-[24%] rounded-3xl py-2'/>
                        <img src = {img2} className='w-[24%] rounded-3xl py-2'/>
                        <img src = {img} className='w-[24%] rounded-3xl py-2'/>
                        <img src = {img2} className='w-[24%] rounded-3xl py-2'/>
                        <img src = {img1} className='w-[24%] rounded-3xl py-2'/>
                        <img src = {img} className='w-[24%] rounded-3xl py-2'/>
                        <img src = {img1} className='w-[24%] rounded-3xl py-2'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NutritionMenu