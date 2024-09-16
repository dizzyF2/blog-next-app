import MenuList from "@/app/components/MenuList"
import Image from "next/image"
import image1 from "../../../../public/blogImage.jpg"
import Comments from "@/app/components/Comments"

function page() {
    return (
        <div>
            <div className="info-container flex items-center gap-12">
                <div className="flex flex-col flex-1 gap-12">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
                    <div className="info flex items-center gap-5 w-fit">
                        <div className="relative w-12 h-12">
                            <Image src={image1} alt="" fill className="object-cover rounded-full" />
                        </div>
                        <div className="user-info flex flex-col gap-1 text-gray-500 dark:text-gray-400">
                            <span className="text-xl font-bold capitalize">faris abdelbagi</span>
                            <span className="">7/9/2024</span>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block flex-1 relative md:h-[275px] lg:h-[350px]">
                    <Image src={image1} alt="" fill className="object-cover" />
                </div>
            </div>
            <div className="content flex flex-row gap-20">
                <div className="post flex-[5]">
                    <div className="discription mt-14 text-lg font-light">
                        <p className="text-base sm:text-lg md:text-xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga molestias asperiores obcaecati excepturi, ad quasi dolorem provident voluptatum a rerum mollitia reiciendis amet perspiciatis pariatur nihil doloribus quidem sapiente incidunt magnam veritatis autem eius nostrum. Enim, facere doloremque. Nulla cumque quasi impedit deserunt ducimus laboriosam consequatur atque animi enim? Error, nisi. Sapiente delectus debitis quod accusamus iusto, veritatis ad ipsam qui optio! Debitis, corrupti, asperiores eligendi maiores blanditiis, nisi repudiandae reprehenderit exercitationem sunt magnam perspiciatis eveniet. Possimus, tempora dignissimos. Praesentium hic necessitatibus fugit ipsam, error, magnam labore sequi similique minus dolorem cumque consectetur, et voluptate ducimus quas ea modi voluptatibus!
                        </p>
                    </div>
                    <Comments/>
                </div>
                <MenuList/>
            </div>
        </div>
    )
}

export default page