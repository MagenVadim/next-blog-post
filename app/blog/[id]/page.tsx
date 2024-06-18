import { Metadata } from "next"

async function getData(id:string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        next:{
            revalidate: 60,
        }
    })
    return response.json()
}

type Props = {
    params:{
        id: string,
    }
}

export async function generateMetadata({params: {id}}: Props): Promise<Metadata>{
    const posts = await getData(id)
    return {
        title: posts.title,
    }
}

export default async function Post({params: {id}}: Props){

    const posts = await getData(id)

    return (
        <div className="post-body">
            <h1>{posts.title}</h1>
            <p>{posts.body}</p>
        </div>
        
    )
        
}