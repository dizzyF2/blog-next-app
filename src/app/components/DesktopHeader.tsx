'use client'

import Link from "next/link"
import ThemeSwitch from "./ThemeSwitch"
import AuthStatus from "./AuthStatus"
import { useSession } from "next-auth/react"


function DesktopHeader() {

    const status = useSession();
    return (
        <div className="DesktopHeader hidden sm:flex items-center justify-between p-5">
            <h1 className="text-2xl font-bold">
                <Link href={"/"}><span className="text-[#0f0]">Dev</span>Blog</Link>
            </h1>
            <div className="capitalize flex gap-7 text-sm">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Content</Link>
            <Link href={"/write"} className={`${status.status === "unauthenticated"? "hidden" : "block"}`}>write</Link>
            <Link href={"/"}>About</Link>
            </div>
            <div className="flex gap-2">
                <ThemeSwitch/>
                <div className="cursor-pointer">
                    <AuthStatus/>
                </div>
            </div>
        </div>
    )
}

export default DesktopHeader