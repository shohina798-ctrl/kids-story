import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ArrowDownNarrowWide, ArrowUpWideNarrow, Baby, BriefcaseMedical, Carrot, Clock9, Fence, FileDown, FileUp, FileUser, HeartHandshake, House, MessageCircle, Pen, PenBox, PencilLine, Plus, Target, Trash } from 'lucide-react';
import IsLoading from '../components/ui/isLoading/isLoading';
import Error from '../components/ui/error/error';
import Search from 'antd/es/transfer/search';
import AddCard from '../componentsAdmin/personData/addCard';
import EditCard from '../componentsAdmin/personData/editCard';
import DeleteCard from '../componentsAdmin/personData/deleteCard';
import { getKidCards } from '../slice/api/apiKidCard';
const KidCardsAdmin = () => {
    let [search, setSearch] = useState();
    // let [editModal, setEditModal] = useState(null);
    // let [deleteModal, setDeleteModal] = useState(null);
    let [addModal, setAddModal] = useState(null);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getKidCards(search))
    }, [search])
    const { kidCards, isLoading, error} = useSelector((state) => state.KidCardsSlice)
  return (
    <div className='flex justify-end'>
        <div className='bg-[#fffff5] h-full w-[80%] absolute pt-30 right-0 -z-1'>
            <div className='w-[79%] pr-30 m-auto flex justify-between'>
                <div className='p-10 rounded-2xl w-[48%] shadow-2xl bg-[#ffffff] mb-10'>
                    <p className='text-[25px] text-[#3f005b]'>Количество дополнительных улуг:</p>
                    <b className='text-purple-400 text-[28px]'>{kidCards.length}</b>
                </div>
            </div>
            <div className='w-[79%] m-auto mt-20'>
                <b className='text-[40px] my-10 pb-20'>Все услуги</b>
                <div className='flex justify-between items-center gap-4 py-10'>
                    <Search onChange={(e) => setSearch(e.target.value)} placeholder=' search...'/>
                    <button onClick={() => setAddModal(!addModal)} className='flex items-center bg-orange-400 text-white p-3 gap-3 rounded-2xl'><Plus/> Добавить</button>
                    <button className='flex items-center border-1 border-gray-500 p-3 gap-3 rounded-2xl'><FileUp/>Export</button>
                    <button className='flex items-center border-1 border-gray-500 p-3 gap-3 rounded-2xl'><FileDown/>Import</button>
                </div>
            </div>
            <div className='flex bg-[#fffff5] flex-wrap gap-2 px-30'>
                {isLoading && (
                    <IsLoading />
                )}
                {error && (
                    <Error/>
                )}
                <div className='flex flex-wrap gap-5'>
                    {kidCards?.map((elm) => (
                        <div key = {elm.id} className='w-[31%] text-[#334155] h-[340px] relative mb-10 shadow-2xl rounded-b-xl'>
                            <img src = {elm.imgKid} className='w-full'/>
                            <div className='bg-[#F2F2FF] p-2 rounded-2xl items-center w-full flex relative bottom-9'>
                                <img src = {elm.imgIcon} className='bg-[#FDDC4E] rounded-2xl p-3 w-[57px] h-[60px]'/>
                                <p className='flex items-center ml-4 text-center text-[16px]'>{elm.text}</p>
                            </div>
                            <div className='flex justify-center gap-5'>
                                <div className='flex items-center gap-2'>
                                    <PenBox/>
                                    <p>Изменить</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <Trash/>
                                    <p>Удалить</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div> 
            </div>
            {addModal && (
                <AddCard setAddModal={setAddModal}/>
            )}
        </div>
    </div>
  )
}

export default KidCardsAdmin