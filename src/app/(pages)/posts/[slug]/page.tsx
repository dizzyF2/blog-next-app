import MenuList from "@/app/components/MenuList"
import Image from "next/image"
import Comments from "@/app/components/Comments"


const getData = async (slug: string) =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/posts/${slug}`, {cache: "no-store"})
    if(!res.ok){
        throw new Error("Field")
    }

    return res.json()
}


async function page({params}: { params: { slug: string }}) {

    const slugify = (str: string) => {
        return str
            .toLowerCase()
            .trim()
            .replace(/[^a-zA-Z0-9\u0600-\u06FF\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");
    };

    const { slug } = params
    const saveSlug = slugify(slug)
    const data = await getData(slug)
    return (
        <div className="my-20 flex flex-row gap-20">
                <div className="flex-[5] ">
                    <div className="info-container flex items-center gap-12">
                        <div className="flex flex-col flex-1 gap-12">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">{data?.title}</h1>
                            <div className="info flex items-center gap-5 w-fit">
                                {data?.user?.image && 
                                    <div className="relative w-12 h-12">
                                        <Image src={data.user.image} alt="" fill className="object-cover rounded-full" />
                                    </div>
                                }
                                <div className="user-info flex flex-col gap-1 text-gray-500 dark:text-gray-400">
                                    <span className="text-xl font-bold capitalize">{data?.user.name}</span>
                                    <span className="">{data?.createdAt.substring(0,10)}</span>
                                </div>
                            </div>
                        </div>
                        {data?.img &&
                            <div className="hidden md:block flex-1 relative md:h-[275px] lg:h-[350px]">
                                <Image src={data.img} alt="" fill className="object-contain" />
                            </div>
                        }
                    </div>
                        <div className="discription mt-14 text-lg font-light" dangerouslySetInnerHTML={{__html: data?.desc}}/>
                        <Comments postSlug={saveSlug} />
                </div>
                <MenuList/>
        </div>
    )
}

export default page