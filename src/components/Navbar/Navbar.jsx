import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Navbar = () => {
    const { user, logout } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div>
            <header className='flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[80px] tracking-wide relative z-50'>
                <div className='flex flex-wrap items-center gap-5 w-full'>
                    <Link to='/'>
                        <h2 className="md:text-3xl text-xl font-bold">
                            <span className="text-orange-600">Flower </span>Shop
                        </h2>
                    </Link>

                    {/* Navbar Menu */}
                    <div className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} lg:ml-auto max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}>

                        <button
                            aria-label="Close menu"
                            onClick={handleToggleMenu}
                            className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
                                <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"></path>
                                <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"></path>
                            </svg>
                        </button>

                        <ul
                            className={`lg:flex gap-4 ${isMenuOpen ? 'block' : 'hidden'} max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50`}>
                            <NavLink to='/' className='hover:text-[#007bff] text-[#007bff] font-semibold block text-[15px]'>
                                <li className='max-lg:border-b max-lg:py-3 px-3'>
                                    Home
                                </li>
                            </NavLink>
                            <NavLink to='/shop' className='hover:text-[#007bff] text-[#333] font-semibold block text-[15px]'>
                                <li className='max-lg:border-b max-lg:py-3 px-3'>
                                    Shop
                                </li>
                            </NavLink>
                            <NavLink to='/blog' className='hover:text-[#007bff] text-[#333] font-semibold block text-[15px]'>
                                <li className='max-lg:border-b max-lg:py-3 px-3'>
                                    Blog
                                </li>
                            </NavLink>
                            <NavLink to='/about' className='hover:text-[#007bff] text-[#333] font-semibold block text-[15px]'>
                                <li className='max-lg:border-b max-lg:py-3 px-3'>
                                    About
                                </li>
                            </NavLink>
                        </ul>
                    </div>

                    {/* User & Cart */}
                    <div className='flex items-center max-lg:ml-auto space-x-3'>
                        <div className="flex items-center">
                            {/* User Menu */}
                            <div className="dropdown dropdown-end items-center">
                                {
                                    user ? (
                                        <div className="dropdown dropdown-end">
                                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                <div className="w-10 rounded-full">
                                                    <img src={user?.photoURL || ""} alt={user?.displayName || 'User avatar'} />
                                                </div>
                                            </label>
                                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                                <li>
                                                    <button className="btn btn-sm btn-ghost">{user?.displayName || 'User name not found'}</button>
                                                </li>
                                                <li>
                                                    <button
                                                        onClick={logout}
                                                        className="btn btn-sm btn-ghost">Logout</button>
                                                </li>
                                            </ul>
                                        </div>
                                    ) : (
                                        <Link to='/login'>
                                            <button className="btn btn-sm btn-ghost">Login</button>
                                        </Link>
                                    )
                                }
                                <button
                                    id="toggleOpen"
                                    aria-label="Open menu"
                                    onClick={handleToggleMenu}
                                    className='lg:hidden'>
                                    <svg className="w-7 h-7" fill="#333" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;