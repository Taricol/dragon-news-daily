import React, { use } from 'react';
import {  NavLink } from 'react-router';
import userIcon from "../assets/user.png"
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const {user,logOut}=use(AuthContext);
    const handleLogout=()=>{
        console.log("user trying to Logout");
        logOut().then(() => {
  alert("You Logged Out successfully");
}).catch((error) => {
  console.log(error);
});
    }
    return (
        <div className='flex justify-between items-center'>
            <div>{user && user.email}</div>
            <div className='nav flex gap-5 text-accent'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='login-btn flex gap-5'>
                <img src={userIcon} alt="" />
                {
                    user ? (<button onClick={handleLogout} className='btn btn-primary px-10'>Log Out</button>) : (<Link to="/auth/login" className='btn btn-primary px-10'>Login</Link>)
                }
                
            </div>
        </div>
    );
};

export default Navbar;