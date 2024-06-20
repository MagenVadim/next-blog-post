'use client';
import type { Metadata } from "next";
import { shallow } from "zustand/shallow";
import { Posts } from "../components/Posts";
import { PostSearch } from "../components/PostSearch";
import { usePosts } from "@/store";
import { useEffect } from "react";

// export const metadata: Metadata = {
//     title: "Blog | Next App",    
//   };

export default function Blog(){

    const [posts, loading, getAllPosts] = usePosts(state =>[
        state.posts,
        state.loading,
        state.getAllPosts,
    ], shallow)

    useEffect(()=>{
        getAllPosts()
    },[getAllPosts])


    return (
        <div className="blog-container">
            <h1 className="blog-box"> Blog Page </h1>
            <PostSearch/>
            {loading ? 
            (<h3>Loading...</h3>) : (
               <Posts posts={posts}/>
            )}            
        </div>        
    )        
}