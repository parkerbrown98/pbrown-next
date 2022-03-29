import Image from "next/image";
import { BlogPost } from "../types";
import LinkButton from "./LinkButton";

export default function Hero() {
    return (
        <div className="grid grid-cols-2 gap-x-4">
            <div className="inline-flex w-10/12 justify-center flex-col gap-y-8">
                <h2 className="text-slate-700 text-6xl font-bold">Greetings, Earthling!</h2>
                <p className="text-xl text-slate-500">This is my place to unwind, document, and share. Below are some of my most recent blog posts, guides, and job experiences.</p>
                <div className="flex gap-x-4">
                    <LinkButton href="#">See all posts</LinkButton>
                    <LinkButton href="#" theme="light">View resume</LinkButton>
                </div>
            </div>
            {/* <div className="relative overflow-hidden w-full object-cover">
                <Image className="absolute w-full h-auto rounded-md top-0 left-0" src="/exterior.jpg" width={1066} height={740} />
            </div> */}
            <div className="flex justify-center items-center">
                <img src="/carbon.svg" />
            </div>
        </div>
    )
}