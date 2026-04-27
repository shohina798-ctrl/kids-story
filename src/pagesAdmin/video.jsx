import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ArrowDownNarrowWide, ArrowUpWideNarrow, Baby, BriefcaseMedical, Carrot, Clock9, Fence, FileDown, FileUp, FileUser, HeartHandshake, House, MessageCircle, Pen, PencilLine, Plus, Target, Trash } from 'lucide-react';
import IsLoading from '../components/ui/isLoading/isLoading';
import Error from '../components/ui/error/error';
import Search from 'antd/es/transfer/search';
import AddCard from '../componentsAdmin/personData/addCard';
import EditCard from '../componentsAdmin/personData/editCard';
import DeleteCard from '../componentsAdmin/personData/deleteCard';
import { getVideosData } from '../slice/api/apiVideo';
const VideoAdmin = () => {
    let [search, setSearch] = useState();
    // let [editModal, setEditModal] = useState(null);
    // let [deleteModal, setDeleteModal] = useState(null);
    let [addModal, setAddModal] = useState(null);
    let dispatch = useDispatch();
    const { videos, isLoading, error} = useSelector((state) => state.VideoSlice)
    useEffect(() => {
        dispatch(getVideosData(search))
    }, [search])
  return (
    <div className='flex justify-end'>
        <div className='bg-[#fffff5] h-full w-[80%] absolute pt-30 right-0 -z-1'>
            <div className='w-[79%] m-auto flex justify-between'>
                <div className='p-10 rounded-2xl w-[48%] shadow-2xl bg-[#ffffff] mb-10'>
                    <p className='text-[25px] text-[#3f005b]'>Количество видео</p>
                    <b className='text-purple-400 text-[28px]'>{videos.length}</b>
                </div>
            </div>
            <div className='w-[79%] m-auto'>
                <b className='text-[40px] my-10 pb-20'>Все видео</b>
                <div className='flex justify-between items-center gap-4 py-10'>
                    <Search onChange={(e) => setSearch(e.target.value)} placeholder=' search...'/>
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
                {videos.map((elm) => {
                    return (
                        <div key={elm.id} className='flex w-[32%] flex-col mb-10 p-4 rounded-2xl shadow-2xl hover:my-1'>
                            <iframe className="w-full h-[280px] rounded-2xl mb-10"  src={elm.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            <div className='flex justify-center gap-10'>
                                <div className='flex items-center gap-3 text-purple-700'>
                                    <Pen/>
                                    <p>Изменить</p>
                                </div>
                                <div className='flex items-center gap-3 text-red-500'>
                                    <Trash/>
                                    <p>Удалить</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            {addModal && (
                <AddCard setAddModal={setAddModal}/>
            )}
        </div>
    </div>
  )
}

export default VideoAdmin