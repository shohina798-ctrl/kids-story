import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ArrowDownNarrowWide, ArrowUpWideNarrow, FileDown, FileUp, FileUser, PencilLine, Plus, Trash } from 'lucide-react';
import IsLoading from '../components/ui/isLoading/isLoading';
import Error from '../components/ui/error/error';
import Search from 'antd/es/transfer/search';
import AddCard from '../componentsAdmin/personData/addCard';
import { getPersonData } from '../slice/api/apiPersonData';
import EditCard from '../componentsAdmin/personData/editCard';
import DeleteCard from '../componentsAdmin/personData/deleteCard';
const PersonData = () => {
    let [search, setSearch] = useState();
    let cntProfessions = [];
    let [editModal, setEditModal] = useState(null);
    let [deleteModal, setDeleteModal] = useState(null);
    let [addModal, setAddModal] = useState(null);
    let dispatch = useDispatch();
    const { personData , isLoading, error} = useSelector((state) => state.PersonDataSlice)
    useEffect(() => {
        dispatch(getPersonData(search))
    }, [search])
    personData.filter(elm => {
        if(!cntProfessions.includes(elm.profession))
            cntProfessions.push(elm.profession)
    })
    let [filter, setFilter] = useState([]);
    const Filter = () => {
        if (filter.length) 
            {
                setFilter([]);
                console.log(personData)
            }
        else {
            let filtered = personData.map(elem => elem.name.toLowerCase()).sort();
            let res = [];
            filtered.filter(text => {
                return personData.map(elm => {
                    if(elm.name.toLowerCase() == text)
                        res.push(elm)
                })
            })
            setFilter(res);
        }
    }
  return (
    <div className='flex justify-end'>
        <div className='bg-[#fffff5] h-fit w-[80%] absolute pt-30 right-0 -z-1'>
            <div className='w-[79%] m-auto flex justify-between mb-10'>
                <div className='p-10 rounded-2xl w-[48%] shadow-2xl bg-[#ffffff]'>
                    <p className='text-[25px] text-[#3f005b]'>Количество людей</p>
                    <b className='text-purple-400 text-[28px]'>{personData.length}</b>
                </div>
                <div className='p-10 rounded-2xl w-[48%] shadow-2xl bg-[#ffffff]'>
                    <p className='text-[25px] text-[#3f005b]'>Количество направлений</p>
                    <b className='text-purple-400 text-[28px]'>{cntProfessions.length}</b>
                </div>
            </div>
            <div className='w-[79%] m-auto'>
                <b className='text-[40px] my-10 pb-20'>Все пользователи</b>
                <div className='flex justify-between items-center gap-4 py-10'>
                    <Search onChange={(e) => setSearch(e.target.value)} placeholder=' search...'/>
                    <button onClick={() => {Filter()}} className='flex w-[40%] items-start bg-orange-400 text-white p-3 gap-3 rounded-2xl'>{filter.length ? <ArrowUpWideNarrow/> : <ArrowDownNarrowWide/>}{filter.length ? 'Без фильтра' : 'Фильтр'}</button>
                    <button onClick={() => setAddModal(!addModal)} className='flex items-center bg-orange-400 text-white p-3 gap-3 rounded-2xl'><Plus/> Добавить</button>
                    <button className='flex items-center border-1 border-gray-500 p-3 gap-3 rounded-2xl'><FileUp/>Export</button>
                    <button className='flex items-center border-1 border-gray-500 p-3 gap-3 rounded-2xl'><FileDown/>Import</button>
                </div>
            </div>
            <div className='flex flex-wrap gap-13 px-30'>
                {isLoading && (
                    <IsLoading />
                )}
                {error && (
                    <Error/>
                )}
                {(filter.length ? filter : personData)?.map((elm, ind) => (
                    <div key={ind}>
                        <div className='w-[283px] mb-10'>
                            <img src = {elm?.img} className='w-full h-[278px]'/>
                            <div className='py-4'>
                                <b className='text-[#8081BD] text-[20px]'>{elm?.name}</b>
                                <p className='text-[20px]'>{elm?.fullname}</p>
                                <p>{elm?.profession}</p>
                                <p>{elm?.experience}</p>
                            </div>
                            <div className='flex justify-between items-center m-auto rounded-2xl px-7 bg-[#8081BD] text-white'>
                                <button onClick={() => setDeleteModal(elm.id)} className='py-2 rounded-2xl flex items-center gap-1'><Trash/>Удалить</button>
                                <button onClick={() => setEditModal(elm?.id)} className='p-2 rounded-2xl flex items-center gap-1'><PencilLine/>Изменить</button>
                            </div>
                        </div>
                        {editModal == elm?.id && (
                            <EditCard elm ={elm} setEditModal = {setEditModal}/>
                        )}
                        {deleteModal == elm.id && (
                            <DeleteCard id = {elm.id} name = {elm.name} fullname={elm.fullname} setDeleteModal={setDeleteModal}/>
                        )}
                    </div>
                ))}
                {addModal && (
                    <AddCard setAddModal={setAddModal}/>
                )}
            </div>
        </div>
    </div>
  )
}

export default PersonData