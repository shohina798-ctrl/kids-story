import React from 'react'
import img from '/logo.png';
import { useNavigate } from 'react-router-dom';
const Registration = () => {
  let navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = Object.fromEntries(new FormData(e.target));
    if (obj.email != "email@gmail.com") alert("Неверный email");
    if (obj.password != "753753") alert("Неверный пароль");
    if (obj.email == "email@gmail.com" && obj.password == "753753") {
        navigate("/admin/personData")
    }
  }
  return (
    <div>
        <div className='w-[80%] m-auto mt-10'>
            <img src = {img} className='mb-4'/>
            <b className='text-[#8081BD] text-[40px]'>Регистрация</b>
            <div>
                <form onSubmit = {handleSubmit} className='bg-[#FFF6D1] p-10 rounded-2xl w-1/2 mt-4 flex flex-col gap-10'>
                    <div className='flex flex-col gap-4'>
                        <label for = "email"><b>Имя пользователя или email</b></label>
                        <input name = "email" id="email" type="email" required className='border-2 p-3 rounded-2xl border-gray-600' placeholder='username@example.com'/>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <label for = "password"><b>Пароль</b></label>
                        <input name="password" type="password" id="password" className='border-2 p-3 rounded-2xl border-gray-600' placeholder='password'/>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex gap-3 items-center'>
                            <input type="checkbox" id="remember" className='w-5 h-5'/>
                            <label for = "remember">Запомнить меня</label>
                        </div>
                        <button className='hover:text-blue-600 hover:underline'>Забыли пароль?</button>
                    </div>
                    <button type='submit' className='text-white bg-[#EA5D4A] p-2 rounded-2xl w-full'>Войти</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Registration
