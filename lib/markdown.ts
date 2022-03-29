import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { BlogFrontMatter, BlogPost } from "../types";

const postDir = join(process.cwd(), "_posts");

export function getPostFiles() {
    return fs.readdirSync(postDir);
}

export function getPost(filename: string): BlogPost {
    const filePath = join(postDir, filename);
    const fileData = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileData);

    const words = content.split(" ").length;
    const averageWPM = 200;
    const readTime = Math.round(words / averageWPM);

    return { matter: data as BlogFrontMatter, content, readTime };
}

export function getPostBySlug(slug: string): BlogPost | undefined {
    const posts = getAllPosts();
    
    for (const post of posts) {
        if (post.matter.slug === slug)
            return post;
    }

    return undefined;
}

export function getAllPosts() {
    const files = getPostFiles();
    return files.map(file => getPost(file));
}