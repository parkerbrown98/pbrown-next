import { ITimeline } from "../../types"
import styles from "./Timeline.module.css"

type Props = {
    timeline: ITimeline
}

export default function TimelineEntry({ timeline }: Props) {
    return (
        <li className={`relative pl-[44px] ${styles.entry}`}>
            <div className="text-3xl text-slate-600 font-bold">{ timeline.title }</div>
            <div className="text-lg text-slate-500 font-semibold leading-tight">{ timeline.location }</div>
            <div className="text-lg text-slate-400 font-semibold leading-tight">{ timeline.daterange }</div>
            <div className="mt-2">{ timeline.body }</div>
        </li>
    )
}