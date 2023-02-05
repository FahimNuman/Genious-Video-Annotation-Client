import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assests/images/banner/Genious Ai.png';
import './Header.css'
import './daskmood.css'

const Header = () => {

    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
        );
        const toggleTheme = () => {
        if (theme === 'light') {
        setTheme('dark');
    } else {
        setTheme('light');
        }
    };
        useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
    }, [theme]);

    const menuItems = <>
        <li className='font-semibold text-gray-700'><Link to='/'>Home</Link></li>
        <li className='font-semibold text-gray-700'><Link to='/platform'>platform</Link></li>
        <li className='font-semibold text-gray-700'><Link to='/service'>Service</Link></li>
        <li tabIndex={0}>
        <a className='font-semibold text-gray-700'>
          Resourse
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d=""/></svg>
        </a>
        <ul className="p-2 bg-base-100 text-gray-700">
          <li><a>Visit Github</a></li>
          <li><a>Docs</a></li>
        </ul>
      </li>
        <li tabIndex={0}>
        <a className='font-semibold text-gray-700'>
          Resourse
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d=""/></svg>
        </a>
        <ul className="p-2 bg-base-100 text-gray-700">
          <li><a>Blog</a></li>
          <li><a>FAQ</a></li>
        </ul>
      </li>
      <li tabIndex={0}>
                            
                            <ul className="p-2 bg-base-100">
                                <li><div className={`App ${theme}`}>
                        
                        </div></li>
                      
                            </ul>
                        </li>
                        
                        
        <li className='font-semibold text-gray-700'><Link to='/login'>Login</Link></li>
    </>

    return (
        <div className="sticky top-0 z-50 navbar h-15  pt-5 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-info btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 "  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className=" normal-case text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

           

    
            <div className="navbar-end">
            <button className="btn btn-secondary btn-sm"><label for="Toggle4" className="inline-flex items-center p-1 cursor-pointer dark:bg-gray-300 dark:text-gray-800">
	<input id="Toggle4" type="checkbox" onClick={toggleTheme} className="hidden peer" />
	<span className="px-4 py-2 dark:bg-gray-600 peer-checked:dark:bg-gray-300">Dark</span>|
	<span className="px-4 py-2 dark:bg-gray-300 peer-checked:dark:bg-violet-400">Light</span>
</label></button>
            </div>
        </div>
    );
};

export default Header;