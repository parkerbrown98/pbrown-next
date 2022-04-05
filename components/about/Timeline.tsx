import { ITimeline } from "../../types";
import TimelineEntry from "./TimelineEntry";

type Props = {
    items: ITimeline[];
}

export default function Timeline({ items }: Props) {

    return (
        <ul className="flex flex-col gap-y-4 mt-8">
            { items.map(time => <TimelineEntry key={time.title} timeline={time} />) }
        </ul>
    )
}