import NumberCounter from "../NumberCounter"

type Props = {
    name: string,
    desc?: string
    count: number
}

export default function Metric({ name, desc, count }: Props) {
    return (
        <div>
            <div className="text-3xl text-slate-500 font-semibold leading-tightest">
                { name }
            </div>
            { desc && <div className="text-lg text-slate-400">{ desc }</div> }
            <NumberCounter value={count} className="text-5xl text-slate-700 font-bold mt-2" />
        </div>
    )
}