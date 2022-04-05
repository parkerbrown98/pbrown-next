import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export default function PageHeader({ children }: Props) {
    return (
        <>
            <h1 className="text-6xl text-slate-700 font-bold">
                { children }
            </h1>
            <div className="bg-slate-700 h-2 mt-4 w-8"></div>
        </>
    )
}