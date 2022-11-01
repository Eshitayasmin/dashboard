import {faMagnifyingGlass,faGear, faGrip } from '@fortawesome/free-solid-svg-icons';
import {faBell} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import eshu from "../../images/eshita's picture.jpg";
import React from 'react';

const Navbar = () => {
    const menuItems=<>
      <li><a><FontAwesomeIcon class="h-4 w-4 " size="1x" icon={faMagnifyingGlass}></FontAwesomeIcon></a></li>
            <li><a > <img className='w-8 h-5 rounded-sm' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/1200px-Flag_of_Bangladesh.svg.png" alt="" /></a></li>
            <li><a><FontAwesomeIcon class="h-4 w-4 " size="1x" icon={faGrip}></FontAwesomeIcon></a></li>
            <li><div className='relative'>
            <a href="#"><FontAwesomeIcon class="h-4 w-4 " size="1x" icon={faBell}></FontAwesomeIcon></a>
            <span className='absolute top-2 right-1 bg-red-400 rounded-full h-4 w-4 text-center text-white text-xs'>4</span>
            </div></li>
            
            <li><a href="#"><FontAwesomeIcon class="h-4 w-4 " size="1x" icon={faGear}></FontAwesomeIcon></a></li>
            <li><a href="#"><img className='w-6 h-6 rounded-full' src={eshu} alt="" /></a></li>
    </>
    return (
        <div class="navbar bg-gray-100">
        <div class="navbar-start">
          {/* <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
            </ul>
          </div> */}
          <a class="btn btn-ghost normal-case text-xl">Dashboard</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
         {menuItems}
          </ul>
        </div>
      
      </div>
    
    );
};

export default Navbar;