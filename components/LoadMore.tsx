import { ChevronDoubleDownIcon } from "@heroicons/react/outline"
import { EventHandler, MouseEventHandler } from "react"

type Props = {
    onClick: MouseEventHandler<HTMLDivElement>
}

export default function LoadMore({ onClick }: Props) {
    return (
        <div
            className="inline-flex items-center gap-x-2 bg-slate-100 hover:bg-slate-200 font-bold text-xl text-center px-4 py-4 mt-6 rounded-md text-slate-700 cursor-pointer transition-all"
            onClick={onClick}
        >
            <div>Load More</div>
            <ChevronDoubleDownIcon className="w-5 h-5 mt-1" />
        </div>
    )
}