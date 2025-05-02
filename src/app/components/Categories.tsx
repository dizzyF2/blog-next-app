import Image from "next/image"
import Link from "next/link"

interface IProps{
    className: string,
    withImage: boolean,
}

interface Item {
    // _id: string | number | undefined;
    _id: number,
    img: string; 
    title: string;
    slug: string,
}

const categoryColors: { [key: string]: string } = {
    travel: 'bg-[#ff7857]',  
    food: 'bg-[#ff6347b6]',        
    style: 'bg-[#9370d8c0]',    
    fashion: 'bg-[#ff69b4b7]',    
    coding: 'bg-[#1e8fffb9]',     
    culture: 'bg-[#229722b9]',  
};


const getData = async () =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/categories`, {cache: "no-store"})
    if(!res.ok){
        throw new Error("failed")
    }

    return res.json()
}

async function Categories({className, withImage}:IProps) {

    const data = await getData()
    return (
        <div className="flex flex-wrap justify-between gap-5 my-5 bg">
            {data.map((item: Item)=>(
                    <Link key={item._id} href={`/blog?cat=${item.title}`} className={`${categoryColors[item.title] || 'bg-gray-500'} group capitalize text-gray-900 hover:text-white ${className}`}>
                        {withImage && (
                            <Image src={item.img} alt={item.title} width={32} height={32} className=" object-cover rounded-[50%] group-hover:border group-hover:border-slate-400" />
                        )}
                            {item.title}
                    </Link>
            ))}
        </div>
    )
}

export default Categories