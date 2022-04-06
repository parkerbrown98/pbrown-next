import Image from "next/image"
import { Project } from "../../types"

type Props = {
    project: Project
}

export default function ProjectCard({ project }: Props) {
    return (
        <div className="relative group cursor-pointer">
            <div className="relative overflow-hidden shadow-md mx-auto mb-4 pb-[75%] w-11/12 group-hover:shadow-xl group-hover:translate-y-[-0.5rem] transition-all duration-[400ms] rounded-md border">
                <Image src={project.image} layout="fill" objectFit="cover" />
            </div>
            <div className="absolute left-0 bottom-0 w-full shadow-md group-hover:shadow-lg p-6 z-10 bg-none transition-shadow duration-[400ms]">
                <div className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-t from-white to-white/90 group-hover:opacity-95 z-[-1] transition-opacity duration-[400ms]"></div>
                <div className="flex flex-col gap-y-2 z-[2]">
                    <div className="text-3xl font-bold text-slate-700">{ project.title }</div>
                    <div>
                        <div className="font-semibold text-slate-500">{ project.type }</div>
                        <div className="text-slate-500">{ project.category }</div>
                    </div>
                </div>
            </div>
        </div>
    )
}