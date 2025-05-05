'use client'
import {LibraryBig, LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";


function AuthStatus() {
    
    const {data, status} = useSession();
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
        document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const toggleDropdown = () => setIsOpen(!isOpen)
    
    return (
        <div className="self-center p-[5px_12px] cursor-pointer rounded-full bg-transparent font-medium  text-black  dark:text-white w-max hover:text-black hover:dark:text-white">
            {status === "unauthenticated" ? (
                <div className="border rounded-full p-2 text-black \  dark:text-white dark:hover:text-black border-black dark:border-gray-400 hover:border-transparent dark:hover:border-transparent hover:bg-gray-200">
                    <Link href="/Login">
                        Sign in
                    </Link>
                </div>
            ) : (
                <div className="cursor-default" ref={dropdownRef}>
                    <div
                        onClick={toggleDropdown}
                        className="relative size-10 overflow-hidden border-2 border-gray-200 hover:border-gray-400 dark:border-gray-400 dark:hover:border-gray-700 rounded-full cursor-pointer bg-gray-200 hover:bg-gray-300 focus:outline-none"
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                    >
                        
                        <Image
                            src={data?.user?.image || "" }
                            alt="User profile"
                            fill={true}
                            className="absolute object-cover"
                            priority
                        />
                        {/* <span className="sr-only">Open profile menu</span> */}
                    </div>
                    {isOpen && (
                        <div className="absolute right-10 md:top-12 md:right-28 mt-2 w-56 bg-white rounded-md shadow-lg z-10">
                            <div className="p-4 border-b border-gray-200">
                                <p className="text-sm font-medium text-gray-900">{data?.user?.name}</p>
                                <p className="text-xs text-gray-500">{data?.user?.email}</p>
                            </div>
                            <nav className="py-2">
                                <Link href="/" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-300">
                                    <LibraryBig className="mr-3 h-5 w-5 text-gray-400" />
                                    <span>my Posts</span>
                                </Link>
                                <div onClick={()=>signOut()} className="flex items-center cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-red-100">
                                    <LogOut className="mr-3 h-5 w-5 text-red-600" />
                                    <span className="text-red-400">SignOut</span>
                                </div>
                            </nav>
                        </div>
                    )}
                </div>
                
            )}
        </div>
    )
}

export default AuthStatus