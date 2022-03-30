import moment from "moment"
import { GetStaticPropsContext } from "next"
import { ParsedUrlQuery } from "querystring"
import BlogRow from "../../components/BlogRow"
import Header from "../../components/Header"
import LayoutHeader from "../../components/LayoutHeader"
import LayoutSection from "../../components/LayoutSection"
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
    return (
        <>
            <Header size="sm" />
            <LayoutSection>
                <h1 className="text-5xl text-slate-700 font-bold">Blog</h1>
            </LayoutSection>
            <LayoutSection>
                <div className="grid gap-12">
                    { posts.map(post => <BlogRow key={post.matter.slug} content={post.content} matter={post.matter} readTime={post.readTime} />) }
                </div>
            </LayoutSection>
        </>
    )
}