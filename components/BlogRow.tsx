import moment from "moment"
import Image from "next/image"
import { ReactNode } from "react"
import { useProcessor } from "../hooks/useProcessor"
import { BlogFrontMatter } from "../types"
import LinkButton from "./LinkButton"

type Props = {
    content: string,
    matter: BlogFrontMatter,
    readTime: number
}

export default function BlogRow({ content, matter, readTime }: Props) {
    const renderedContent = useProcessor(content);

    return (
        <div className="grid grid-cols-4 gap-x-12">
            <div className="flex flex-col gap-y-4 col-span-2 items-start">
                <div>
                    <h2 className="text-4xl text-slate-700 font-bold">{ matter.title }</h2>
                    <div className="text-xl text-slate-500 mt-1">{ matter.date } &bull; { readTime } minute read</div>
                </div>
                <div className="max-h-[300px] text-fade">
                    <div className="text-slate-500">{ renderedContent as ReactNode }</div>
                </div>
                <LinkButton theme="light" href={`/blog/${matter.slug}`}>Read Post</LinkButton>
            </div>
            { matter.cover && (
                <div className="relative overflow-hidden shadow-md rounded-md pb-[66.66%] col-span-2">
                    <Image src={matter.cover} layout="fill" objectFit="cover" sizes="20vw" />
                </div>
            )}
            { !matter.cover && (
                <div className="col-span-2">
                    <div className="relative overflow-hidden pb-[66.66%] rounded-md">
                        <div className="absolute t-0 l-0 w-full h-full bg-slate-200/60"></div>
                    </div>
                    <div className="flex flex-col gap-y-2 mt-4">
                        <div className="w-3/4 h-3 bg-slate-200/60 rounded-md"></div>
                        <div className="w-1/2 h-3 bg-slate-200/60 rounded-md"></div>
                    </div>
                </div>
            )}
        </div>
    )
}