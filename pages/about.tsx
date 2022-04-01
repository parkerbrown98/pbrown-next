import Timeline from "../components/about/Timeline"
import Header from "../components/Header"
import LayoutSection from "../components/LayoutSection"
import PageHeader from "../components/PageHeader"
import timeline from "../timeline.json"

export default function AboutPage() {
    return (
        <>
            <Header size="sm" />
            <LayoutSection>
                <PageHeader>About Me</PageHeader>
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
        </>
    )
}