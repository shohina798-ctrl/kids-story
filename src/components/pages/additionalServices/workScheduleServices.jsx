import React from 'react'
import img from '/Vector (28).png';
import WorkSchedule from '../aboutUs/workSchedule';

const WorkScheduleServices = () => {
  return (
    <div>
        <div className='relative'>
            <WorkSchedule/>
            <img src = {img} className='absolute -top-20 -z-1'/>
        </div>
    </div>
  )
}

export default WorkScheduleServices
