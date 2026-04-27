import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ArrowDownNarrowWide, ArrowUpWideNarrow, Baby, BriefcaseMedical, Carrot, Clock9, Fence, FileDown, FileUp, FileUser, HeartHandshake, House, MessageCircle, Pen, PencilLine, Plus, Target, Trash, User } from 'lucide-react';
import IsLoading from '../components/ui/isLoading/isLoading';
import Error from '../components/ui/error/error';
import Search from 'antd/es/transfer/search';
import AddCard from '../componentsAdmin/personData/addCard';
import EditCard from '../componentsAdmin/personData/editCard';
import DeleteCard from '../componentsAdmin/personData/deleteCard';
import { editReviews, getReviewsData } from '../slice/api/apiReviews';
import DeleteReviews from '../componentsAdmin/reviesAdmin.jsx/deleteReviews';
const ReviewsAdmin = () => {
    let [search, setSearch] = useState();
    let [deleteModal, setDeleteModal] = useState(null);
    let dispatch = useDispatch();
    const { reviewsData, isLoading, error} = useSelector((state) => state.ReviewsDataSlice)
    useEffect(() => {
        dispatch(getReviewsData(search))
    }, [search])
    const handleEdit = (data) => {
        const obj = { ...data, active: !data.active };
        dispatch(editReviews(obj))
    }
  return (
    <div className='flex justify-end'>
        <div className='bg-[#fffff5] h-fit w-[80%] absolute pt-30 right-0 -z-1'>
            <div className='w-[79%] m-auto flex justify-between'>
                <div className='p-10 rounded-2xl w-[48%] shadow-2xl bg-[#ffffff] mb-10'>
                    <p className='text-[25px] text-[#3f005b]'>Количество видео</p>
                    <b className='text-purple-400 text-[28px]'>{reviewsData.length}</b>
                </div>
            </div>
            <div className='w-[79%] m-auto'>
                <b className='text-[40px] my-10 pb-20'>Все отзывы</b>
                <div className='flex justify-between items-center gap-4 py-10'>
                    <Search onChange={(e) => setSearch(e.target.value)} placeholder=' search...'/>
                    <button  className='flex w-[40%] items-start bg-orange-400 text-white p-3 gap-3 rounded-2xl'>{ ""? <ArrowUpWideNarrow/> : <ArrowDownNarrowWide/>}{"" ? 'Без фильтра' : 'Фильтр'}</button>
                    <button className='flex items-center border-1 border-gray-500 p-3 gap-3 rounded-2xl'><FileUp/>Export</button>
                    <button className='flex items-center border-1 border-gray-500 p-3 gap-3 rounded-2xl'><FileDown/>Import</button>
                </div>
            </div>
            <div className='flex flex-wrap gap-2 px-30'>
                {isLoading && (
                    <IsLoading />
                )}
                {error && (
                    <Error/>
                )}
            </div>
            <div className='flex flex-wrap justify-between px-30'>
                {reviewsData.map(elm => (
                    <div key={elm.id} className='w-[49%] bg-[#F2F2FF] rounded-2xl my-4 py-10'>
                        <div key={elm.id} className='text-[#334155] flex flex-col mb-10 gap-10 justify-start'>
                            <div className='flex gap-10 items-center'>
                                <img src = {elm?.profile} className={`w-[65px] h-[65px] rounded-[50%] ml-10 ${!elm?.profile && 'hidden'}`}/>
                                {!elm?.profile ? (
                                    <div><User className='w-[60px] h-[60px] rounded-[50%] ml-10 text-white p-2 bg-[#8081BD]'/></div>
                                ): ''}
                                <div className='flex flex-col'>
                                <b>{elm.name}</b>
                                <p>{elm.city}</p>
                                </div>
                            </div>
                            <p className='px-10'>{elm.comment}</p>
                        </div>
                        <div className='flex justify-between px-10 items-center'>
                            <p className=''>Прочитать отзыв</p>
                            <button className='bg-white rounded-2xl px-15 py-1'>источник</button>
                        </div>
                        <div className='flex justify-center items-center gap-18 pt-10'>
                            <p onClick={() => handleEdit(elm)} className={`${elm.active ? 'bg-[#008563]' : 'bg-[#636363]'} px-10 rounded-2xl text-white`}>{elm.active ? 'Опубликовано' : 'Не опубликовано'}</p>                    
                            <div onClick={() => setDeleteModal(elm.id)} className='flex items-center gap-3 text-red-500 justify-center py-1'>
                                <Trash/>
                                <p>Удалить</p>
                            </div>
                        </div>
                        {deleteModal == elm.id && (
                            <DeleteReviews comment = {elm.comment} name = {elm.name} elm = {elm} setDeleteModal={setDeleteModal} id = {elm.id}/>
                        )}
                    </div>
                ))}
                <p className='text-center text-[#334155] text-[16px] pt-10 m-auto pb-10'>смотреть еще отзывы</p>
            </div>
            </div>
    </div>
  )
}

export default ReviewsAdmin