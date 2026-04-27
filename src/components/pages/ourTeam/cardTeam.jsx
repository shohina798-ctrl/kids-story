import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import IsLoading from '../../ui/isLoading/isLoading';
import Error from '../../ui/error/error';
import { getPersonData } from '../../../slice/api/apiPersonData';

const CardTeam = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPersonData())
  }, [dispatch])
  const { personData, isLoading, error} = useSelector((state) => state.PersonDataSlice)
  return (
    <div>
        <div className='flex flex-wrap gap-13 w-[85%] m-auto'>
            {isLoading && (
                <IsLoading/>
            )}
            {error && (
                <Error/>
            )}
            {personData?.map(elm => (
                <div key={elm?.id}>
                    <div className='w-[283px] mb-10'>
                        <img src = {elm?.img} className='w-full h-[278px]'/>
                        <div className='py-4'>
                            <b className='text-[#8081BD] text-[20px]'>{elm?.name}</b>
                            <p className='text-[20px]'>{elm?.fullname}</p>
                            <p>{elm?.profession}</p>
                            <p>{elm?.experience}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CardTeam
