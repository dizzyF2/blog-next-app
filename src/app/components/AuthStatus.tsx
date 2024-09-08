import Link from "next/link";



function AuthStatus() {
    
    //temp
    const status: string = "notLoggedIn";
    return (
        <>
            {
                status === "notLoggedIn" ? (
                    <Link href={"/"}>Login</Link>
                ) : (
                    <Link href={"/"}>logout</Link>
                )
            }
        </>
    )
}

export default AuthStatus