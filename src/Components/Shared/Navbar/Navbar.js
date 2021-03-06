import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='todo'>Task To Do</Link></li>
                        <li><Link to='completed'>Completed Task</Link></li>
                        <li><Link to='calender'>Calender</Link></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Task Manager</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li className='mr-2'><Link to='todo' className='btn btn-outline btn-primary'>Task To Do</Link></li>
                    <li className='mr-2'><Link to='completed' className='btn btn-outline btn-primary'>Completed Task</Link></li>
                    <li className='mr-2'><Link to='calender' className='btn btn-outline btn-primary'>Calender</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;