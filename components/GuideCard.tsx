import { ArrowRightIcon } from "@heroicons/react/outline"

type Props = {
    borderColor?: string,
    textColor?: string
}

export default function GuideCard({ borderColor, textColor }: Props) {
    return (
        <div className={`rounded-md shadow-md border-t-4 ${borderColor ? borderColor : "border-slate-600"}`}>
            <div className="px-6 py-8 flex flex-col gap-y-4">
                <div className="font-bold text-2xl text-slate-700">
                    Test Card
                </div>
                <div className="text-lg text-slate-500">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto unde minus ipsa repellat necessitatibus consectetur perferendis dolorem magnam cumque dolore.
                </div>
                <div className={`inline-flex gap-x-2 items-center text-lg font-semibold ${textColor ? textColor : "text-slate-600"} hover:ml-1 transition-all cursor-pointer`}>
                    <div>Read more</div>
                    <ArrowRightIcon className="w-5 h-5" />
                </div>
            </div>
        </div>
    )
}