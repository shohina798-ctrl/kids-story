import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { CircleX } from 'lucide-react'
import { addAdventage } from '../../slice/api/apiAdventages'
import FileInput from '../../components/ui/fileinput/fileinput'

const AddAdventage = ({setAddModal}) => {
  const [base64, setBase64] = useState(null)
  const [colorChange, setColorChange] = useState("")
  const [color, setColor]=useState('')
  console.log(color);
  
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = Object.fromEntries(new FormData(e.target));
    obj.img = base64;
    obj.id = new Date().setTime();
    dispatch(addAdventage(obj));
    setAddModal(false);
  }
  return (
    <form onSubmit={handleSubmit} className="fixed z-30 bg-white left-[40%] p-5 rounded-2xl shadow-2xl top-34 w-1/4 border-1 border-b-amber-950">
      <label htmlFor = 'img' className='flex'>Изображение</label>
      <FileInput id="img" className={`bg-gray-200 rounded-2xl pl-10 my-2 ${base64 ? 'hidden' : 'block'}`} onFile={(base)=>setBase64(base)}/>   
      {base64 && (
            <div className='text-red-500 relative'>
                <img src={base64 || ""} style={{background: colorChange}} alt="" className='p-2 w-30 my-1 h-30 rounded-2xl flex m-auto'/>
                <CircleX onClick={() => setBase64(null)} className='absolute top-0 right-0'/>
            </div>
      )}
      <label htmlFor = 'text' className='flex'>Текст</label>
      <input id = 'text' name='text' placeholder='текст' className = 'my-2 flex p-2 rounded-2xl w-full border-2 border-gray-300'/>
      <label htmlFor = 'color'>Цвет изображения</label>
      <input value={colorChange} name='color' onInput={(e)=> setColorChange(e.target.value)} type="color" />
      <div className='pt-4 flex gap-2'>
        <button className='px-4 py-2 rounded-2xl bg-gray-600 text-white' type='button' onClick={() => setAddModal(null)}>Отменить</button>
        <button className='px-4 py-2 rounded-2xl bg-green-600 text-white' type='submit'>Добавить</button>
      </div>
    </form>
  )
}

export default AddAdventage
