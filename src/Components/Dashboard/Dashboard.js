import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faGrip, faDumpster, faReceipt, faWifi, fa8, faOutdent, faPenToSquare, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import "./Dashboard.css";
import { faCalendarDays, faFile, faCommentDots, faEnvelope, faRectangleList, faUser, faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import Navbar from './Navbar';
import { useState } from 'react';

const Dashboard = () => {
  const [icon, setIcon] = useState(faAngleDown);
  const openToggle = () =>{
   const toggleDiv= document.getElementById('open');
   const toggleDash= document.getElementById('toggledash');
   if (toggleDiv.style.display === "none") {
    toggleDiv.style.display = "block";
    toggleDash.style.color="white";
    setIcon(faAngleUp)
  } else {
    toggleDiv.style.display = "none";
    setIcon(faAngleDown);
    toggleDash.style.color="gray";
  }
   return toggleDiv;
  }

  return (
    <div class="drawer drawer-mobile bg-gray-50">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content w-full h-full flex flex-col items-center bg-base-200 overflow-x-hidden">
        {/* <!-- Page content here --> */}
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <div className="menu p-4 overflow-y-auto w-70  text-gray-500 side-bar bg-gray-900">
          {/* <!-- Sidebar content here --> */}
          <p>Menu</p>
          <div onClick={openToggle} id="toggledash" className=' flex items-center text-gray-500 hover:text-white'>
            <FontAwesomeIcon class="h-4 w-4 " size="1x" icon={faGrip}></FontAwesomeIcon>
            <p className='p-2'>Dashboard</p>
            <span><FontAwesomeIcon class=" h-4 w-4 " size="1x" icon={icon}></FontAwesomeIcon></span>
          </div>
     
            <ul id="open" className='my-1 lg:ml-6 hidden'>
              <li>Ecommerce</li>
              <li>Sass</li>
              <li>Crypto</li>
            </ul>
    

          {/* <div id="myDropdown" class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div> */}
          <p className='pt-2'>Applications</p>
          <ul className='leading-3 '>
            <li><a href="#"> <FontAwesomeIcon class=" h-4 w-4 " size="1x" icon={faCalendarDays}></FontAwesomeIcon>Calender</a></li>
            <li ><div className='flex justify-between items-center'>
              <a className='flex items-center' href="#"><FontAwesomeIcon class=" h-4 w-4 mr-2" size="1x" icon={faCommentDots}></FontAwesomeIcon>Chat</a> <span className='text-red-700'>Hot</span></div></li>
            <li><a href="#"><FontAwesomeIcon class=" h-4 w-4" size="1x" icon={faFile}></FontAwesomeIcon>File Manager</a></li>
            <li>
              <div className='flex justify-between items-center'><Link className='flex items-center' path="#"><FontAwesomeIcon class=" h-4 w-4 mr-2" size="1x" icon={faDumpster}></FontAwesomeIcon>Ecommerce</Link><span><FontAwesomeIcon class=" h-4 w-4" size="1x" icon={faAngleDown}></FontAwesomeIcon></span></div>
            </li>
            <li>
              <div className='flex justify-between items-center'>
                <Link className='flex items-center' path="#"><FontAwesomeIcon class=" h-4 w-4 mr-2" size="1x" icon={faEnvelope}></FontAwesomeIcon>Email</Link>
                <span><FontAwesomeIcon class=" h-4 w-4" size="1x" icon={faAngleDown}></FontAwesomeIcon>
                </span>
              </div>
            </li>
            <li><div className='flex justify-between items-center'>
              <Link className='flex items-center' path="#"><FontAwesomeIcon class=" h-4 w-4 mr-2" size="1x" icon={faReceipt}></FontAwesomeIcon>Invoices</Link>
              <span><FontAwesomeIcon class=" h-4 w-4" size="1x" icon={faAngleDown}></FontAwesomeIcon>
              </span>
            </div></li>
            <li><div className='flex justify-between items-center'>
              <Link className='flex items-center' path="#"><FontAwesomeIcon class=" h-4 w-4 mr-2" size="1x" icon={faRectangleList}></FontAwesomeIcon>Projects</Link>
              <span><FontAwesomeIcon class=" h-4 w-4" size="1x" icon={faAngleDown}></FontAwesomeIcon>
              </span>
            </div></li>
            <li><div className='flex justify-between items-center'>
              <Link className='flex items-center' path="#"><FontAwesomeIcon class=" h-4 w-4 mr-2" size="1x" icon={faWifi}></FontAwesomeIcon>Contacts</Link>
              <span><FontAwesomeIcon class=" h-4 w-4" size="1x" icon={faAngleDown}></FontAwesomeIcon>
              </span>
            </div></li>
          </ul>
          <p className='py-2'>Layouts</p>
          <p className='py-2'>Pages</p>
          <ul className='leading-3 '>
            <li><div className='flex justify-between items-center'>
              <Link className='flex items-center' path="#"><FontAwesomeIcon class=" h-4 w-4 mr-2" size="1x" icon={faUser}></FontAwesomeIcon>Authentication</Link>
              <span className='bg-cyan-400 text-white rounded-full px-1'><FontAwesomeIcon class=" h-3 w-3" size="1x" icon={fa8}></FontAwesomeIcon>
              </span>
            </div></li>
            <li>
              <div className='flex justify-between items-center'>
                <Link className='flex items-center' path="#"><FontAwesomeIcon class=" h-4 w-4 mr-2" size="1x" icon={faCircleCheck}></FontAwesomeIcon>Utility</Link>
                <span><FontAwesomeIcon class=" h-4 w-4" size="1x" icon={faAngleDown}></FontAwesomeIcon>
                </span>
              </div>
            </li>
          </ul>
          <p className='py-2'>Components</p>
          <ul className='leading-3 '>
            <li>
              <div className='flex justify-between items-center'>
                <Link className='flex items-center' path="#"><FontAwesomeIcon class=" h-4 w-4 mr-2" size="1x" icon={faOutdent}></FontAwesomeIcon>UI Elements</Link>
                <span><FontAwesomeIcon class=" h-4 w-4" size="1x" icon={faAngleDown}></FontAwesomeIcon>
                </span>
              </div>
            </li>
            <li>
              <div className='flex justify-between items-center'>
                <Link className='flex items-center' path="#"><FontAwesomeIcon class=" h-4 w-4 mr-2" size="1x" icon={faPenToSquare}></FontAwesomeIcon>Forms</Link>
                <span><FontAwesomeIcon class=" h-4 w-4" size="1x" icon={faAngleDown}></FontAwesomeIcon>
                </span>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;