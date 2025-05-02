import { prisma } from "@/utils/connect"
import { NextResponse } from "next/server"

export const GET = async (req: Request, {params}) =>{

    const {slug} = params

    try {

        const post = await prisma.post.findUnique({
            where:{slug},
            include: {user: true},
        })

        return new NextResponse(JSON.stringify(post), { status: 200 });
    } catch (err) {

        console.log(err)
        return new NextResponse(JSON.stringify({message: "something went wrong!"}), { status: 500})
    }
}