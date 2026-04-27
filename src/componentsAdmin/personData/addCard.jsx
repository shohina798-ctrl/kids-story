import React, { useState } from 'react'
import { addPersonData } from '../../slice/api/apiPersonData'
import { useDispatch } from 'react-redux'
import FileInput from '../../components/ui/fileinput/fileinput'
import { CircleX } from 'lucide-react'

const AddCard = ({setAddModal}) => {
  const [base64, setBase64] = useState(null)
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = Object.fromEntries(new FormData(e.target));
    obj.img = base64;
    obj.id = new Date().setTime();
    dispatch(addPersonData(obj));
    setAddModal(false);
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="fixed z-30 bg-white left-[40%] p-5 rounded-2xl shadow-2xl top-34 w-1/4 border-1 border-b-amber-950">
        <label htmlFor = 'img' className='flex'>Изображение</label>
        <FileInput id="img" className={`bg-gray-200 rounded-2xl pl-10 my-2 ${base64 ? 'hidden' : 'block'}`} onFile={(base)=>setBase64(base)}/>   
        {base64 && (
            <div className='text-red-500 relative'>
                <img src={base64} alt="" className='w-30 my-1 h-30 rounded-2xl flex m-auto'/>
                <CircleX onClick={() => setBase64(null)} className='absolute top-0 right-0'/>
            </div>
        )}
        <label htmlFor = 'name' className='flex'>Имя</label>
        <input id = 'name' name='name' placeholder='имя' className = 'my-2 flex p-2 rounded-2xl w-full border-2 border-gray-300'/>
        <label htmlFor = 'fullname'>Полное имя</label>
        <input id = 'fullname' name='fullname' placeholder='полное имя' className = 'my-2 flex p-2 rounded-2xl w-full border-2 border-gray-300'/>
        <label htmlFor = 'profession'>Направление</label>
        <input id = 'profession' name='profession' placeholder='направление' className = 'my-2 flex p-2 rounded-2xl border-2 w-full border-gray-300'/>
        <label htmlFor = 'experience'>Опыт</label>
        <input id = 'experience' name='experience' placeholder='опыт' className = 'my-2 flex p-2 rounded-2xl border-2 w-full border-gray-300'/>
        
        <div className='pt-4 flex gap-2'>
          <button className='px-4 py-2 rounded-2xl bg-gray-600 text-white' type='button' onClick={() => setAddModal(false)}>Отменить</button>
          <button className='px-4 py-2 rounded-2xl bg-green-600 text-white' type='submit'>Добавить</button>
        </div>
      </form>
    </div>
  )
}

export default AddCard
