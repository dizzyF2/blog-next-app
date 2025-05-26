import { Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


interface Post {
    id: string;
    title: string;
    img: string | null;
    desc: string;
    createdAt: Date;
    slug: string;
    views: number;
    catSlug: string;
    userEmail: string;
}

interface myPostsProps {
    post: Post
}
function MyPost({post}: myPostsProps) {
    return (
    <Link href={`/posts/${post.slug}`} className="group">
        <div className="bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-gray-900/25 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="p-0">
            <div className="relative">
            {/* Image Section */}
            <div className="relative aspect-video bg-gray-100 dark:bg-gray-700">
                {post.img ? (
                <Image
                    src={post.img || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                ) : (
                <div className="flex items-center justify-center h-full bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-600">
                    <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">No Image</span>
                </div>
                )}

                {/* Views Counter - Top Right */}
                <div className="absolute top-3 right-3 bg-black/70 dark:bg-black/80 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                <Eye className="w-3 h-3 text-white" />
                <span className="text-white text-xs font-medium">{post.views.toLocaleString()}</span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-4 space-y-3">
                {/* Category */}
                <div className="flex items-center justify-between">
                <span className="inline-block px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800 text-xs font-medium rounded-full capitalize">
                    {post.catSlug.replace("-", " ")}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{new Date(post.createdAt).toLocaleDateString()}</span>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg leading-tight line-clamp-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.title}
                </h3>
            </div>
            </div>
        </div>
        </div>
    </Link>
    )
}

export default MyPost