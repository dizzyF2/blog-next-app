"use client"

import { useRouter } from "next/navigation"


interface IProps{
    page: number,
    hasPrev: boolean,
    hasNext: boolean,
}

function Pagination({page, hasNext, hasPrev}:IProps) {

    const router = useRouter()
    return (
        <div className="flex justify-between">
            <button className="w-14 md:w-24 border-none md:p-4 rounded-md text-xs md:text-base  bg-[crimson] text-white cursor-pointer disabled:bg-[#dc143cb7] disabled:dark:bg-[#c53350b7] disabled:cursor-not-allowed"
            disabled={!hasPrev}
            onClick={()=> router.push(`?page=${page - 1}`)}
            >
                Previous
            </button>
            <button className="w-14 md:w-24 border-none p-2 md:p-4 rounded-md text-xs md:text-base  bg-[crimson] text-white cursor-pointer disabled:bg-[#dc143cb7] disabled:dark:bg-[#c53350b7] disabled:cursor-not-allowed"
            disabled={!hasNext}
            onClick={()=> router.push(`?page=${page + 1}`)}
            >
                Next
            </button>
        </div>
    )
}

export default Pagination