'use client'

import Link from "next/link"
import ThemeSwitch from "./ThemeSwitch"
import AuthStatus from "./AuthStatus"
import { useSession } from "next-auth/react"


function DesktopHeader() {

    const {status} = useSession();
    return (
        <div className="DesktopHeader hidden sm:flex items-center justify-between px-5 py-2 border border-transparent border-b-black dark:border-b-gray-700">
            <h1 className="text-2xl font-bold">
                <Link href={"/"}><span className="text-[#0f0]">Dev</span>Blog</Link>
            </h1>
            <div className="capitalize flex gap-7 text-sm">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Content</Link>
            {status === "authenticated" && <Link href={"/write"}>write</Link>}
            <Link href={"/"}>About</Link>
            </div>
            <div className="flex justify-center items-center gap-5">
                <AuthStatus/>
                <ThemeSwitch/>
            </div>
        </div>
    )
}

export default DesktopHeader