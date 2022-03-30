import Header from "../../components/Header"
import { BlogFrontMatter } from "../../types"
import LayoutSection from "../../components/LayoutSection"
import { GetStaticPathsContext, GetStaticPropsContext } from "next"
import { ParsedUrlQuery } from "querystring";
import { getAllPosts, getPostBySlug } from "../../lib/markdown";
import styles from "../../styles/markdown.module.css";
import { LinkIcon } from "@heroicons/react/solid";
import { useProcessor } from "../../hooks/useProcessor";
import { ReactNode } from "react";
import moment from "moment";
import Image from "next/image";

type StaticProps = {
    content: string,
    matter: BlogFrontMatter,
    readTime: number
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
    const { slug } = params as ParsedUrlQuery & { slug: string };
    const post = getPostBySlug(slug);
    const strDate = moment(post?.matter.date, "M-D-YYYY").format("MMMM D, YYYY");

    return {
        props: {
            content: post?.content,
            matter: {...post?.matter, date: strDate},
            readTime: post?.readTime
        }
    }
}

export const getStaticPaths = async (context: GetStaticPathsContext) => {
    const posts = getAllPosts();
    const params = posts.map(post => ({
        params: { slug: post.matter.slug }
    }))

    return {
        paths: params,
        fallback: false
    }
}

export default function BlogPostPage({ content, matter, readTime }: StaticProps) {
    const renderedContent = useProcessor(content);

    return (
        <>
            <Header size="sm" />
            <LayoutSection>
                { matter.cover && (
                    <div className="overflow-hidden shadow-md rounded-md max-w-xl mb-8">
                        <Image src={matter.cover} layout="responsive" width={3} height={2} sizes="50vw" priority />
                    </div>
                )}
                <div className="flex gap-x-4 items-center">
                    <h1 className="text-5xl text-slate-700 font-bold">{ matter.title }</h1>
                    <span
                        className="text-slate-400 hover:text-slate-500 transition-colors cursor-pointer"
                        onClick={() => navigator.clipboard.writeText(window.location.href)}
                    >
                        <LinkIcon className="w-8 h-8 mt-4" />
                    </span>
                </div>
                <div className="text-xl text-slate-500 mt-2">{ matter.date } &bull; { readTime } minute read</div>
                <div className={styles.markdown}>
                    { renderedContent as ReactNode }
                </div>
            </LayoutSection>
        </>
    )
}