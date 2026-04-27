import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ArrowDownNarrowWide, ArrowUpWideNarrow, Baby, BriefcaseMedical, Carrot, Clock9, Fence, FileDown, FileUp, FileUser, HeartHandshake, House, MessageCircle, Pen, PenBox, PencilLine, Plus, Target, Trash, User } from 'lucide-react';
import IsLoading from '../components/ui/isLoading/isLoading';
import Error from '../components/ui/error/error';
import Search from 'antd/es/transfer/search';
import AddCard from '../componentsAdmin/personData/addCard';
import EditCard from '../componentsAdmin/personData/editCard';
import DeleteCard from '../componentsAdmin/personData/deleteCard';
import { getMenu } from '../slice/api/apiMenu';
import EditMenu from '../componentsAdmin/menuAdmin.jsx/editMenu';
const MenuAdmin = () => {
    let [search, setSearch] = useState();
    let [editModal, setEditModal] = useState(null);
    // let [deleteModal, setDeleteModal] = useState(null);
    let [addModal, setAddModal] = useState(null);
    let dispatch = useDispatch();
    const { menu, isLoading, error} = useSelector((state) => state.MenuSlice)
    useEffect(() => {
        dispatch(getMenu(search))
    }, [search])
    
  return (
    <div className='flex justify-end'>
        <div className='bg-[#fffff5] h-full w-[80%] absolute pt-30 right-0 -z-1'>
            <div className='w-[79%] m-auto flex justify-between mb-10'>
                <div className='p-10 rounded-2xl w-[48%] shadow-2xl bg-[#ffffff] mb-10'>
                    <p className='text-[25px] text-[#3f005b]'>Количество питаний</p>
                    <b className='text-purple-400 text-[28px]'>{menu.length}</b>
                </div>
            </div>
            <div className='w-[79%] m-auto'>
                <b className='text-[40px] my-10 pb-20'>Меню питания</b>
                <div className='flex justify-between items-center gap-4 py-10'>
                    <Search onChange={(e) => setSearch(e.target.value)} placeholder=' search...'/>
                    <button  className='flex w-[40%] items-start bg-orange-400 text-white p-3 gap-3 rounded-2xl'>{ ""? <ArrowUpWideNarrow/> : <ArrowDownNarrowWide/>}{"" ? 'Без фильтра' : 'Фильтр'}</button>
                    <button onClick={() => setAddModal(!addModal)} className='flex items-center bg-orange-400 text-white p-3 gap-3 rounded-2xl'><Plus/>Добавить</button>
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
            <div className='flex flex-wrap px-30 bg-[#fffff5] justify-between pb-20'>
                {menu.map(diet => (
                    <div key = {diet.id} className='flex flex-col w-[17%]'>
                        <b className='text-[#79BC6D] text-[20px]'>{diet.nutrition}</b>
                        <div className='flex flex-col mb-3'>
                            {diet.meel.map(elm => (
                                <div key={elm.id} className='flex justify-between border-b-2 border-dashed mb-1 border-[#F6B31F]'>
                                    <b className='text-[#8081BD]'>{elm.food}</b>
                                    <p className=''>{elm.measure}</p>
                                </div>
                            ))}
                        </div>
                        <div className='flex w-full justify-center gap-4 text-gray-600'>
                            <PenBox onClick={() => setEditModal(diet.id)}/>
                            <Trash/>
                        </div>
                        {editModal == diet.id && (
                            <EditMenu elm = {diet} setEditModal={setEditModal}/>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default MenuAdmin