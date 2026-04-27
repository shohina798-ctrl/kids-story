import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { CircleX } from 'lucide-react'
import FileInput from '../../components/ui/fileinput/fileinput'
import { editAdventage } from '../../slice/api/apiAdventages'

const EditAdventages = ({elm, setEditModal}) => {
  const [base64, setBase64] = useState(elm.img)
  const [colorChange, setColorChange] = useState(elm.color)
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = Object.fromEntries(new FormData(e.target));
    obj.img = base64;
    obj.id = elm.id;
    dispatch(editAdventage(obj));
    setEditModal(null);
  }
  return (
    <form onSubmit={handleSubmit} className="fixed z-30 bg-white left-[40%] p-5 rounded-2xl shadow-2xl top-34 w-1/4 border-1 border-b-amber-950">
      <label htmlFor = 'img' className='flex'>Изображение</label>
      <FileInput id="img" className={`bg-gray-200 rounded-2xl pl-10 my-2 ${base64 ? 'hidden' : 'block'}`} onFile={(base)=>setBase64(base)}/>   
      {base64 && (
          <div className='text-red-500 relative'>
              <img src={`${base64}`} style={{background: colorChange}} alt="" className='p-2 w-30 my-1 h-30 rounded-2xl flex m-auto'/>
              <CircleX onClick={() => setBase64(null)} className='absolute top-0 right-0'/>
          </div>
      )}
      <label htmlFor = 'text' className='flex'>Текст</label>
      <input defaultValue={elm.text} id = 'text' name='text' placeholder='текст' className = 'my-2 flex p-2 rounded-2xl w-full border-2 border-gray-300'/>
      <label htmlFor = 'color'>Цвет изображения</label>
      <input onInput={(e) => {setColorChange(e.target.value)}} defaultValue={elm.color} id = 'color' name='color' placeholder='цвет изображения' className = 'my-2 flex p-2 rounded-2xl w-full border-2 border-gray-300'/>        
      <div className='pt-4 flex gap-2'>
        <button className='px-4 py-2 rounded-2xl bg-gray-600 text-white' type='button' onClick={() => setEditModal(null)}>Отменить</button>
        <button className='px-4 py-2 rounded-2xl bg-green-600 text-white' type='submit'>Изменить</button>
      </div>
    </form>
  )
}

export default EditAdventages