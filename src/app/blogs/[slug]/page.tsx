import { getPostsBySlug } from '@/lib/posts'
import { notFound } from 'next/navigation'

type blogPostParams = {
    params: {
        slug: string;
    }
}


export default function Page({params}: blogPostParams) {
    //1234
    const post = getPostsBySlug(params.slug)

    if (!post) {
        notFound()
       }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    )
}