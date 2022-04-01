import Image from "next/image";
import Link from "next/link";

type Props = {
    size?: "sm" | "md" | "lg"
}

export default function Header({ size = "lg" }: Props) {
    if (size === "lg") {
        return (
            <div className="container mx-auto px-4">
                <div className="flex space-x-8 py-20 items-center">
                    <div className="rounded-full w-20 h-20 ring-2 ring-slate-200 drop-shadow-md">
                        <Image src="/avatar.jpg" width={128} height={128} className="rounded-full object-cover" />
                    </div>
                    <h1 className="text-6xl text-slate-700 font-bold">Parker Brown</h1>
                </div>
            </div>
        )
    } else if (size === "md") {
        return (
            <div className="container mx-auto px-4">
                <div className="flex space-x-6 py-10 container mx-auto items-center">
                    <div className="rounded-full w-14 h-14 ring-2 ring-gray-400/30 drop-shadow-md">
                        <Image src="/avatar.jpg" width={128} height={128} className="rounded-full object-cover" />
                    </div>
                    <h1 className="text-5xl text-slate-700 font-bold">Parker Brown</h1>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container mx-auto px-4 py-6">
                <Link href="/" passHref>
                    <a className="inline-flex space-x-6 items-center">
                        <div className="rounded-full w-12 h-12 ring-2 ring-gray-400/30 drop-shadow-md">
                            <Image src="/avatar.jpg" width={128} height={128} className="rounded-full object-cover" />
                        </div>
                        <h1 className="text-4xl text-slate-700 font-bold">Parker Brown</h1>
                    </a>
                </Link>
            </div>
        )
    }
}