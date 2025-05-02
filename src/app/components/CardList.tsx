import React from 'react'
import Pagination from './Pagination'
import Card from './Card'


const getData = async (page: number, cat: string) =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/posts?page=${page}&cat=${cat || ""}`, {cache: "no-store"})

    if(!res.ok){
        throw new Error("Field")
    }

    return res.json()
}
interface Item{
    _id: number,
    title: string,
    desc: string,
    img: string,
    createdAt: string,
    catSlug: string,
    slug: string,
}

async function CardList({page, cat}: {page: number, cat: string}) {

    const {posts, count} = await getData(page, cat)

    const POST_PER_PAGE = 3
    const hasNext = POST_PER_PAGE * (page - 1) +  POST_PER_PAGE < count
    const hasPrev = POST_PER_PAGE * (page - 1) > 0

    return (
        <div className='flex-[5] flex flex-col'>
            <div>
                <h1 className='text-2xl md:text-3xl font-bold m-[50px_0px]'>
                    Recent Posts
                </h1>
                {posts.map((item: Item)=>(
                    <Card item={item} key={item._id}/>
                ))}
            </div>
            <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
        </div>
    )
}

export default CardList