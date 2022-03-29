import Image from "next/image"
import Link from "next/link"
import { BlogPost } from "../types"
import styles from './BlogCard.module.css'

type Props = {
    post: BlogPost | undefined
}

export default function BlogCard({ post }: Props) {
    if (post !== undefined) {
        return (
            <div>
                <Link href={`/blog/${post.matter.slug}`} passHref>
                    <a>
                        <div className={`${post.matter.cover ? 'overflow-hidden shadow-md' : 'bg-slate-200'} relative pb-[56.25%] rounded-md`}>
                            { post.matter.cover && <Image src={post.matter.cover} layout="fill" objectFit="cover" /> }
                        </div>
                    </a>
                </Link>
                <div className="flex flex-col gap-y-2 mt-6">
                    <Link href={`/blog/${post.matter.slug}`} passHref>
                        <a className="text-2xl text-slate-700 font-bold break-words hover:underline">
                            { post.matter.title }
                        </a>
                    </Link>
                    <div className="font-semibold text-slate-500">{ post.matter.date } &bull; { post.readTime } minute read</div>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div className="relative overflow-hidden pb-[56.25%] rounded-md">
                    <div className="absolute t-0 l-0 w-full h-full bg-slate-200"></div>
                </div>
                <div className="flex flex-col gap-y-7 mt-6">
                    <div className="w-3/4 h-4 bg-slate-200 rounded-md"></div>
                    <div className="w-1/2 h-3 bg-slate-200 rounded-md"></div>
                </div>
            </div>
        )
    }
}