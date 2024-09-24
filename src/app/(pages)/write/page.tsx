'use client'

import { useState } from "react"
import { Plus, ImageIcon, Upload, SquarePlay } from "lucide-react"
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

function Write() {

    const [open, setOpen] = useState(false)

    const {status} = useSession();
    
    if(status === "loading"){
        return <div>Loading...</div>
    }
    
    if(status === "unauthenticated"){
        redirect("/")
    }

    return (
    <div>
        <input type="text" placeholder="Title" className="p-12 text-6xl border-none outline-none bg-transparent"/>
        <div className="editor-container relative flex gap-5 h-[700px]">
            <button className="border border-solid w-9 h-9 rounded-[50%] border-gray-700 dark:border-white bg-transparent text-gray-300 flex items-center justify-center">
            <Plus size={16}  className="text-gray-700 dark:text-white" onClick={()=>setOpen(!open)}/>
            </button>
            {open && (
                <div className="flex gap-5 absolute bg-gray-50 dark:bg-[#1b1b1f] w-full left-12 z-[999]">
                    <button className="border border-solid w-9 h-9 rounded-[50%] bg-transparent text-gray-300 flex items-center justify-center border-[#1a8917]">
                        <ImageIcon size={16} color="#1a8917"/>
                    </button>
                    <button className="border border-solid w-9 h-9 rounded-[50%] bg-transparent text-gray-300 flex items-center justify-center border-[#1a8917]">
                        <Upload size={16} color="#1a8917"/>
                    </button>
                    <button className="border border-solid w-9 h-9 rounded-[50%] bg-transparent text-gray-300 flex items-center justify-center border-[#1a8917]">
                        <SquarePlay size={16} color="#1a8917" />
                    </button>
                </div>
            )}
            <textarea placeholder="Tell Your Stroy..." className="bg-transparent w-full resize-none outline-none"/>
        </div>
            <button className="absolute top-[70px] right-[20px] p-[10px_20px] border-none bg-[#1a8917] hover:bg-[#2e922e] text-white rounded-3xl">Publish</button>
    </div>
    )
}

export default Write