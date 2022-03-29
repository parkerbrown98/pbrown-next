import type { GetServerSidePropsContext, GetStaticPropsContext, InferGetServerSidePropsType, NextPage } from 'next'
import BlogCard from '../components/BlogCard'
import LayoutSection from '../components/LayoutSection'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { BlogPost, SteamGame } from '../types'
import LayoutHeader from '../components/LayoutHeader'
import GuideCard from '../components/GuideCard'
import { getOwnedGames, getTopGames } from '../lib/steam'
import GameCard from '../components/GameCard'
import LinkButton from '../components/LinkButton'
import { getAllPosts } from '../lib/markdown'
import moment from 'moment'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let games: SteamGame[] = [];

  // Fetch games
  try {
    games = await getTopGames(30);
  } catch (err) {
    console.error((err as Error).message);
  }

  // Fetch blog posts
  const posts = getAllPosts()
    .sort((a, b) => {
    const aDate = moment(a.matter.date, "M-D-YYYY");
    const bDate = moment(b.matter.date, "M-D-YYYY");
    return bDate.diff(aDate);
  })
    .splice(0, 3)
    .map(post => {
      const newDate = moment(post.matter.date, "M-D-YYYY").format("MMMM D, YYYY");
      return {...post, matter: {...post.matter, date: newDate}}
    });

  return {
    props: {
      games,
      posts
    }
  }
}

export default function Home({ games, posts }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Header size="sm"/>
      <LayoutSection>
        <Hero />
      </LayoutSection>
      <LayoutSection contrast>
        <LayoutHeader>Recent Posts</LayoutHeader>
        <div className="grid grid-cols-3 gap-x-12">
          <BlogCard post={posts[0]} />
          <BlogCard post={posts[1]} />
          <BlogCard post={posts[2]} />
        </div>
        <LinkButton href="#" className="mt-6">More posts</LinkButton>
      </LayoutSection>
      <LayoutSection>
        <LayoutHeader>Featured Guides</LayoutHeader>
        <div className="grid grid-cols-3 gap-x-8">
          <GuideCard borderColor="border-violet-600" textColor="text-violet-600" />
          <GuideCard borderColor="border-emerald-600" textColor="text-emerald-600" />
          <GuideCard borderColor="border-blue-600" textColor="text-blue-600" />
        </div>
        <LinkButton href="#" theme="light" className="mt-6">More guides</LinkButton>
      </LayoutSection>
      { games.length > 0 && (
        <LayoutSection contrast>
          <LayoutHeader>Most Played Games</LayoutHeader>
          <div className="flex gap-2 flex-wrap">
            { games.map(game => <GameCard key={game.appid} game={game} />)}
          </div>
        </LayoutSection>
      )}
    </>
  )
}
