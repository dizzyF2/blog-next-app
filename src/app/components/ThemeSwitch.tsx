'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const {setTheme, resolvedTheme} = useTheme()

    useEffect(()=> setMounted(true) ,[])

    if (!mounted) return (
        <Image
            src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
            width={36}
            height={36}
            sizes="36x36"
            alt="Loading Light/Dark Toggle"
            priority={false}
            title="Loading Light/Dark Toggle"
        />
    )

    return (
        <button className="flex items-center justify-between gap-2 rounded-2xl w-12 bg-gray-200 dark:bg-gray-600 border border-gray-400 hover:border-red-400 cursor-pointer">
            {
                resolvedTheme === 'dark' ? (<div className='flex flex-col w-full' onClick={()=> setTheme('light')}><Moon color="white" size={20} className="self-end bg-black rounded-full p-1"/></div>)   
                : (<div className='flex flex-col w-full' onClick={()=> setTheme('dark')}><Sun color="gray" size={20}  className="self-start bg-white rounded-full p-1"/></div>) 
            }
        </button>
    )
}

export default ThemeSwitch
