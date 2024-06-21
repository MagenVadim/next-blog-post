import { getAllPosts } from "@/services/getPost";
import Link from "next/link";
import useSWR from "swr";

const Posts = () => {  

    const {data: posts, isLoading} = useSWR('posts', getAllPosts)

    return (
        isLoading ? (<h3>Loading...</h3>) : (
        <ul>    
            {posts.map((el:any) =>
                <li key={el.id}>
                    <Link href={`/blog/${el.id}`}> {el.title} </Link>                        
                </li>       
            )}
        </ul>)
    )
}

export {Posts}