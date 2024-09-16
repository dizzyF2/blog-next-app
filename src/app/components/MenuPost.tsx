import Image from 'next/image'
import Link from 'next/link'
import image1 from "../../../public/blogImage.jpg"

function MenuPost({withImage}:{withImage: boolean}) {
    return (
        <div className="flex flex-col gap-9 mt-9 mb-16">
            <Link href={"/"} className="flex items-center gap-5">
                {withImage && (
                    <div className="relative flex-[1] aspect-[1/1]">
                        <Image src={image1} alt="" fill className=" rounded-full object-cover border-[3px] border-solid border-[lightgray]"/>
                    </div>
                )}
                
                <div className="textContainer flex-[4] flex flex-col gap-[5px]">
                    <span className="p-[3px_8px] text-[12px] text-white bg-[#ff7857] w-max rounded-xl">Travel</span>
                    <h3 className="text-[15px] font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </h3>
                    <div className="details text-[12px]">
                        <span className="capitalize">faris abdelbagi - </span>
                        <span className="text-[gray]">11/9/2024</span>
                    </div>
                </div>
            </Link>
        </div>
        
    )
}

export default MenuPost