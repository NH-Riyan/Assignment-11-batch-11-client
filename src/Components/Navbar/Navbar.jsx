import React from 'react';
import {  Link, NavLink } from 'react-router';


const Navbar = () => {
  const link = <>
    <NavLink>Home</NavLink>
    <NavLink>Add Courses</NavLink>
    <NavLink>Courses</NavLink>
    <NavLink>My Courses</NavLink>
  </>
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content gap-5 bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl italic">Course Era</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5">
          {link}
        </ul>
      </div>
      <div className='flex gap-4 navbar-end'>
      <Link to='/auth/login' className='btn btn-primary px-7'>Login</Link>
      <Link to='/auth/register' className='btn btn-primary px-7'>SignUp</Link>
    </div>
      </div >
    );
};

export default Navbar;