import Image from "next/image"
import image1 from "../../../public/blogImage.jpg"
import Link from "next/link"

function Card() {
    return (
        <div className="flex items-center gap-[50px] mb-[50px]">
            <div className="flex-1 relative h-[350px]">
                <Image src={image1} alt="" fill className="object-cover"/>
            </div>
            <div className="textContainer flex flex-col gap-[30px] flex-1">
                <div className="details">
                    <span className="text-[gray]">11/5/2023 - </span>
                    <span className="text-[crimson] font-semibold">CULTURE</span>
                </div>
                <Link href={"/"}>
                    <h1 className="font-bold text-2xl">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </h1>
                </Link>
                <p className="text-[13px] font-light text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt doloribus modi rerum amet est enim, voluptas omnis aliquam velit ab expedita iusto obcaecati doloremque maiores. Temporibus earum quae natus fuga!
                </p>
                <Link href={"/"} className="border-b border-solid border-[crimson] w-max p-[2px_0px] ">Read More</Link>
            </div>
        </div>
    )
}

export default Card