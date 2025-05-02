'use client'
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";


function AuthStatus() {
    
    const {status} = useSession();
    
    return (
        <button className="p-[5px_12px]  rounded-full bg-transparent font-medium  text-black  dark:text-white w-max cursor-pointer border border-black dark:border-gray-400 hover:border-transparent dark:hover:border-transparent hover:bg-gray-200 hover:text-black hover:dark:bg-gray-600 hover:dark:text-white">
            {status === "unauthenticated" ? (
            <Link href="/Login">
                Sign in
            </Link>
            ) : (
                <span onClick={()=>signOut()}>
                SignOut
                </span>
            )}
        </button>
    )
}

export default AuthStatus