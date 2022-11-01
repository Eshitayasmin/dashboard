import React from 'react';
import { faCircleRadiation, faSquareCaretDown, faUsers, faEllipsis, faCircleInfo, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import eshu from "../../images/eshita's picture.jpg";
import loading from "../../images/loading.png";

const Home = () => {
    return (
        <div className='w-full h-full flex mt-2 ml-6'>
            <div className='first-part w-9/12'>
                <div className='first-section flex w-full'>
                    <div className='bg-white flex justify-between w-1/3 items-center p-3 rounded-md lg:mr-2'>

                        <div className='flex items-center'>
                            <p className='bg-blue-400 flex items-center justify-center text-white w-9 h-9 rounded-md '><FontAwesomeIcon className='w-5 h-5' icon={faCircleRadiation}></FontAwesomeIcon></p>
                            <div className='px-3'>
                                <p className='text-zinc-400'>Revenue</p>
                                <p className='font-bold'>$21,456</p>
                            </div>

                        </div>
                        <p className='bg-green-100 text-green-600 text-xs rounded-md'>+2.65%</p>

                    </div>

                    <div className='bg-white flex justify-between w-1/3 items-center p-3 rounded-md lg:mx-3'>

                        <div className='flex items-center'>
                            <p className='bg-blue-400 text-center text-white w-9 h-9 rounded-md flex items-center justify-center '><FontAwesomeIcon className='w-5 h-5' icon={faSquareCaretDown}></FontAwesomeIcon></p>
                            <div className='px-3'>
                                <p className='text-zinc-400'>Orders</p>
                                <p className='font-bold'>5,643</p>
                            </div>

                        </div>
                        <p className='bg-red-100 text-red-600 text-xs rounded-md'>-0.82%</p>

                    </div>

                    <div className='bg-white flex justify-between w-1/3 items-center p-3 rounded-md lg:ml-2'>

                        <div className='flex items-center'>
                            <p className='bg-blue-400 text-center text-white w-9 h-9 rounded-md flex items-center justify-center'><FontAwesomeIcon className='w-5 h-5' icon={faUsers}></FontAwesomeIcon></p>
                            <div className='px-3'>
                                <p className='text-zinc-400'>Customers</p>
                                <p className='font-bold'>45,254</p>
                            </div>

                        </div>
                        <p className='bg-red-100 text-red-600 text-xs rounded-md'>-1.04%</p>

                    </div>

                </div>


                <div className='bg-white mt-4 rounded-md p-3 w-full'>
                    <div className='flex justify-between'>
                        <p className='font-bold'>Overview</p>
                        <p className='flex items-center'><span className='font-bold pr-1'>Sort By:</span> Yearly <FontAwesomeIcon class=" h-3 w-3 pl-1" size="1x" icon={faAngleDown}></FontAwesomeIcon></p>
                    </div>
                    <div className='flex w-full'>
                        <div className='w-3/12'>
                            <div className='my-3'>
                                <p className='text-sm text-gray-500'>This Month</p>
                                <p><span className='text-2xl font-semibold'>$24,568 </span><span className='bg-green-100 text-green-600 text-xs rounded-md px-1'>+2.65%</span></p>
                            </div>
                            <div>
                                <div className='flex justify-evenly my-3'>
                                    <div>
                                        <p className='text-gray-500 text-sm'>Orders</p>
                                        <p className='font-bold text-lg'>5,643</p>
                                    </div>
                                    <div>
                                        <p className='text-gray-500 text-sm'>Sales</p>
                                        <p className='font-bold text-lg text-gray-700'>16,273</p>
                                    </div>
                                </div>
                                <div className='flex justify-evenly my-3'>
                                    <div>
                                        <p className='text-gray-500 text-sm'>Order Value</p>
                                        <p className='font-bold text-lg'>12.03%</p>
                                    </div>
                                    <div>
                                        <p className='text-gray-500 text-sm'>Customers</p>
                                        <p className='font-bold text-lg text-gray-700'>21,456</p>
                                    </div>
                                </div>
                                <div className='flex justify-evenly my-3'>
                                    <div>
                                        <p className='text-gray-500 text-sm'>Income</p>
                                        <p className='font-bold text-lg'>$35,652</p>
                                    </div>
                                    <div>
                                        <p className='text-gray-500 text-sm'>Expenses</p>
                                        <p className='font-bold text-lg text-gray-700'>$12,248</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-8/12 flex justify-self-end h-full'>
                            <img className='bar-chart ml-6' src="https://www.math-only-math.com/images/representation-bar-graph.png" alt="" />
                        </div>
                    </div>
                </div>


                <div className='w-full flex pt-4 pb-4'>
                    <div className='bg-white p-3 w-1/3 rounded-md'>
                        <div className='flex justify-between'>

                            <p className='font-bold'>User Activity</p>


                            <p className='flex items-center text-sm text-gray-500'> Weekly <FontAwesomeIcon class=" h-3 w-3 pl-1" size="1x" icon={faAngleDown}></FontAwesomeIcon></p>
                        </div>
                        <div className='my-3'>
                            <p className='text-sm text-gray-500'>This Month</p>
                            <p className='text-xl text-gray-700 font-semibold'>$16,543</p>
                        </div>
                        <div className='flex justify-end pb-6'>
                            <div className='flex items-center mr-2'>
                                <div className=' w-3 h-3 bg-blue-600 rounded-full mr-1'></div>
                                <p className='text-sm text-gray-500'> Current</p>
                            </div>

                            <div className='flex items-center'>
                                <div className=' w-3 h-3 bg-pink-500 rounded-full mr-1'></div>
                                <p className='text-sm text-gray-500'>Previous</p>
                            </div>
                        </div>

                        <div className='w-full mt-3'>
                            <img className='w-full ' src="https://goodly.co.in/wp-content/uploads/2014/10/Total-of-Line-Chart2.gif" alt="" srcset="" />
                        </div>
                    </div>

                    <div className='bg-white px-3 py-2 w-1/3 rounded-md mx-3'>
                        <div className='flex justify-between'>
                            <p className='font-bold'>Order Status</p>
                            <p> <FontAwesomeIcon class=" h-4 w-5 pl-1" size="1x" icon={faEllipsis}></FontAwesomeIcon></p>
                        </div>
                        <div className='flex justify-center my-6'>
                            <img className='w-48' src="https://d3-graph-gallery.com/img/block/block_pieChartAnim.png" alt="" />
                        </div>
                        <div className='flex justify-around'>
                            <p className='text-sm text-gray-500'>Completed</p>
                            <p className='text-sm text-gray-500'>Pending</p>
                            <p className='text-sm text-gray-500'>Cancel</p>
                        </div>
                    </div>

                    <div className='bg-white p-3 w-1/3 rounded-md'>
                        <div className='flex justify-between'>
                            <p className='font-bold'>Top Product</p>

                            <p className='flex items-center text-sm text-gray-500'>Monthly<FontAwesomeIcon class=" h-4 w-4 pl-1" size="1x" icon={faAngleDown}></FontAwesomeIcon></p>

                        </div>
                        <div className='flex justify-between items-center mr-4 py-3'>
                            <div className='flex items-center'>
                                <div className='bg-blue-500 w-8 h-7 px-2 py-1 rounded-xl text-center'>
                                    <p className=' text-white'>#1</p>
                                </div>

                                <div className='ml-3'>
                                    <p className='text-md text-gray-500'>Polo blue T-shirt</p>
                                    <p className='font-bold text-sm'>$ 25.4</p>

                                </div>
                            </div>
                            <div className='bg-gray-300 w-13 h-5 px-1 rounded-md text-center flex items-center justify-center'>
                                <p className='text-sm font-semibold'>3.82k</p>
                            </div>

                        </div>

                        <div className='flex justify-between items-center mr-4 py-3'>
                            <div className='flex items-center'>
                                <div className='bg-blue-500 w-8 h-7 px-2 py-1 rounded-xl text-center'>
                                    <p className=' text-white'>#2</p>
                                </div>

                                <div className='ml-3'>
                                    <p className='text-md text-gray-500'>Hoddie for men</p>
                                    <p className='font-bold text-sm'>$ 24.5</p>

                                </div>
                            </div>
                            <div className='bg-gray-300 w-13 h-5 px-1 rounded-md text-center flex items-center justify-center'>
                                <p className='text-sm font-semibold'>3.14k</p>
                            </div>

                        </div>

                        <div className='flex justify-between items-center mr-4 py-3'>
                   <div className='flex items-center'>
                    <div className='bg-blue-500 w-8 h-7 px-2 py-1 rounded-xl text-center'>
                    <p className=' text-white'>#3</p>  
                            </div>
                       
                        <div className='ml-3'>
                            <p className='text-md text-gray-500'>Red color cap</p>
                            <p className='font-bold text-sm'>$ 22.5</p>
                    
                       </div>
                    </div>
                    <div className='bg-gray-300 w-13 h-5 px-1 rounded-md text-center flex items-center justify-center'>
                    <p className='text-sm font-semibold'>2.84k</p>
                    </div>
                   
                   </div>
                   <div className='flex justify-between items-center mr-4 py-3'>
                   <div className='flex items-center'>
                    <div className='bg-blue-500 w-8 h-7 px-2 py-1 rounded-xl text-center'>
                    <p className=' text-white'>#4</p>  
                            </div>
                       
                        <div className='ml-3'>
                            <p className='text-sm text-gray-500'>Pocket T-shirt</p>
                            <p className='font-bold text-sm'>$ 17.4</p>
                    
                       </div>
                    </div>
                    <div className='bg-gray-300 w-13 h-5 px-1 rounded-md text-center flex items-center justify-center'>
                    <p className='text-sm font-semibold'>2.06k</p>
                    </div>
                   
                   </div>

                    </div>

                </div>

            </div>



            <div className='second-section w-3/12 bg-white mx-3 rounded-md'>
                <div className='h-full w-full relative rounded-md'>
                    <img className='h-24 w-full rounded-md' src="https://www.epfl.ch/research/domains/bluebrain/wp-content/uploads/2020/10/FAQ_thumbnail-384x216.jpg" alt="" />
                    <img className='w-20 h-20 border-4 border-x-white rounded-full absolute top-12 left-28' src={eshu} alt="" />
                    <span className='absolute top-4 right-4'><FontAwesomeIcon className='w-5 h-5 text-white' icon={faEllipsis}></FontAwesomeIcon></span>
                    <div className='text-center mt-8'>
                        <p className='text-lg font-bold text-gray-700'>Eshita Yasmin</p>
                        <p className='text-sm text-gray-500'>Web Developer</p>
                    </div>

                    <div className='flex justify-around my-6'>
                        <div>
                            <p className='font-bold text-center'>1,269</p>
                            <p className='text-zinc-500'>Products</p>
                        </div>
                        <div>
                            <p className='font-bold text-center'>5.2k</p>
                            <p className='text-zinc-500'>Followers</p>
                        </div>
                    </div>

                    <div className='border border-zinc-200 mx-3'></div>
                    <div>
                        <div className='relative flex justify-between mx-3 my-1'>
                            <p>Earning</p>
                            <span><FontAwesomeIcon className='w-4 h-4' icon={faCircleInfo}></FontAwesomeIcon></span>
                        </div>
                    </div>
                    <div className='flex justify-center relative'>
                        {/* <img className='w-32 h-32' src={loading} alt="" />
                        <span className='absolute top-12 right-30 font-bold text-lg'>76%</span> */}
                        <svg className="w-32 h-28 transform translate-x-1 translate-y-1" x-cloak aria-hidden="true">
                            <circle r="50" cx="55" cy="49" stroke="#d3d3d3" stroke-width="12" fill="none" stroke-dasharray="" stroke-dashoffset="0" pathlength="360" transform="rotate(135 55 55)" />
                            <circle r="50" cx="55" cy="49" stroke="blue" stroke-width="8" fill="none" stroke-dasharray="180 270" stroke-dashoffset="0" stroke-linecap="round" pathlength="360" transform="rotate(135 55 55)" id="knobinsidering" />
                            <g color="green">
                                <text x="60" y="60" text-anchor="middle" fill='blue' className='Rrrrr font-bold text-lg' alignment-baseline="middle" >76%</text></g>
                        </svg>
                    </div>
                    <div className='text-center mt-2'>
                        <p className='text-lg font-bold'>$26,256</p>
                        <p className='text-sm text-zinc-500'>Earning this month</p>
                        <p className='text-sm text-zinc-500 py-1'><span className='bg-green-100 text-green-600  rounded-md text-sm'>2.65%</span> from previous period</p>
                    </div>
                    <div className='border border-gray-200 mx-3 mt-3'></div>
                    <div className='px-3 py-4 bg-white rounded-lg'>
                        <p className='font-bold'>Recent Activity</p>
                        <div className='flex justify-between items-center my-4'>
                            <div className='bg-gray-100 px-3 py-1 rounded-md text-center'>
                                <p className='text-md font-bold'>12</p>
                                <p className='text-md font-bold'>Sep</p>
                            </div>
                            <p className='ml-4 text-sm text-gray-500'>Responded to need "Volunteer Activities"</p>
                        </div>
                        <div className='flex justify-between items-center my-4'>
                            <div className='bg-gray-100 px-3 py-1 rounded-md text-center'>
                                <p className='text-md font-bold'>11</p>
                                <p className='text-md font-bold'>Sep</p>
                            </div>
                            <div className='ml-4'>
                                <p className='text-sm text-gray-500'>Everyone realizes would be desirable...</p>
                                <p className='text-blue-400 text-sm cursor-pointer'>Read more</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center '>
                            <div className='bg-gray-100 px-3 py-1 rounded-md text-center'>
                                <p className='text-md font-bold'>10</p>
                                <p className='text-md font-bold'>Sep</p>
                            </div>
                            <p className='ml-4 text-sm text-gray-500'>Join the group "Boardsmanship Forum"</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;