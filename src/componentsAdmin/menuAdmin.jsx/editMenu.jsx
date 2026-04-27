import React from 'react'
import { useDispatch } from 'react-redux'
import FileInput from '../../components/ui/fileinput/fileinput'
import { editMenu } from '../../slice/api/apiMenu'

const EditMenu = ({elm, setEditModal}) => {
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    console.log(formData)
    const obj = {
        id: elm.id,
        nutrition: formData.get("nutrition"),
        meel: elm.meel.map((item, index) => ({
        id: item.id,
        food: formData.getAll("food")[index],
        measure: formData.getAll("measure")[index],
        }))
    };
    dispatch(editMenu(obj))
    console.log(obj);
    setEditModal(null);
  }
  let [meel, setMeel] = [];
  let obj = {};
  const handleAddFood = (elemMeel) => { 
    obj = {id: 100, food: "", measure: ""}
    setMeel[{...elemMeel, obj}];
    console.log(meel)
  }
  meel = elm.meel
  return (
    <div>
        <form onSubmit={handleSubmit} className="fixed z-30 bg-white left-[40%] p-5 rounded-2xl shadow-2xl top-34 w-1/4 border-1 border-b-amber-950">
            <label htmlFor = 'nurtion' className='flex text-[20px]'>Питание</label>
            <input id="nurtion" name = "nutrition" defaultValue={elm.nutrition} className='p-3 rounded-2xl w-full text-[#79BC6D] text-[20px] font-bold'/>
            {(meel).map(elm => (
                <div key={elm.id} name = "meel">
                    <div className='flex justify-between border-b-3 border-amber-600 border-dashed py-1'>
                        <input placeholder='название блюда' name = "food" defaultValue = {elm.food} className='p-3 text-[#8081BD] font-semibold'/>
                        <input placeholder='кол-во' name = "measure" defaultValue = {elm.measure} className='w-[100px] p-3'/>
                    </div>
                </div>
            ))}
            <p onClick={() => handleAddFood(elm.meel)} className='text-gray-600 py-3'>Добавить блюдо +</p>
            <div className='pt-4 flex gap-2'>
                <button className='px-4 py-2 rounded-2xl bg-gray-600 text-white' type='button' onClick={() => setEditModal(null)}>Отменить</button>
                <button className='px-4 py-2 rounded-2xl bg-green-600 text-white' type='submit'>Изменить питание</button>
            </div>
        </form>
    </div>
  )
}

export default EditMenu
