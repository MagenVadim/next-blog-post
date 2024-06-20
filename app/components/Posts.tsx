import Link from "next/link";

type Props = {
    posts: any
}

const Posts = ({posts}:Props) => {  
    return (
        <ul>    
            {posts.map((el:any) =>
                <li key={el.id}>
                    <Link href={`/blog/${el.id}`}> {el.title} </Link>                        
                </li>       
            )}
        </ul>
    )
}

export {Posts}