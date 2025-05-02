'use client'

import { useEffect, useState } from "react"
import "react-quill/dist/quill.bubble.css";
import { Plus, ImageIcon, Upload, SquarePlay } from "lucide-react"
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import ReactQuill from "react-quill";

function Write() {

    const {status} = useSession();

    const [open, setOpen] = useState(false)
    const [file, setFile] = useState<File | null>(null)
    const [media, setMedia] = useState("")
    const [value, setValue] = useState("")
    const [title, setTitle] = useState("")
    const [catSlug, setCatSlug] = useState("");

    const { data: session } = useSession();

    useEffect(()=>{
        const upload = async () => {
            if (!file) return;
    
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64Image = reader.result as string;
                setMedia(base64Image); // Set media as base64 string
            };
            reader.readAsDataURL(file); // Convert file to base64
        };

        if (file) {
            upload();
        }
    },[file])

    if(status === "loading"){
        return <div>Loading...</div>
    }
    
    if(status === "unauthenticated"){
        redirect("/")
    }

    const slugify = (str: string) => {
        return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
    };

    const handleSubmit = async () => {
        if (!session) {
            console.log("User is not authenticated!");
            return;
        }
    
        const res = await fetch(`/api/posts`, {
            method: "POST",
            body: JSON.stringify({
                title,
                desc: value,
                imageBase64: media, // base64 image data
                slug: slugify(title),
                catSlug: catSlug || "style"
            })
        });
    
        // Handle success or error
        if (res.ok) {
            console.log("Post created successfully!");
        } else {
            console.log("Error creating post");
        }
    };

    return (
    <div>
        <div className="flex justify-between items-center">
            <input 
                type="text" 
                placeholder="Title" 
                className="p-12 text-6xl border-none outline-none bg-transparent"
                onChange={e => setTitle(e.target.value)}
            />
            <select className="block w-full bg-transparent border border-gray-700 dark:border-white text-gray-700 dark:text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-black" 
                    onChange={(e) => setCatSlug(e.target.value)}
            >
                <option value="style">style</option>
                <option value="fashion">fashion</option>
                <option value="food">food</option>
                <option value="culture">culture</option>
                <option value="travel">travel</option>
                <option value="coding">coding</option>
            </select>
        </div>
        <div className="editor-container relative flex gap-5 h-[700px]">
            <button onClick={()=>setOpen(!open)} className="border border-solid w-9 h-9 rounded-[50%] border-gray-700 hover:border-gray-900 dark:border-white bg-transparent text-gray-300 hover:text-black flex items-center justify-center">
            <Plus size={16}  className="text-gray-700 dark:text-white"/>
            </button>
            {open && (
                <div className="flex gap-5 absolute bg-gray-50 dark:bg-[#1b1b1f] w-full left-12 z-[999]">
                    <input
                    className="bg-red-500 w-fit hidden"
                        type="file"
                        id="image"
                        onChange={e => e.target.files?.[0] && setFile(e.target.files[0])}
                    />
                    <button className="border border-solid w-9 h-9 rounded-[50%] bg-transparent text-gray-300 flex items-center justify-center border-[#1a8917]">
                        <label htmlFor="image" className="hover:cursor-pointer">
                                <ImageIcon size={16} color="#1a8917"/>
                        </label>
                    </button>
                    <button className="border border-solid w-9 h-9 rounded-[50%] bg-transparent text-gray-300 flex items-center justify-center border-[#1a8917]">
                        <Upload size={16} color="#1a8917"/>
                    </button>
                    <button className="border border-solid w-9 h-9 rounded-[50%] bg-transparent text-gray-300 flex items-center justify-center border-[#1a8917]">
                        <SquarePlay size={16} color="#1a8917" />
                    </button>
                </div>
            )}
            <ReactQuill
                className="bg-transparent w-full resize-none outline-none"
                theme="bubble"
                value={value}
                onChange={setValue}
                placeholder="Tell your story..."
            />
        </div>
            <button 
                className="absolute top-[70px] right-[20px] p-[10px_20px] border-none bg-[#1a8917] hover:bg-[#2e922e] text-white rounded-3xl"
                onClick={handleSubmit}
            >
            Publish
            </button>
    </div>
    )
}

export default Write


/*
useEffect(()=>{
        const upload = async () => {
            if (!file) return;
        
            const fileName = `post-${Date.now()}.${file.name.split(".").pop()}`;
        
            const { error } = await (await createSupabaseServerClient()).storage
                .from("post-images")
                .upload(fileName, file, {
                cacheControl: "3600",
                upsert: false,
            });
        
            if (error) {
                console.error("Upload failed:", error.message);
                return;
            }
        
            const { data: publicUrlData } = (await createSupabaseServerClient()).storage
            .from("post-images")
            .getPublicUrl(fileName);
        
            if (publicUrlData?.publicUrl) {
              setMedia(publicUrlData.publicUrl); //  URL goes to DB and image component
            }
        };
        
        upload();
    },[file])

    if(status === "loading"){
        return <div>Loading...</div>
    }
    
    if(status === "unauthenticated"){
        redirect("/")
    }

    const slugify = (str: string) => {
        return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
    };

    const handleSubmit = async () => {
        if (!session) {
            console.log("User is not authenticated!");
            return;
        }
    
        const res = await fetch(`/api/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                desc: value,
                image: media, // ✅ Now it's a Supabase URL
                slug: slugify(title),
                catSlug: catSlug || "style",
            }),
        });
        
        if (res.ok) {
        console.log("Post created successfully!");
        } else {
        console.error("Error creating post");
        }
    };

*/