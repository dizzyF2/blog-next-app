'use client'

import Link from "next/link";

import AuthStatus from "./AuthStatus";
import { useSession } from "next-auth/react";


function MobileNavLinks() {

    const {status} = useSession()

    return (
        <div className="capitalize flex flex-col items- justify-start mt-10 gap-4 text-sm ">
            <Link href={"/"}  className="pb-2 border-b-2 border-solid dark:border-b-[#2c2c2c]">Home</Link>
            <Link href={"/"}  className="pb-2 border-b-2 border-solid dark:border-b-[#2c2c2c]">Content</Link>
            {status === "authenticated" && <Link href={"/write"}  className={`pb-2 border-b-2 border-solid dark:border-b-[#2c2c2c]`}>Write</Link>}
            <Link href={"/"}  className="pb-2 border-b-2 border-solid dark:border-b-[#2c2c2c]">About</Link>
            <AuthStatus/>
        </div>
    )
}

export default MobileNavLinks