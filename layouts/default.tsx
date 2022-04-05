import { ReactNode } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"

type Props = {
    children: ReactNode
}

export default function DefaultLayout({ children }: Props) {
    return (
        <>
            <Header size="sm" />
            { children }
            <Footer />
        </>
    )
}