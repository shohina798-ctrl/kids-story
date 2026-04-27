import React, { useEffect, useState } from 'react'
import img from '/logo.png';
import img1 from '/соц сети.png'; 
import img2 from '/Group 7 (2).png'; 
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
const Layout = () => {
    let [nav, setNav] = useState((localStorage.getItem('navigation')) || "");
    let [idSelect, setIdSelect] = useState(null);
    const navigate = useNavigate();
    const handleChange = (e) => {
        navigate(e.target.value);
        localStorage.setItem('navigation', e.target.value);
        setNav(localStorage.getItem('navigation'))
    };
    const [showHeader, setShowHeader] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1500) {
                setShowHeader(true);
            } else {
                setShowHeader(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // const aboutUs = [
    //     {
    //         id:'aboutUs',
    //         path:'/',
    //         label:'О нас'
    //     },
    //      {
    //         id:'additionalServices',
    //         path:'/additionalServices',
    //         label:'Дополнительные услуги'
    //     },
    //      {
    //         id:'aboutOurCenter',
    //         path:'/aboutOurCenter',
    //         label:'О нашем центре'
    //     },

    // ]

  return (
    <div>
      <header className='sticky top-0 bg-white z-20 shadow-2xs shadow-gray-400'>
        <div className='flex flex-col w-[85%] m-auto pt-3'>
            <div className='flex text-[#EA5D4A] justify-end gap-[2%]'>
                <p>Москва, ул. Муравская д.38, к.1</p>
                <p>ЖК Мир Митино <span className='text-[#0E95D3]'>М. Пятницкое шоссе</span></p>
            </div>
            <div className='flex items-center justify-between py-4'>
                <div className='flex items-center justify-between w-[56%] justify-between]'>
                    <img src = {img} className='w-[20%]'/>
                    <div className='flex items-center gap-2 w-[78%] justify-between'>
                        <select onClick={(e) => {handleChange(e);setIdSelect(1)}} onChange={(e) => {handleChange(e); setIdSelect(1)}} value={ nav || "/"} className={`${idSelect == 1? 'text-[#EA5D4A]' : ''} w-[16.5%]`}>
                            <option className="text-black" value="/">Главная</option>
                            <option className="text-black" value="/AboutOurCenter">О нас</option>
                            <option className="text-black" value="/additionalServices">Дополнительные услуги</option>
                        </select>
                        <select onClick={(e) => {handleChange(e);setIdSelect(2)}} onChange={(e) => {handleChange(e); setIdSelect(2)}} value={ nav || "/ourTeam"} className={`${idSelect == 2? 'text-[#EA5D4A]' : ''}`}>
                            <option className="text-black" value="/ourTeam">Наша команда</option>
                            <option className="text-black" value="/aboutCenter">О центре</option>
                            <option className="text-black" value="/reviews">Отзывы</option>
                            <option className="text-black" value="/documents">Документы</option>
                        </select>
                        <select onClick={(e) => {handleChange(e);setIdSelect(3)}} onChange={(e) => {handleChange(e); setIdSelect(2)}} value={ nav || "/programm"} className={`${idSelect == 3? 'text-[#EA5D4A]' : ''} w-[19%]`}>
                            <option className="text-black" value="programm">Программа</option>
                            <option className="text-black" value="parents">Родителям</option>
                            <option className="text-black" value="nutrition">Питание</option>
                            <option className="text-black" value="news">Новости</option>
                            <option className="text-black" value="threeDTur">3D тур</option>
                            <option className="text-black" value="basicSchedule">Расписание основное</option>
                            <option className="text-black" value="dailyRoutine">Режим дня</option>
                            <option className="text-black" value="scheduleAdditionalServices">Расписание дополнительных услуг</option>
                        </select>
                        <NavLink onClick={() => setIdSelect(null)} to="/photoAndVideo" className={({ isActive }) => isActive ? 'text-[#EA5D4A]' : 'hover:underline'}>Фото и видео</NavLink>
                        {/* <p>Команда</p> */}
                        <NavLink onClick={() => setIdSelect(null)} to="/contacts" className={({ isActive }) => isActive ? 'text-[#EA5D4A]' : 'hover:underline'}>Контакты</NavLink>
                    </div>
                </div>
                <div className='flex items-center w-[40%] justify-between'>
                    <div className='flex flex-col items-end'>
                        <div className='flex items-center gap-3'>
                            <Phone className='text-white rounded-[50%] p-[3px] w-[30px] h-[30px] bg-[#EA5D4A]'/>
                            <b className='text-[20px]'>+7 495 123 34 25</b>
                        </div>
                        <p className='text-[#EA5D4A]'>Заказать обратный звонок</p>
                    </div>
                    <img src = {img1} />
                    <button className='bg-[#8081BD] text-white p-1 px-3 rounded-2xl'>Записаться на экскурсию</button>
                </div>
            </div>
        </div>
        {showHeader && (
            <div className='bg-[#60619DCC] text-white backdrop-blur-md shadow-lg'>
                <div className='flex justify-between w-[75%] m-auto py-5'>
                    <p>О центре</p>
                    <p>Документы</p>
                    <p>Родителям</p>
                    <p>Питание</p>
                    <p>Новости</p>
                    <p>3D тур</p>
                    <p>Отзывы</p>
                </div>
            </div>
        )}
      </header>
      <Outlet/>
      <footer className='text-[#334155] relative'>
        <div className='w-[85%] m-auto'>
            <img src = {img}/>
            <div className='flex items-start my-8 justify-between'>
                <div className='flex flex-col gap-5 items-start'>
                    <div className='w-fit'>
                        <div className='flex items-center gap-3'>
                            <Phone className='text-white rounded-[50%] p-[3px] w-[30px] h-[30px] bg-[#EA5D4A]'/>
                            <b className='text-[40px]'>+7 495 123 34 25</b>
                        </div>
                        <p className='ml-10'>dir@kidsstory.life</p>
                    </div>
                    <div className=''>
                        <p>Москва, ул. Муравская д.38, к.1</p>
                        <p>ЖК Мир Митино <span className='text-[#0E95D3]'>М. Пятницкое шоссе</span></p>
                    </div>
                    <img src = {img1}/>
                </div>
                <div className='flex justify-between w-[67%]'>
                    <div className='flex flex-col gap-5'>
                        <b>О нас</b>
                        <div>
                            <p>О центре</p>
                            <p>Документы</p>
                            <p>Родителям</p>
                            <p>Питание</p>
                            <p>Новости</p>
                            <p>3D тур</p>
                            <p>Отзывы</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <b>Расписание</b>
                        <div>
                            <p>Расписание основное</p>
                            <p>Дополнительные услуги</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <b>Программа</b>
                        <div>
                            <p>Группа (2-3 года)</p>
                            <p>Группа (3-5 лет)</p>
                            <p>Группа (5-7 лет)</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <b>Фото и видео</b>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <b>Команда</b>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <b>Контакты</b>
                    </div>
                </div>
            </div>
            <div className='flex justify-between pb-5'>
                <p>Copyrights: Kids Story 2021</p>
                <p>Дизайн <b>ZHURAVLEV</b></p>
            </div>
            <img src = {img2} className='absolute bottom-0 right-0 w-[12%]'/>
        </div>
      </footer>
    </div>
  )
}

export default Layout
