import Link from "next/link"
import { PropsWithChildren } from "react"

type Props = {
    href: string,
    theme?: "light" | "dark",
    className?: string
}

export default function LinkButton({ href, theme = "dark", children, className }: PropsWithChildren<Props>) {
    const darkStyles = "bg-slate-700 hover:bg-slate-600 text-white";
    const lightStyles = "bg-slate-100 hover:bg-slate-200 text-slate-700"

    return (
        <Link href={href} passHref>
            <a className={`${theme === "dark" ? darkStyles : lightStyles} inline-block text-lg py-2 px-4 rounded-sm font-semibold transition-colors ${className}`}>
                { children }
            </a>
        </Link>
    )
}