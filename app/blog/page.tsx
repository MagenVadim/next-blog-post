import type { Metadata } from "next";
import Link from "next/link";


async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        next:{
            revalidate: 60,
        }
    })

    if(!response.ok) throw new Error('Unable to fetch posts!')
    return response.json()
}

export const metadata: Metadata = {
    title: "Blog | Next App",    
  };

export default async function Blog(){
    const posts = await getData()

    return (
        <div className="blog-container">
            <h1 className="blog-box"> Blog Page </h1>
            <ul>
                {posts.map((el:any) =>
                    <li key={el.id}>
                        <Link href={`/blog/${el.id}`}> {el.title} </Link>                        
                    </li>       
                )}
            </ul>
        </div>
        
    )
        
}