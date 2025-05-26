import { prisma } from "@/utils/connect";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../../auth";
import MyPost from "@/app/components/MyPost";
import { redirect } from "next/navigation";



async function page() {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
        redirect("/")
    }

    const posts = await prisma.post.findMany({
        where: {
        userEmail: session.user.email,
        },
        orderBy: {
        createdAt: "desc",
        },
    });

    return (
    <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">My Posts</h1>
        {posts.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400">No posts yet.</p>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <MyPost key={post.id} post={post} />
                ))}
            </div>
        )}
    </div>
    )
}

export default page