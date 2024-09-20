import Image from "next/image"
import Link from "next/link"

interface IProps{
    className: string,
    withImage: boolean,
}

// const getData = async () =>{
//     const res = await fetch("http://localhost:3000/api/categories", {cache: "no-store"})

//     if(!res.ok){
//         throw new Error("Field")
//     }

//     return res.json()
// }

async function Categories({className, withImage}:IProps) {

    //const data = await getData()

    return (
        <div className="flex flex-wrap justify-between gap-5 my-5 bg">
            <Link href={"/"} className={` capitalize ${className}`}>
                {withImage && (
                    
                    <Image src={""} alt="" width={32} height={32} className="object-cover rounded-[50%]" />
                    
                )}
                    Lorem ipsum dolor sit amet.
            </Link>
        </div>
    )
}

export default Categories

// {data?.map((item: any)=>(
//     <Link href={"/"} key={item._id} className={`bg-[${item.color}] capitalize ${className}`}>
//             {withImage && (
//                 item.img && (
//                     <Image src={item.img} alt="" width={32} height={32} className="object-cover rounded-[50%]" />
//                 )
//             )}
//             {item.title}
//     </Link>
// ))}


