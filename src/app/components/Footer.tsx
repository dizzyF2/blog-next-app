import { Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import image1 from "../../../public/blogImage.jpg"


const getData = async () =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/categories`, {cache: "no-store"})
    if(!res.ok){
        throw new Error("failed")
    }

    return res.json()
}

interface Item {
    _id: string | number | undefined;
    title: string;
}

async function Footer() {

    const data = await getData()
    return (
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-[#232328] mt-12 p-5">
            <div className="flex flex-col flex-[1] gap-3 mb-3">
                <div className="flex items-center gap-2">
                    <Image className="hover:cursor-pointer bg-red-500 rounded-full text-center text-gray-200" src={image1} alt="Faris" width={50} height={50} />
                    <h1 className="text-sm text-gray-700 dark:text-gray-200">Faris Abdelbagi</h1>
                </div>
                <p className="font-light">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                    necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
                    porro sequi, totam minima consequuntur, aspernatur deleniti vero
                    repellendus dorales.
                </p>
                <div className="flex gap-2 mt-2">
                    <Link target="_blank" className="hover:text-gray-700 dark:hover:text-gray-500" href="https://www.linkedin.com/in/faris-abdelbagi-740628301/"><Linkedin size={18}/></Link>
                    <Link target="_blank" className="hover:bg-gray-500 rounded-full" href="https://github.com/dizzyF2"><svg width={18} height={18} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></Link>
                </div>
            </div>
            {/* .Links  */}
            <div className="flex flex-[1] justify-end gap-24">
                <div className="flex flex-col gap-2 font-light">
                    <span className="font-bold text-gray-600 dark:text-gray-200">Links</span>
                    <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-100">Homepage</Link>
                    <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-100">Blog</Link>
                    <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-100">About</Link>
                    <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-100">Contact</Link>
                </div>
                <div className="flex flex-col gap-2 font-light">
                    <span className="font-bold text-gray-600 dark:text-gray-200">Tags</span>
                    {data.map((item: Item)=>(
                        <Link key={item._id} href={`/blog?cat=${item.title}`} className="hover:text-gray-600 dark:hover:text-gray-100">
                                {item.title}
                        </Link>
                    ))}
                </div>
                <div className="flex flex-col gap-2 font-light">
                    <span className="font-bold text-gray-600 dark:text-gray-200">Social</span>
                    <Link className="hover:text-gray-600 dark:hover:text-gray-100" target="_blank" href="https://www.linkedin.com/in/faris-abdelbagi-740628301/">linkedIn</Link>
                    <Link className="hover:text-gray-600 dark:hover:text-gray-100" target="_blank" href="https://github.com/dizzyF2">Github</Link>
                </div>
            </div>
        </div>
    );
}

export default Footer