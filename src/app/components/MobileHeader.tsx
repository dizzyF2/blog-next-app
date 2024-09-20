'use client'

import Link from 'next/link'
import ThemeSwitch from './ThemeSwitch'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import MobileNavLinks from './MobileNavLinks'

function MobileHeader() {
    const [open, setOpen] = useState(false);
    return (
        <div className='flex items-center justify-between sm:hidden p-5'>
            <h1 className="text-2xl font-bold">
                <Link href={"/"}>Blog</Link>
            </h1>
            <div className='flex gap-2 items-center '>
                <ThemeSwitch/>
                <Menu size={20} className='text-black dark:text-white cursor-pointer' onClick={()=>{setOpen(!open)}}/>
            </div>
            <div className={
                open 
                ? 'fixed right-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] dark:bg-[#161618] p-10 ease-in duration-500' 
                : 'fixed right-[-100%] sm:hidden top-0 p-10 h-screen ease-in duration-500' 
                }>
                <div className='flex w-full items-center justify-start'>
                    <div className='p-1 w-fit cursor-pointer' onClick={()=>{setOpen(!open)}}><X size={25}/></div>
                </div>
                <MobileNavLinks onclick={()=>{setOpen(false)}}/>
            </div>
        </div>
    )
}

export default MobileHeader