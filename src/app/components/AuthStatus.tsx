'use client'
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";


interface IProps{
    onclick?(): void
}
function AuthStatus({onclick}: IProps) {
    
    
    const {status} = useSession();
    
    const handleLogOut = ()=>{
        signOut()
        onclick
    }
    return (
        <>
            {
                status === "unauthenticated" ? (
                    <Link href={"/Login"}>Login</Link>
                ) : (
                    <Link href={"/"} onClick={handleLogOut}>Logout</Link>
                )
            }
        </>
    )
}

export default AuthStatus