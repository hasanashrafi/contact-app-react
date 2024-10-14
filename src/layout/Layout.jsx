
import React from 'react'
import Header from '../components/Header'

import { GrContact, GrContactInfo } from 'react-icons/gr'
import { LuContact } from 'react-icons/lu'

function Layout({ children }) {
    return (
        <div className='font-Dana'>
            <header className= ' border-b-blue-600  border-b-2 font-Dana text-blue-600 p-5  flex justify-between items-center '>             
                <Header />
                <LuContact className='text-3xl text-blue-600'/>
                <p className='font-DanaDemiBold text-xl'>برنامه مخاطبین</p>
            </header>

            <div>
                {children}
            </div>

            <footer className='mt-10 p-2 text-center text-blue-600'>
                <p>Developed By HsN</p>
            </footer>
        </div>
    )
}

export default Layout