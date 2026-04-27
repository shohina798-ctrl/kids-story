import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ArrowDownNarrowWide, ArrowUpWideNarrow, Baby, BriefcaseMedical, Carrot, Clock9, Fence, FileDown, FileUp, FileUser, HeartHandshake, House, MessageCircle, Pen, PenBox, PencilLine, Plus, Target, Trash, User } from 'lucide-react';
import IsLoading from '../components/ui/isLoading/isLoading';
import Error from '../components/ui/error/error';
import Search from 'antd/es/transfer/search';
import AddCard from '../componentsAdmin/personData/addCard';
import EditCard from '../componentsAdmin/personData/editCard';
import DeleteCard from '../componentsAdmin/personData/deleteCard';
import { getNewsCard } from '../slice/api/apiNews';
const NewsAdmin = () => {
    let [search, setSearch] = useState();
    // let [editModal, setEditModal] = useState(null);
    // let [deleteModal, setDeleteModal] = useState(null);
    let [addModal, setAddModal] = useState(null);
    let dispatch = useDispatch();
    const { newsCard, isLoading, error} = useSelector((state) => state.NewsSlice)
    useEffect(() => {
        dispatch(getNewsCard(search))
    }, [search])
  return (
    <div className='flex justify-end'>
        <div className='bg-[#fffff5] h-full w-[80%] absolute pt-30 right-0 -z-1'>
            <div className='w-[79%] m-auto flex justify-between mb-10'>
                <div className='p-10 rounded-2xl w-[48%] shadow-2xl bg-[#ffffff] mb-10'>
                    <p className='text-[25px] text-[#3f005b]'>Количество новостей</p>
                    <b className='text-purple-400 text-[28px]'>{newsCard.length}</b>
                </div>
            </div>
            <div className='w-[79%] m-auto'>
                <b className='text-[40px] my-10 pb-20'>Все новости</b>
                <div className='flex justify-between items-center gap-4 py-10'>
                    <Search onChange={(e) => setSearch(e.target.value)} placeholder=' search...'/>
                    <button  className='flex w-[40%] items-start bg-orange-400 text-white p-3 gap-3 rounded-2xl'>{ ""? <ArrowUpWideNarrow/> : <ArrowDownNarrowWide/>}{"" ? 'Без фильтра' : 'Фильтр'}</button>
                    <button onClick={() => setAddModal(!addModal)} className='flex items-center bg-orange-400 text-white p-3 gap-3 rounded-2xl'><Plus/> Добавить</button>
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
                                <button className='rounded-2xl py-1 px-18 text-[#334155] border-1 border-[#8081BD] hover:text-white hover:bg-[#EA5D4A] hover:border-transparent font-bold'>подробнее</button>
                            </div>
                            <div className='flex justify-center gap-10 py-4'>
                                <div className='flex flex-col justify-center items-center text-blue-600'>
                                    <PenBox/>
                                    <p>Изменить</p>
                                </div>
                                <div className='flex flex-col justify-center items-center text-red-600'>
                                    <Trash/>
                                    <p>Удалить</p>
                                </div>
                            </div>
                        </div>
                    )))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsAdmin