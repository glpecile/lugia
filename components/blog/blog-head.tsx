import { usePathname } from "expo-router";
import React from "react";
import Head from "expo-router/head";
import type { PostInfo } from "~/interfaces/blog";

export function BlogHead({ info }: { info: PostInfo }) {
    const pathname = usePathname();
    const url = `https://lugia.glpecile.xyz${pathname}`;

    console.log(info);

    return (
        <Head>
            {/* <title>{info.title}</title> */}
            {/* <meta name="description" content={info.subtitle} /> */}
            {/* <meta name="keywords" content={info.tags.join(",")} /> */}
            {/*
            <meta property="og:image:alt" content={info.subtitle} />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={info.title} />
            <meta property="og:description" content={info.subtitle} />
            <meta property="og:url" content={url} />
            <meta property="og:published_time" content={info.date} />

            <meta property="twitter:url" content={url} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={info.title} />
            <meta name="twitter:description" content={info.subtitle} />
            */}

            {/* <meta property="og:image:secure_url" content={imgUrl} /> */}
            {/* <meta property="og:image" content={imgUrl} /> */}
            {/* <meta name="twitter:image" content={imgUrl} /> */}

            {/* <script id="ld+article" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "NewsArticle",
                    // image: [imgUrl],
                    headline: info.title,
                    preview: info.subtitle,
                    slug: info.slug,
                    url: url,
                    status: "Published",
                    datePublished: info.date,
                    dateModified: info.date,
                    author: ["Gian Luca Pecile"],
                })}
            </script> */}
        </Head>
    );
}
