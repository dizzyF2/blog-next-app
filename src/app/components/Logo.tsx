import Link from 'next/link'

function Logo({isTextBlack = false}: {isTextBlack?: boolean}) {
    return (
        <h1 className="text-2xl font-bold">
            <Link href={"/"} className={`${isTextBlack? "text-black" : ""}`}><span className="text-[#0f0]">Dev</span>Blog</Link>
        </h1>
    )
}

export default Logo