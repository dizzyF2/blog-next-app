import Link from "next/link";



function AuthStatus() {
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