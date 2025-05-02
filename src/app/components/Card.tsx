import Image from "next/image"
import Link from "next/link"


interface Item{
    title: string,
    desc: string,
    img: string,
    createdAt: string,
    catSlug: string,
    slug: string,
}

function Card({key, item}:{key: number, item: Item}) {
    return (
        <div key={key} className="flex items-center gap-[50px] mb-[50px]">
            {item.img && 
                <div className="flex-1 relative h-[350px]">
                <Image 
                    src={item.img} 
                    alt={"Post Image"}
                    fill 
                    className="object-contain" // Change from object-cover to object-contain
                />
            </div>
            }
            <div className="textContainer flex flex-col gap-[30px] flex-1">
                <div className="details flex items-end justify-center gap-2 w-fit">
                    <span className="text-[gray]">{item.createdAt.substring(0, 10)}</span>
                    <span className=" text-black dark:text-[lightgray] font-extrabold"> - </span>
                    <span className="text-[crimson] font-semibold capitalize">{item.catSlug}</span>
                </div>
                <Link className="max-w-20" href={`/posts/${item.slug}`}>
                    <h1 className="font-bold text-2xl">
                        {item.title}
                    </h1>
                </Link>
                <p className="text-[13px] font-light text-gray-600 dark:text-gray-400">
                    {item.desc.substring(0, 50)}
                </p>
                <Link href={`/posts/${item.slug}`} className="border-b border-solid border-[crimson] w-max p-[2px_0px] ">Read More</Link>
            </div>
        </div>
    )
}

export default Card