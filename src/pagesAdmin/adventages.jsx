import Search from 'antd/es/transfer/search'
import { ArrowDownNarrowWide, ArrowUpWideNarrow, FileDown, FileUp, Pen, Plus, Trash } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAdventages } from '../slice/api/apiAdventages'
import IsLoading from '../components/ui/isLoading/isLoading'
import Error from '../components/ui/error/error'
import EditAdventages from '../componentsAdmin/adventages/editAdventages'
import DeleteAdventages from '../componentsAdmin/adventages/deleteAdvantages'
import AddAdventage from '../componentsAdmin/adventages/addAdventages'

const Adventages = () => {
    let dispatch = useDispatch()
    const [search, setSearch] = useState('')
    let { adventagesData, isLoading, error } = useSelector(state => state.AdventagesSlice)
    useEffect(() => {
        dispatch(getAdventages(search));
    }, [search])
    let [editModal, setEditModal] = useState(0);
    let [addModal, setAddModal] = useState(null);
    let [deleteModal, setDeleteModal] = useState(false);
    let [filter, setFilter] = useState([]);
    const Filter = () => {
        if (filter.length) setFilter([]);
        else {
            let filtered = adventagesData.map(elem => elem.text.toLowerCase()).sort();
            let res = [];
            filtered.filter(text => {
                return adventagesData.map(elm => {
                    if(elm.text.toLowerCase() == text)
                        res.push(elm)
                })
            })
            setFilter(res);
        }
    }
    return (
    <div className='flex justify-end'>
        <div className='bg-[#fffff5] h-full w-[80%] absolute pt-30 right-0 -z-1'>
            <div className='w-[79%] m-auto flex justify-between mb-10'>
                <div className='p-10 rounded-2xl w-[48%] shadow-2xl bg-[#ffffff] mb-10'>
                    <p className='text-[25px] text-[#3f005b]'>Количество преимущества</p>
                    <b className='text-purple-400 text-[28px]'>{adventagesData?.length}</b>
                </div>
            </div>
            <div className='w-[79%] m-auto'>
                <b className='text-[40px] my-10 pb-20'>Все приимущества</b>
                <div className='flex justify-between items-center gap-4 py-10'>
                    <Search value={search} onChange={(e)=> setSearch(e.target.value)} placeholder=' search...'/>
                    <button onClick={() => {Filter()}} className='flex w-[40%] items-start bg-orange-400 text-white p-3 gap-3 rounded-2xl'>{filter.length ? <ArrowUpWideNarrow/> : <ArrowDownNarrowWide/>}{filter.length ? 'Без фильтра' : 'Фильтр'}</button>
                    <button onClick={() => setAddModal(!addModal)} className='flex items-center bg-orange-400 text-white p-3 gap-3 rounded-2xl'><Plus/> Добавить</button>
                    <button className='flex items-center border-1 border-gray-500 p-3 gap-3 rounded-2xl'><FileUp/>Export</button>
                    <button className='flex items-center border-1 border-gray-500 p-3 gap-3 rounded-2xl'><FileDown/>Import</button>
                </div>
            </div>
            {isLoading && (
                <IsLoading/>
            )}
            {error && (
                <Error/>
            )}
            {!error && !isLoading && (
                <table className='m-auto px-30 flex flex-col gap-10 bg-[#fffff5]'>
                    <thead>
                        <tr className='bg-gray-500 text-white mb-10 flex justify-between rounded-2xl text-left'>
                            <th className='w-[30%] text-center'>Изображение</th>
                            <th className='w-[30%] text-center'>Текст</th>
                            <th className='w-[30%] text-center'>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(filter.length ? filter : adventagesData)?.map(elm => (
                            <tr key={elm.id} className='flex justify-between text-center'>
        
                                <td className='flex w-[30%] m-auto justify-center'>
                                    <img src = {elm.img} style={{backgroundColor: elm.color}} className='my-3 rounded-2xl w-[80px] h-[80px] p-2'/>
                                </td>
                                <td className='text-center flex items-center w-[30%] m-auto justify-center'>{elm.text}</td>
                                <td className='text-left flex items-center w-[30%] m-auto justify-center'>
                                    <div className='flex gap-4'>
                                        <div onClick={() => setEditModal(elm.id)} className='flex flex-col items-center justify-center gap-2 text-blue-600'>
                                            <Pen/>
                                            <p>Изменить</p>
                                        </div>
                                        <div onClick={() => setDeleteModal(elm.id)} className='flex flex-col justify-center items-center gap-2 text-red-600'>
                                            <Trash/>
                                            <p>Удалить</p>
                                        </div>  
                                    </div>
                                    {editModal == elm.id && (
                                        <EditAdventages elm ={elm} setEditModal={setEditModal}/>
                                    )}
                                    {deleteModal == elm.id && (
                                        <DeleteAdventages setDeleteModal={setDeleteModal} text={elm.text} elm ={elm} id={elm.id}/>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            {addModal && (
                <AddAdventage setAddModal={setAddModal}/>
            )}
        </div>
    </div>
  )
}

export default Adventages
