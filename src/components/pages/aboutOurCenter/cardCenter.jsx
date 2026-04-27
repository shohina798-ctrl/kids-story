import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import img from '/Vector (28).png';
import { getCenterKids } from '../../../slice/api/apiCenterKids';
import IsLoading from '../../ui/isLoading/isLoading';

const CardCenter = () => {
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCenterKids())
    }, [dispatch])
    console.log(useSelector(state => state))
    let { centerKids, isLoading, error } = useSelector(state => state.CenterKidsSlice)
    console.log(centerKids)
    return (
    <div className='relative'>
        <div className='w-[85%] m-auto flex justify-between'>
            {isLoading && (
                <IsLoading/>
            )}
            {error && (
                <Error/>
            )}
            {centerKids.map((elm) => (
                <div key={elm.id} className='w-[32%]'>
                    <img src = {elm.img} className='w-full mb-15'/>
                    <div>
                        <b className='text-[#8081BD] text-[24px]'>Раздел 1</b>
                        <p className='pt-3 pb-10'>{elm.text1}</p>
                        <b className='text-[#8081BD] text-[24px]'>Раздел 2</b>
                        <p className='pt-3'>{elm.text2}</p>
                    </div>
                </div>
            ))}
        </div>
        <img src = {img} className='absolute top-55 -z-1'/>
    </div>
  )
}

export default CardCenter
