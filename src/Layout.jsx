import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <Header />
            {/* <div className='flex'>
                <div className='w-3/12 p-10'>
                    <ul>
                        <li>item1</li>
                        <li>item1</li>
                        <li>item1</li>
                        <li>item1</li>
                        <li>item1</li>
                        <li>item1</li>
                        <li>item1</li>
                    </ul>
                </div>
                <div className='flex-1'>
                </div>
            </div> */}
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout