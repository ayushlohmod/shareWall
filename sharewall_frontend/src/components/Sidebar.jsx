import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { RiHomeFill } from 'react-icons/ri'
import { IoIosArrowForwars } from 'react-icons/io'

import logo from '../Assets/wallpaper.png';

const isNotActiveStyle = "flex items-center px5 gap-3 text-gray-500 hover:text-black transition-all durarion-200 ease-in-out capitalize "
const isActiveStyle = "flex items-center px5 gap-3 font-extrabold border-r-2 border-black transition-all durarion-200 ease-in-out capitalize "
const categories = [
    {name: "Animals"},
    {name: "wallpapers"},
    {name: "photos"},
    {name: "gaming"},
    {name: "coding"},
    {name: "other"},

]


const Sidebar = ({user, closeToggel}) => {
    const handelCloseSidebar = () =>{
        if(closeToggel !== undefined){
            closeToggel(false)
        }
    }

  return (
    <div className='flex flex-col justify-between bg-white h-full overflow-y-scrikk min-w-210 hide-scrollbar 'onClick={handelCloseSidebar}>
        <div className='flex flex-col'>
            <Link to="/" className='flex px-5 gap-2 my-6 pt-1 w-190 items-center'>
                <img src={logo} alt="logo" className='w-full'/>

             </Link>
            <div className='flex flex-col gap-6'>
                <NavLink
                to="/"
                className={({isActive})=> isActive ? isActiveStyle : isNotActiveStyle}
                onClick={handelCloseSidebar}
                >
                 <RiHomeFill />
                 Home
                </NavLink>
                <h3 className='mt-2 px-5 text-base 2xl:text-xl'> Discover categories </h3>
                {categories.slice(0, categories.length-1).map((categories) =>(
                    <NavLink to={`/category/${categories.name}`}
                    className={({isActive})=> isActive ? isActiveStyle : isNotActiveStyle}
                    onClick={handelCloseSidebar}
                    key={categories.name}
                    >
                    {categories.name}
                    </NavLink>
                 ))}


             </div>
        </div>
        {user && (
            <Link to={`user-profile/${user._id}`}
            className="flex my-5 mb-3 gap-2 p-2 items-center"
            >
                <img src={user.image} className="w-10 h-10 rounded-full" alt='user-profile'/>
                <p>{user.userName}</p>
            </Link>
        )}
    </div>
  )
}

export default Sidebar