'use client'

import Image from "next/image"
import { useSession } from "next-auth/react"
import useSWR from "swr"
import { useState } from "react"

const fetchComments = async (url: string) => {
    const res = await fetch(url)
    const data = await res.json()

    if(!res.ok){
        const error = new Error(data.message)
        throw error
    }

    return data
}

interface CommentItems {
    _id: string | number | undefined;
    title: string;
    user: {
        name: string,
        image?: string,
    }
    createdAt: Date;
    desc: string
}
function Comments({postSlug}:{postSlug: string}) {
    
    const {status} = useSession()

    const {data, mutate, isLoading} = useSWR(`${process.env.NEXT_PUBLIC_SITE_URL}/api/comments?postSlug=${postSlug}`, fetchComments)

    const [desc, setDesc] = useState("")

    const handleSubmit = async () => {
        if(desc === ""){
            return
        }

        await fetch("/api/comments",{
            method: "POST",
            body: JSON.stringify({desc, postSlug})
        })
        setDesc("")
        mutate()
    }
    return (
        <div className="mt-12">
            <h1 className="text-2xl font-bold capitalize text-gray-500 dark:text-gray-400 mb-8">comments</h1>
            <div className="flex flex-col  items-center justify-between gap-3">
                <textarea
                    value={desc}
                    onChange={e => setDesc(e.target.value)} 
                    placeholder="write a comment..."
                    className="outline-none p-5 w-full resize-none rounded-lg border border-gray-300 dark:border-gray-800" 
                />
                <button
                    onClick={handleSubmit}
                    disabled={status === "unauthenticated" ? true : false} 
                    className="bg-blue-700 self-end hover:cursor-pointer hover:bg-blue-500 disabled:hover:cursor-not-allowed disabled:bg-blue-300 rounded-lg p-[8px_10px] md:p-[16px_20px] text-white font-bold border-none">
                    send
                </button>
            </div>
            {isLoading ? ("Loading...") : data?.map((item: CommentItems) =>(
                <div className="Comments mt-12" key={item._id}>
                    <div className="single-comment flex flex-col mb-12">
                        <div className="flex items-center justify-center gap-5 w-fit mb-2">
                            {item?.user?.image && 
                                <div className="relative w-12 h-12">
                                    <Image src={item.user.image } alt="" fill className="object-cover rounded-full" />
                                </div>
                            }
                            <div className="user-info flex items-center justify-center gap-0 md:gap-1 text-gray-500 dark:text-gray-400 mb-1">
                                <span className="text-sm md:text-xl font-bold capitalize">{item.user.name} - </span>
                                <span className="">{new Date(item.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
                            </div>
                        </div>
                        <div className="flex gap-1">
                            <div className="min-w-16"></div>
                            <p className="description text-sm md:text-base">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                </div>
            ))
            }
        </div>

    )
}

export default Comments
