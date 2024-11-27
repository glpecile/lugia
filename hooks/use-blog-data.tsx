import { type ElementType, useMemo } from "react";
import type { PostInfo } from "~/interfaces/blog";
import { mdxctx } from "~/lib/utils";

export function useBlogData(postId: string): null | {
    MarkdownComponent: ElementType;
    info: PostInfo;
} {
    const MDKey = useMemo(
        () => mdxctx.keys().find((p) => p === `./${postId}/index.mdx`),
        [postId],
    );

    const mdinfo = useMemo(
        () => mdxctx.keys().find((p) => p === `./${postId}/index.js`),
        [postId],
    );

    const MD = MDKey ? mdxctx(MDKey).default : null;
    const Info = mdinfo ? mdxctx(mdinfo) : null;

    if (!MD || !Info) {
        return null;
    }
    return { MarkdownComponent: MD, info: Info };
}
