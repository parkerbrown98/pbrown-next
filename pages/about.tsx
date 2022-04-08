import Timeline from "../components/about/Timeline"
import Header from "../components/Header"
import LayoutHeader from "../components/LayoutHeader"
import LayoutSection from "../components/LayoutSection"
import PageHeader from "../components/PageHeader"
import ProjectCard from "../components/projects/ProjectCard"
import DefaultLayout from "../layouts/default"
import timeline from "../_json/timeline.json"
import projects from "../_json/projects.json"
import Metric from "../components/about/Metric"
import { getOwnedGames } from "../lib/steam"
import { GetStaticProps, InferGetStaticPropsType } from "next"

export async function getStaticProps() {
    const { count: gameCount, games } = await getOwnedGames();

    return {
        props: {
            games: gameCount
        },
        revalidate: 120
    }
}

export default function AboutPage({ games }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <DefaultLayout>
            <LayoutSection>
                <PageHeader>About Me</PageHeader>
            </LayoutSection>
            <LayoutSection>
                <div className="grid grid-cols-4 gap-8">
                    <Metric name="Games" desc="Now that's a lot of games..." count={games} />
                    <Metric name="Page Views" desc="Since 2022" count={1234} />
                    <Metric name="GitHub Stars" desc="Look&apos;d up in perfect silence at the stars" count={1234} />
                    <Metric name="YouTube Views" desc="Go watch my videos" count={1234} />
                </div>
            </LayoutSection>
            <LayoutSection>
                <div className="grid grid-cols-2 gap-x-8">
                    <div>
                        <h2 className="text-5xl text-slate-500 font-bold">Experience</h2>
                        <Timeline items={timeline.experience} />
                    </div>
                    <div>
                        <h2 className="text-5xl text-slate-500 font-bold">Education</h2>
                        <Timeline items={timeline.education} />
                    </div>
                </div>
            </LayoutSection>
            <LayoutSection>
                <h2 className="text-5xl text-slate-500 font-bold">Projects</h2>
                <div className="grid grid-cols-4 gap-8 mt-8">
                    <ProjectCard project={projects[0]} />
                    <ProjectCard project={projects[1]} />
                    <ProjectCard project={projects[0]} />
                    <ProjectCard project={projects[0]} />
                </div>
            </LayoutSection>
        </DefaultLayout>
    )
}