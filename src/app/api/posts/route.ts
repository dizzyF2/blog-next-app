import { prisma } from "@/utils/connect"
import { NextResponse } from "next/server"
import { getAuthSession } from "../../../../lib/auth"
import { createSupabaseServerClient } from "@/utils/supabase/server"

export const GET = async (req: Request) =>{

    const searchParams = new URL(req.url)
    
    const page = Number(searchParams.searchParams.get("page"))
    const cat = searchParams.searchParams.get("cat")

    const POST_PER_PAGE = 3

    const query = {
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * ( page - 1),
        where:{
            ...(cat && {catSlug: cat})
        },
    }

    try {
        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count({where: query.where}),
        ])

        return new NextResponse(JSON.stringify({posts, count}), { status: 200 });
    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message: "something went wrong!"}), { status: 500})
    }
}

//CREATE NEW POST WITH SUPABASE
export const POST = async (req: Request) => {
    const session = await getAuthSession();  // Get session via NextAuth

    if (!session) {
        return new NextResponse(
            JSON.stringify({ message: "Not authenticated!" }),
            { status: 401 }
        );
    }

    try {
        const body = await req.json();
        const { imageBase64, ...postData } = body;

        let imageUrl = null;

        if (imageBase64) {
            // Convert base64 to Buffer for upload
            const buffer = Buffer.from(
                imageBase64.replace(/^data:image\/\w+;base64,/, ""),
                "base64"
            );
            const fileExt = imageBase64.substring(
                "data:image/".length,
                imageBase64.indexOf(";base64")
            );
            const fileName = `post-${Date.now()}.${fileExt}`;

            // Upload to Supabase Storage (with service role key)
            const { data, error } = await (await createSupabaseServerClient()).storage
                .from("post-images")
                .upload(fileName, buffer, {
                    contentType: `image/${fileExt}`,
                });

            if (error) {
                console.error("Supabase upload error:", error.message);
                return new NextResponse(
                    JSON.stringify({ message: "Image upload failed." }),
                    { status: 500 }
                );
            }

            imageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/post-images/${data.path}`;
        }

        // Assuming Prisma is being used for your database
        const post = await prisma.post.create({
            data: {
                ...postData,
                userEmail: session.user?.email,
                img: imageUrl, // Store image URL
            },
        });

        return new NextResponse(JSON.stringify(post), { status: 200 });
    } catch (err) {
        console.error("Post creation error:", err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }),
            { status: 500 }
        );
    }
};


//CREATE POST WITH SUPABASE TRY 2
// export const POST = async (req: Request) => {
//     const session = await getAuthSession();  // Get session via NextAuth

//     if (!session) {
//         return new NextResponse(
//         JSON.stringify({ message: "Not authenticated!" }),
//         { status: 401 }
//         );
//     }

//     try {
//         const body = await req.json();
//         const { image, ...postData } = body;

//         const post = await prisma.post.create({
//         data: {
//             ...postData,
//             userEmail: session.user?.email,
//             img: image || null,
//         },
//         });

//         return new NextResponse(JSON.stringify(post), { status: 200 });
//     } catch (err) {
//         console.error("Post creation error:", err);
//         return new NextResponse(
//         JSON.stringify({ message: "Something went wrong!" }),
//         { status: 500 }
//         );
//     }
// };