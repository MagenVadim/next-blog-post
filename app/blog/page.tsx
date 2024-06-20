'use client';

import type { Metadata } from "next";
import { getAllPosts } from "@/services/getPost";
import { useState, useEffect } from "react";
import { Posts } from "../components/Posts";

// export const metadata: Metadata = {
//     title: "Blog | Next App",    
//   };

export default function Blog(){
    const [posts, setPosts] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getAllPosts()
            .then(setPosts)
            .finally(()=>setLoading(false))
    },
[])

    return (
        <div className="blog-container">
            <h1 className="blog-box"> Blog Page </h1>
            {loading ? 
            (<h3>Loading...</h3>) : (
               <Posts posts={posts}/>
            )}            
        </div>        
    )        
}