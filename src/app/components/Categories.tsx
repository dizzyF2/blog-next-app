import Image from "next/image"
import { CategoriesList } from "../constants"
import Link from "next/link"

interface IProps{
    className: string,
    withImage: boolean,
}
function Categories({className, withImage}:IProps) {
    return (
        <div className="flex flex-wrap justify-between gap-5 my-5 ">
            {CategoriesList.map((item, index)=>(
                <Link href={item.href} key={index} className={`${item.bgColor} capitalize ${className}`}>
                        {withImage && <Image src={item.icon} width={32} height={32} alt="" className="rounded-[50%]"/> }
                        {item.categName}
                </Link>
            ))}
        </div>
    )
}

export default Categories


