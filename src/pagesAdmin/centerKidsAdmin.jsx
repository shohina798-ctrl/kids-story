import Search from 'antd/es/transfer/search'
import { ArrowDownNarrowWide, ArrowUpWideNarrow, Edit, FileDown, FileUp, Pen, PenBox, Plus, Trash } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IsLoading from '../components/ui/isLoading/isLoading'
import Error from '../components/ui/error/error'
import EditAdventages from '../componentsAdmin/adventages/editAdventages'
import DeleteAdventages from '../componentsAdmin/adventages/deleteAdvantages'
import AddAdventage from '../componentsAdmin/adventages/addAdventages'
import { getCenterKids } from '../slice/api/apiCenterKids'

const CenterKidsAdmin = () => {
    let dispatch = useDispatch()
    const [search, setSearch] = useState('')
    let { centerKids, isLoading, error } = useSelector(state => state.CenterKidsSlice)
    useEffect(() => {
        dispatch(getCenterKids(search));
    }, [search])
    // let [editModal, setEditModal] = useState(0);
    // let [deleteModal, setDeleteModal] = useState(false);
    let [addModal, setAddModal] = useState(null);
    let [filter, setFilter] = useState([]);
    const Filter = () => {
        if (filter.length) setFilter([]);
        else {
            let filtered = centerKids.map(elem => elem.text.toLowerCase()).sort();
            let res = [];
            filtered.filter(text => {
                return centerKids.map(elm => {
                    if(elm.text.toLowerCase() == text)
                        res.push(elm)
                })
            })
            setFilter(res);
        }
    }
    console.log(centerKids)
    return (
    <div className='flex justify-end'>
        <div className='bg-[#fffff5] h-full w-[80%] absolute pt-30 right-0 -z-1'>
            <div className='w-[79%] m-auto flex justify-between mb-10'>
                <div className='p-10 rounded-2xl w-[48%] shadow-2xl bg-[#ffffff] mb-10'>
                    <p className='text-[25px] text-[#3f005b]'>Количество информаций</p>
                    <b className='text-purple-400 text-[28px]'>{centerKids?.length}</b>
                </div>
            </div>
            <div className='w-[79%] m-auto'>
                <b className='text-[40px] my-10 pb-20'>вся информация</b>
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
            <div className='px-30 m-auto pb-1 bg-[#fffff5]'>
                {!error && !isLoading && (
                    centerKids.map((elm) => (
                        <div key={elm.id} className='flex items-start mb-20 gap-10'>
                            <img src = {elm.img} className='w-1/3'/>
                            <div className='flex gap-10'>
                                <div>
                                    <b className='text-[#8081BD] text-[24px]'>Раздел 1</b>
                                    <p>{elm.text1}</p>
                                </div>
                                <div>
                                    <b className='text-[#8081BD] text-[24px]'>Раздел 2</b>
                                    <p>{elm.text2}</p>
                                </div>
                            </div>
                            <div className='flex flex-col items-center gap-10'>
                                <PenBox/>
                                <Trash/>
                            </div>
                        </div>
                    ))
                )}
            </div>
            {addModal && (
                <AddAdventage setAddModal={setAddModal}/>
            )}
        </div>
    </div>
  )
}

export default CenterKidsAdmin
