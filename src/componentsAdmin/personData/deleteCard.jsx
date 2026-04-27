import React from 'react'
import { useDispatch } from 'react-redux'
import { deletePersonData } from '../../slice/api/apiPersonData';

const DeleteCard = ({id, name, fullname, setDeleteModal})=> {
    let dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deletePersonData(id))
        setDeleteModal(null)
    }
  return (
    <div>
      <div  
        className="fixed z-10 border-1 border-gray-400 bg-white left-[40%] p-5 rounded-2xl shadow-2xl top-70 w-1/4">
        <p>Вы действительно хотите удалить данные<br/>"<b>{name} {fullname}</b>"</p>
        <div className='pt-4 flex gap-2'>
          <button className='px-4 py-2 rounded-2xl bg-gray-600 text-white' type='button' onClick={() => setDeleteModal(null)}>Отмена</button>
          <button className='px-4 py-2 rounded-2xl bg-green-600 text-white' type='button' onClick={handleDelete}>Да</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteCard
