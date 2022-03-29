import { createElement, Fragment, useEffect, useState } from "react"
import { unified } from "unified";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react/lib";
import rehypeHighlight from "rehype-highlight";
import rehypeParse from "rehype-parse/lib";
import javascript from "highlight.js/lib/languages/javascript"

export const useProcessor = (content: string) => {
    const [render, setRender] = useState<unknown>(Fragment);
    
    useEffect(() => {
        const file = unified()
            .use(remarkParse)
            .use(remarkGfm)
            .use(remarkRehype)
            .use(rehypeReact, {createElement, Fragment})
            .processSync(content);

        setRender(file.result);
    }, [])

    return render;
}