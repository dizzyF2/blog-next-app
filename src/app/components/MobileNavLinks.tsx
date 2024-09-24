'use client'

import Link from "next/link";

import AuthStatus from "./AuthStatus";
import { useSession } from "next-auth/react";

interface Iprops{
    onclick(): void;
}
function MobileNavLinks({onclick}:Iprops) {

    const status = useSession()

    return (
        <div className="capitalize flex flex-col items- justify-start mt-10 gap-4 text-sm ">
            <Link href={"/"} onClick={onclick} className="pb-2 border-b-2 border-solid dark:border-b-[#2c2c2c]">Home</Link>
            <Link href={"/"} onClick={onclick} className="pb-2 border-b-2 border-solid dark:border-b-[#2c2c2c]">Content</Link>
            <Link href={"/Write"} onClick={onclick} className={`${status.status === "unauthenticated"? "hidden" : "block"} pb-2 border-b-2 border-solid dark:border-b-[#2c2c2c]`}>Write</Link>
            <Link href={"/"} onClick={onclick} className="pb-2 border-b-2 border-solid dark:border-b-[#2c2c2c]">About</Link>
            <AuthStatus onclick={onclick}/>
        </div>
    )
}

export default MobileNavLinks