import { PropsWithChildren, useEffect, useState } from "react";
import { formatNumber } from "../lib/utils";

type Props = {
    value: number,
    duration?: number,
    className?: string
}

const easeFunc = (t: number) => t * ( 2 - t );
const frameDuration = 1000 / 60;

export default function NumberCounter({ value, duration = 2000, className = "" }: Props) {
    const countTo = parseInt(value.toString(), 10);
    const [count, setCount] = useState(0);

    useEffect(() => {
        let frame = 0;
        const totalFrames = Math.round(duration / frameDuration);
        const counter = setInterval(() => {
            frame++;
            const progress = easeFunc(frame / totalFrames);
            setCount(countTo * progress);

            if (frame === totalFrames) {
                clearInterval(counter);
            }
        }, frameDuration);
    }, [])

    return <div className={className}>{ formatNumber(Math.floor(count)) }</div>
}