import moment from "moment"
import { GetStaticPropsContext } from "next"
import { ParsedUrlQuery } from "querystring"
import { MouseEventHandler, useState } from "react"
import BlogRow from "../../components/blog/BlogRow"
import Header from "../../components/Header"
import LayoutHeader from "../../components/LayoutHeader"
import LayoutSection from "../../components/LayoutSection"
import LoadMore from "../../components/LoadMore"
import PageHeader from "../../components/PageHeader"
import { getAllPosts } from "../../lib/markdown"
import { BlogPost } from "../../types"

type Props = {
    posts: BlogPost[]
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
    const posts = getAllPosts()
        .sort((a, b) => {
            const aDate = moment(a.matter.date, "M-D-YYYY");
            const bDate = moment(b.matter.date, "M-D-YYYY");
            return bDate.diff(aDate);
        })
        .map(post => {
            const newDate = moment(post.matter.date, "M-D-YYYY").format("MMMM D, YYYY");
            return {...post, matter: {...post.matter, date: newDate}}
        });

    return {
        props: {
            posts
        }
    }
}

export default function BlogPage({ posts }: Props) {
    const [items, setItems] = useState<number>(5);

    const loadMoreItems: MouseEventHandler<HTMLDivElement> = (e) => {
        setItems(Math.min(posts.length, items + 5));
    }

    return (
        <>
            <Header size="sm" />
            <LayoutSection>
                <PageHeader>Blog</PageHeader>
            </LayoutSection>
            <LayoutSection>
                <div className="grid gap-12">
                    { posts.slice(0, items).map(post => <BlogRow key={post.matter.slug} content={post.content} matter={post.matter} readTime={post.readTime} />) }
                </div>
                <LoadMore onClick={loadMoreItems}/>
            </LayoutSection>
        </>
    )
}