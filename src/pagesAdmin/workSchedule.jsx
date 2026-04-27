import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ArrowDownNarrowWide, ArrowUpWideNarrow, Baby, BriefcaseMedical, Carrot, Clock9, Fence, FileDown, FileUp, FileUser, HeartHandshake, House, MessageCircle, Pen, PencilLine, Plus, Target, Trash } from 'lucide-react';
import IsLoading from '../components/ui/isLoading/isLoading';
import Error from '../components/ui/error/error';
import Search from 'antd/es/transfer/search';
import AddCard from '../componentsAdmin/personData/addCard';
import EditCard from '../componentsAdmin/personData/editCard';
import DeleteCard from '../componentsAdmin/personData/deleteCard';
import { getWorkSchedule } from '../slice/api/apiWorkSchedule';
const WorkScheduleAdmin = () => {
    let [search, setSearch] = useState();
    let [editModal, setEditModal] = useState(null);
    let [deleteModal, setDeleteModal] = useState(null);
    let [addModal, setAddModal] = useState(null);
    let dispatch = useDispatch();
    const { workSchedule , isLoading, error} = useSelector((state) => state.WorkScheduleSlice)
    useEffect(() => {
        dispatch(getWorkSchedule(search))
    }, [search])
    const icons = [
        Clock9,
        Target,
        BriefcaseMedical,
        Baby,
        MessageCircle,
        Fence,
        HeartHandshake,
        House,
        Carrot
    ]
  return (
    <div className='flex justify-end'>
        <div className='bg-[#fffff5] h-full pb-20 w-[80%] absolute b-10 pt-30 right-0 -z-1'>
            <div className='w-[79%] m-auto flex justify-between'>
                <div className='p-10 rounded-2xl w-[48%] shadow-2xl bg-[#ffffff] mb-10'>
                    <p className='text-[25px] text-[#3f005b]'>Количество расписаний</p>
                    <b className='text-purple-400 text-[28px]'>{workSchedule.length}</b>
                </div>
            </div>
            <div className='w-[79%] m-auto'>
                <b className='text-[40px]'>Расписания</b>
                <div className='flex justify-between items-center gap-4 py-10'>
                    <Search onChange={(e) => setSearch(e.target.value)} placeholder=' search...'/>
                    <button onClick={() => setAddModal(!addModal)} className='flex items-center bg-orange-400 text-white p-3 gap-3 rounded-2xl'><Plus/> Добавить</button>
                    <button className='flex items-center border-1 border-gray-500 p-3 gap-3 rounded-2xl'><FileUp/>Export</button>
                    <button className='flex items-center border-1 border-gray-500 p-3 gap-3 rounded-2xl'><FileDown/>Import</button>
                </div>
            </div>
            <div className='flex flex-wrap px-30 rounded-2xl bg-[#fffff5]'>
                {isLoading && (
                    <IsLoading />
                )}
                {error && (
                    <Error/>
                )}
                <div className='mb-20 bg-gray-100 0'>
                    {workSchedule.map((elm, ind) => {
                        const Icon = icons[ind]
                        return (
                            <div key = {elm.id} className={`flex w-full border-gray-500 justify-between px-20 hover:bg-gray-200 hover:rounded-2xl ${elm.id == workSchedule.length ? 'border-0' : 'border-b-1'}`}>
                                <div key={elm.id} className='flex items-center gap-3 w-[50%] py-10'>
                                    <div>
                                        <Icon style={{ backgroundColor: elm.color }} className='text-white rounded-2xl p-2 w-[50px] h-[50px]'/>
                                    </div>
                                    <p className='w-[90%]'><b>{elm?.text}</b>{elm?.text2}</p>         
                                    {editModal == elm?.id && (
                                        <EditCard elm ={elm} setEditModal = {setEditModal}/>
                                    )}
                                    {deleteModal == elm.id && (
                                        <DeleteCard id = {elm.id} name = {elm.name} fullname={elm.fullname} setDeleteModal={setDeleteModal}/>
                                    )}
                                </div>
                                <div className='flex items-center gap-7 w-1/5'>
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
            </div>
            {addModal && (
                <AddCard setAddModal={setAddModal}/>
            )}
        </div>
    </div>
  )
}

export default WorkScheduleAdmin 