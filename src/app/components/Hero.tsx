import Image from "next/image"
import image1 from "../../../public/blogImage.jpg"

function Hero(){
    return(
        <div className="flex flex-col items-center justify-center mt-[50px]">
            <h1 className="text-4xl md:text-7xl">
            <span className="font-bold">Welcome to <span className="text-[#0f0]">Dev</span>Blog! </span>Discover stories and creative ideas.
            </h1>
            <div className="flex items-center gap-[50px] mt-[60px]">
                <div className="hidden md:block relative flex-1 h-[400px]">
                    <Image src={image1} alt="" fill className="object-cover"></Image>
                </div>
                <div className="flex flex-col gap-5 flex-1">
                    <h1 className="text-2xl md:text-[40px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </h1>
                    <p className="text-[13px] md:text-[18px] text-gray-600 dark:text-gray-400">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti aut, aliquam soluta id perspiciatis dicta error facere. Accusamus, accusantium. Velit nam mollitia optio nobis quia quas temporibus obcaecati reprehenderit officiis!
                    </p>
                    <button className="p-[16px_20px] border-none rounded-md bg-black text-white dark:bg-white dark:text-black w-max cursor-pointer hover:bg-gray-200 hover:text-black hover:dark:bg-black hover:dark:text-white">Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Hero