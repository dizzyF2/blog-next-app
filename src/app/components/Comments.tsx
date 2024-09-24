import Image from "next/image"
import image1 from "../../../public/blogImage.jpg"


function Comments() {
    
    
    return (
        <div className="mt-12">
            <h1 className="text-2xl font-bold capitalize text-gray-500 dark:text-gray-400 mb-8">comments</h1>
            <div className="flex flex-col  items-center justify-between gap-3">
                <textarea className="outline-none p-5 w-full resize-none rounded-lg border border-gray-300 dark:border-gray-800" placeholder="write a comment..."/>
                <button className="bg-blue-700 self-end hover:bg-blue-500 rounded-lg p-[8px_10px] md:p-[16px_20px] text-white font-bold border-none">send</button>
            </div>
            <div className="Comments mt-12">
                <div className="single-comment mb-12">
                    <div className="flex items-center justify-center gap-5 w-fit mb-2">
                        <div className="relative w-12 h-12">
                            <Image src={image1} alt="" fill className="object-cover rounded-full" />
                        </div>
                        <div className="user-info flex items-center justify-center gap-0 md:gap-1 text-gray-500 dark:text-gray-400 mb-1">
                            <span className="text-sm md:text-xl font-bold capitalize">faris abdelbagi - </span>
                            <span className="">7/9/2024</span>
                        </div>
                    </div>
                    <p className="text-sm md:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A fugit ut porro numquam debitis quas aliquam voluptates recusandae, eligendi pariatur.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Comments