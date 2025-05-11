'use client'

import { signIn } from 'next-auth/react';
import Image from 'next/image';
import loginImage from "@/../public/login-image.jpg"
import Logo from '@/app/components/Logo';
import githubLogin from "@/../public/github.svg"
import googleLogin from "@/../public/google.svg"

function LoginForm() {
    return (
        <div className="flex h-screen w-full bg-white dark:bg-white">
            {/* Left side - Login content */}
            <div className="flex flex-col items-center justify-center w-full md:w-1/2 px-8 py-12">
                <div className="w-full max-w-md space-y-8">
                    <div className="flex justify-center">
                        <Logo isTextBlack={true}/>
                    </div>
                    {/* Heading */}
                    <h1 className="text-2xl font-medium text-center text-gray-800">Log In to Start Sharing</h1>
                    <div className="space-y-4 mt-8">
                        <button 
                            onClick={() => signIn('google')} 
                            className="w-full py-3 px-4 border border-gray-300 rounded-lg flex items-center justify-center gap-5 hover:bg-gray-100 transition-colors"
                        >
                            <span>
                                <Image src={googleLogin} alt='github icon' width={20} height={20}/>
                            </span>
                            <span className="text-gray-700">Continue with Google</span>
                        </button>
                        <button 
                            onClick={() => signIn('github')} 
                            className="w-full py-3 px-4 border border-gray-300 rounded-md flex items-center justify-center gap-5 hover:bg-gray-100 transition-colors"
                        >
                            <span>
                                <Image src={githubLogin} alt='github icon' width={20} height={20}/>
                            </span>
                            <span className="text-gray-700">Continue with Github</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* Right side - Image */}
            <div className="hidden md:block w-1/2 relative">
                <Image
                    src={loginImage}
                    alt="Office workspace"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </div>
    )
}

export default LoginForm