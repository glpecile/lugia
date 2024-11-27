import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const mdxctx = require.context("../blog", true, /\.(mdx|js)$/);

export const getBlogPosts = () =>
    mdxctx
        .keys()
        .filter((i) => i.match(/\.js$/))
        .map((key) => mdxctx(key))
        .map(({ title, shortTitle, subtitle, date, slug }) => ({
            title: shortTitle ?? title,
            description: subtitle,
            value: new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
            }),
            date,
            href: `/blog/${slug}`,
        }))
        .sort((a, b) => b.date.localeCompare(a.date));

export async function generateStaticParams(): Promise<{ post: string }[]> {
    return mdxctx
        .keys()
        .filter((i) => i.match(/\.js$/))
        .map((key) => mdxctx(key).slug)
        .map((post) => ({ post }));
}
