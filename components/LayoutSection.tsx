import { PropsWithChildren } from "react"

type Props = {
    contrast?: boolean,
    fluid?: boolean
}

export default function Container({ contrast = false, fluid = false, children }: PropsWithChildren<Props>) {
    return (
        <section className={`${contrast ? "bg-slate-100" : ""} w-full py-12`}>
            <div className={`${fluid ? '' : 'container'} px-4 mx-auto`}>
                { children }
            </div>
        </section>
    )
}