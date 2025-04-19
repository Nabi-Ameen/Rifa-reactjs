import React, { useState } from 'react'
import { AiFillHome } from "react-icons/ai";
import Basic from './Basic';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [show, setShow] = useState(false);
    const [tab, setTab] = useState("Basic");

    const { pathname } = useLocation();

    return (
        <div>
            <ul className='flex gap-4 bg-green-700 p-3 text-white'>
                <li><AiFillHome size={30} /></li>
                <li className='text-xl'>
                    <Link to="/" className={`${pathname === "/" ? "text-yellow-600" : ""}`} >
                        Home
                    </Link>
                </li>
                <li className='text-xl'>
                    <Link to="/plot" className={`${pathname === "/plot" ? "text-yellow-600" : ""}`}>
                        Plot
                    </Link>
                </li>
                <li className='text-xl'>
                    <Link to="/blog" className={`${pathname === "/blog" ? "text-yellow-600" : ""}`}>
                        Blog
                    </Link>
                </li>
                <li className='text-xl'>
                    <Link to="/contact" className={`${pathname === "/contact" ? "text-yellow-600" : ""}`}>
                        Contact Us
                    </Link>
                </li>

                <li className='text-xl'>
                    <Link to="/products" className={`${pathname === "/products" ? "text-yellow-600" : ""}`}>
                        Products
                    </Link>
                </li>
                <li className='text-xl' onClick={() => setShow(true)}>Open Model</li>
            </ul>
            {
                show ?
                    <div className='fixed inset-0 bg-black/40 flex items-center justify-center'>
                        <div className='w-4/12 bg-white h-80 rounded-lg p-5 relative'>
                            <div onClick={() => setShow(false)} className='bg-red-600 px-4 py-1 rounded-lg w-16 text-white absolute top-3 right-3'>Close</div>

                            <div>
                                <div className='flex items-center gap-4'>
                                    <div className={`p-3 ${tab === "Basic" ? "border-b border-black" : ""}`} onClick={() => setTab("Basic")}>Basic</div>
                                    <div className={`p-3 ${tab === "Standard" ? "border-b border-black" : ""}`} onClick={() => setTab("Standard")}>Standard</div>
                                    <div className={`p-3 ${tab === "Premium" ? "border-b border-black" : ""}`} onClick={() => setTab("Premium")}>Premium</div>
                                </div>
                                {
                                    tab === "Basic" &&
                                    <Basic />
                                }

                                {
                                    tab === "Standard" &&
                                    <div>
                                        An amazing multipage website with 10 pages
                                        6-day delivery
                                    </div>
                                }


                                {tab === "Premium" &&
                                    <div>
                                        Our platinum offer. 10 pages with a built in shop function.

                                        7-day delivery
                                    </div>
                                }

                            </div>
                        </div>
                    </div> : <></>
            }
        </div>
    )
}

export default Header