'use client'


import { signIn, useSession } from 'next-auth/react';
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
        <div className="flex flex-col items-center justify-center  gap-4 mt-10">
            <button
                onClick={() => signIn('github')}
                className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
            >
                Sign in with GitHub
            </button>
            <button
                onClick={() => signIn('google')}
                className="bg-white text-black border border-gray-300 px-6 py-2 rounded hover:bg-gray-100 transition"
            >
                Sign in with <span className='text-red-700'>Google</span>
            </button>
        </div>
    )
}

export default Login

/*
<div>
            <div className='flex flex-col items-center justify-center gap-5 h-[300px] p-5 bg-gray-300 rounded-2xl'>
                <button className='p-2 rounded-lg text=white bg-red-500' onClick={()=> signIn("google")}>Sign in with Google</button>
                <button className='p-2 rounded-lg text=white bg-[#1d1d1d]' onClick={()=>signIn('github')}>Sign in with Github</button>
            </div>
        </div>
*/