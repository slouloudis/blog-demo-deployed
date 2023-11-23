import { getPostsBySlug, getPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'

type blogPostParams = {
    params: {
        slug: string;
    }
}

// we're using this function to tell next the URL of each page we want to statically generate at build time. 
export function generateStaticParams() {
    const posts = getPosts()
    return posts.map((post) => {
        return {slug : post.slug}
    })

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