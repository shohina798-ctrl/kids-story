import { NavLink, Outlet } from "react-router-dom";
import img from '/logo.png';
import { Award, Bell, BriefcaseBusiness, ChartNoAxesCombined, CircleFadingPlus, CircleUser, Files, Logs, Menu, MessagesSquare, Newspaper, SquarePlay, Star, Users } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Switch from "../switch/switch";
localStorage.setItem("navigation", JSON.parse(true));
const LayoutAdmin = () => {
    const { t , i18n} = useTranslation();
    const handleChangeLanguage = (e) => {
        const newLanguage = e.target.value;
        i18n.changeLanguage(newLanguage);
    }
    return (
    <div>
        <div className="flex items-start w-[80%] right-0 fixed top-0">
            <header className="flex items-center justify-between px-10 shadow-2xl w-full bg-white dark:bg-[#525c7e] dark:text-white">
                <Menu/>
                <div className="flex items-center gap-4">
                    <Bell/>
                    <select onChange={handleChangeLanguage} className='text-black dark:text-white'>
                        <option className="text-black" value="ru">Ru</option>
                        <option className="text-black" value="en">En</option>
                    </select>
                    <Switch/>
                    <CircleUser/>
                </div>
            </header>
        </div>
        <nav dark:border-gray-500 className="w-[20%] py-10 dark:bg-[#151f54] dark:text-[#e6e6e6] bg-[#FFF6D1] h-full text-[#334155] shadow-2xl fixed top-0">
            <div className="px-10">
                <img src = {img} />
                <p>{t("navigation.title")}</p>
            </div>
            <div className="py-15 px-5 text-[15px]">
                <NavLink to="personData" className={({ isActive }) => isActive ? 'text-[#3861f6] flex items-center gap-4 py-2 border-t-2 border-t-gray-700 dark:border-gray-500' : 'flex items-center gap-4 py-2 border-t-2 border-t-gray-700 dark:border-gray-500'}>
                    <Users className="ml-3 w-[30px] h-[30px]"/>
                    <b>{t("navigation.personData")}</b>
                </NavLink>
                <NavLink to="adventages" className={({ isActive }) => isActive ? 'text-[#3861f6] flex items-center gap-4 py-2 border-t-2 border-t-gray-700 dark:border-gray-500' : 'flex items-center gap-4 py-2 border-t-2 border-t-gray-700 dark:border-gray-500'}>
                    <Star className="ml-3 w-[30px] h-[30px]"/>
                    <b>{t("navigation.adventages")}</b>
                </NavLink>
                <NavLink to="workschedule" className={({ isActive }) => isActive ? 'text-[#3861f6] flex items-center gap-4 py-2 border-t-2 border-t-gray-700 dark:border-gray-500' : 'flex items-center gap-4 py-2 border-t-2 border-t-gray-700 dark:border-gray-500'}>
                    <BriefcaseBusiness className="ml-3 w-[30px] h-[30px]"/>
                    <b>{t("navigation.workschedule")}</b>
                </NavLink>
                <NavLink to="video" className={({ isActive }) => isActive ? 'text-[#3861f6] flex items-center gap-4 py-2 border-t-2 border-t-gray-700 dark:border-gray-500' : 'flex items-center gap-4 py-2 border-t-2 border-t-gray-700 dark:border-gray-500'}>
                    <SquarePlay className="ml-3 w-[30px] h-[30px]"/>
                    <b>{t("navigation.video")}</b>
                </NavLink>
                <NavLink to="reviews" className={({ isActive }) => isActive ? 'text-[#3861f6] flex items-center gap-4 py-2 border-t-2 border-t-gray-700 dark:border-gray-500' : 'flex items-center gap-4 py-2 border-t-2 border-t-gray-700 dark:border-gray-500'}>
                    <MessagesSquare className="ml-3 w-[30px] h-[30px]"/>
                    <b>{t("navigation.reviews")}</b>
                </NavLink>
                <NavLink to="kidCadrs" className={({ isActive }) => isActive ? 'text-[#3861f6] flex items-center gap-4 py-2 border-t-2 border-t-gray-700 dark:border-gray-500' : 'flex items-center gap-4 py-2 border-t-2 border-t-gray-700 dark:border-gray-500'}>
                    <CircleFadingPlus className="ml-3 w-[30px] h-[30px]"/>
                    <b>{t("navigation.kidCards")}</b>
                </NavLink>
                <NavLink to="centerKids" className={({ isActive }) => isActive ? 'text-[#3861f6] flex items-center gap-4 py-2 border-t-2 border-t-gray-700 dark:border-gray-500' : 'flex items-center gap-4 py-2 border-t-2 border-t-gray-700 dark:border-gray-500'}>
                    <ChartNoAxesCombined className="ml-3 w-[30px] h-[30px]"/>
                    <b>{t("navigation.centerKids")}</b>
                </NavLink>
                <NavLink to="sertificates" className={({ isActive }) => isActive ? 'text-[#3861f6] flex items-center gap-4 py-2 border-t-2 border-t-gray-700 dark:border-gray-500' : 'flex items-center gap-4 py-2 border-t-2 border-t-gray-700 dark:border-gray-500'}>
                    <Award className="ml-3 w-[30px] h-[30px]"/>
                    <b>{t("navigation.sertificates")}</b>
                </NavLink>
                <NavLink to="menu" className={({ isActive }) => isActive ? 'text-[#3861f6] flex items-center gap-4 py-2 border-t-2 border-t-gray-700 dark:border-gray-500' : 'flex items-center gap-4 py-2 border-t-2 border-t-gray-700 dark:border-gray-500'}>
                    <Logs className="ml-3 w-[30px] h-[30px]"/>
                    <b>{t("navigation.menu")}</b>
                </NavLink>
                <NavLink to="newsAdmin" className={({ isActive }) => isActive ? 'text-[#3861f6] flex items-center gap-4 py-2 border-t-2 border-t-gray-700 dark:border-gray-500' : 'flex items-center gap-4 py-2 border-t-2 border-t-gray-700 dark:border-gray-500'}>
                    <Newspaper className="ml-3 w-[30px] h-[30px]"/>
                    <b>{t("navigation.newsAdmin")}</b>
                </NavLink>
                <NavLink to="filesAdmin" className={({ isActive }) => isActive ? 'text-[#3861f6] flex items-center gap-4 py-2 border-t-2 border-t-gray-700 dark:border-gray-500' : 'flex items-center gap-4 py-2 border-t-2 border-t-gray-700 dark:border-gray-500'}>
                    <Files className="ml-3 w-[30px] h-[30px]"/>
                    <b>{t("navigation.filesAdmin")}</b>
                </NavLink>
            </div>
        </nav>
      <Outlet/>
    </div>
  );
};

export default LayoutAdmin;