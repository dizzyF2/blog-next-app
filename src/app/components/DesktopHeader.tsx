import Link from "next/link"
import ThemeSwitch from "./ThemeSwitch"
import AuthStatus from "./AuthStatus"


function DesktopHeader() {
    return (
        <div className="DesktopHeader hidden sm:flex items-center justify-between p-5">
            <h1 className="text-2xl font-bold">
                <Link href={"/"}>Blog</Link>
            </h1>
            <div className="flex gap-7 text-sm">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Content</Link>
            <Link href={"/"}>write</Link>
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