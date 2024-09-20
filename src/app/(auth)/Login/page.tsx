'use client'

import { signIn, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation';

function Login() {

    const {status} = useSession();
    
    if(status === "loading"){
        return <div>Loading...</div>
    }
    
    if(status === "authenticated"){
        redirect("/")
    }
    return (
        <div>
            <div className='flex flex-col items-center justify-center gap-5 h-[300px] p-5 bg-gray-300 rounded-2xl'>
                <button className='p-2 rounded-lg text=white bg-red-500' onClick={()=> signIn("google")}>Sign in with Google</button>
                <button className='p-2 rounded-lg text=white bg-[#1d1d1d]' onClick={()=> signIn("github")}>Sign in with Github</button>
                <button className='p-2 rounded-lg text=white bg-blue-700'>Sign in with Facebook</button>
            </div>
        </div>
    )
}

export default Login