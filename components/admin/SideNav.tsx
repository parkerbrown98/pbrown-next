import { AnnotationIcon, AcademicCapIcon, PuzzleIcon } from '@heroicons/react/solid'

type ButtonProps = {
    text: string,
    icon: React.ElementType
}

function NavButton({ text, icon }: ButtonProps) {
    const Icon = icon;

    return (
        <li className="flex items-center gap-x-2 px-2 py-2 rounded-md hover:bg-slate-100 transition-all cursor-pointer group">
            <Icon className="w-5 h-5 group-hover:mr-1 text-slate-400 group-hover:text-slate-500 transition-all" />
            <div className="text-slate-400 group-hover:text-slate-500 font-semibold transition-all">
                { text }
            </div>
        </li>
    )
}

export default function SideNav() {
    return (
        <ul className="flex flex-col gap-y-2">
            <NavButton text="Blog Posts" icon={AnnotationIcon} />
            <NavButton text="Guides" icon={AcademicCapIcon} />
            <NavButton text="Steam" icon={PuzzleIcon} />
        </ul>
    )
}