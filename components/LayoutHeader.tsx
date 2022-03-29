import { PropsWithChildren, ReactChildren, ReactNode } from "react";

type Props = {
    children: ReactNode
}

export default function LayoutHeader({ children }: Props) {
    return (
        <h3 className="text-4xl font-bold text-slate-700 mb-6">{ children }</h3>
    )
}