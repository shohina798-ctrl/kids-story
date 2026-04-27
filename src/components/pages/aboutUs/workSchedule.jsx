import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Baby, BriefcaseMedical, Carrot, Clock9, Fence, HeartHandshake, House, MessageCircle, Target } from 'lucide-react'
import img from '/Vector (10).png';
import { getWorkSchedule } from '../../../slice/api/apiWorkSchedule';
const icons = {
  Clock9,
  Target,
  BriefcaseMedical,
  Baby,
  MessageCircle,
  Fence,
  HeartHandshake,
  House,
  Carrot
}

const WorkSchedule = ({className}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getWorkSchedule())
  }, [dispatch])

  const { workSchedule } = useSelector((state) => state.WorkScheduleSlice)

  return (
    <div className='relative'>
      <img src = {img} className={`absolute top-1/2 -z-2 ${className}`}/>
        <div className={`flex flex-wrap justify-between w-[85%] m-auto mt-35 text-left`}>    
            {workSchedule.map((elm, ind) => {
                const Icon = icons[elm.icon]
                return (
                <div key={ind} className='flex items-center gap-3 w-[30%] py-3'>
                    {Icon && <Icon style={{ backgroundColor: elm.color }} className='text-white rounded-2xl p-2 w-[50px] h-[50px]'/>}
                    <p className='w-[90%]'><b>{elm?.text}</b>{elm?.text2}</p>         
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default WorkSchedule