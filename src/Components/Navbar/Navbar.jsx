import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import Authcontext from '../../Provider/AuthContext';


const Navbar = () => {


  const { user, LogOut, loading } = useContext(Authcontext);

  const handleLogout = () => {
    LogOut()
      .then(() => {
        alert('you logged out')
      }).catch((error) => {
        console.log(error.message)
      });
  }

  const link = <>
    <NavLink>Home</NavLink>
    <NavLink to={"/courses"}>Courses</NavLink>
    <NavLink to={"/addcourse"}>Add Courses</NavLink>
    <NavLink to={"/mycourses"}>My Courses</NavLink>
    <NavLink to={"/enrolledcourses"}>My Enrolled Courses</NavLink>

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
        <p className=" text-3xl italic">Course <span className='text-green-600'>Era</span> </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5">
          {link}
        </ul>
      </div>
      <div className='flex gap-4 navbar-end'>
        {
          loading ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : user ? (
            <div className='flex gap-4'>
              <img className='rounded-full w-10 h-10 border-2' title={user.displayName} src={user.photoURL} alt="" />
              <Link onClick={handleLogout} className='btn btn-primary px-7'>LogOut</Link>
            </div>
          ) : (
            <div className='flex gap-4'>
              <Link to='/auth/login' className='btn btn-primary px-7'>Login</Link>
              <Link to='/auth/register' className='btn btn-primary px-7'>SignUp</Link>
            </div>
          )
        }

      </div>
    </div >
  );
};

export default Navbar;