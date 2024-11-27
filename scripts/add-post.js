#!/usr/bin/env bun

const path = require("node:path");
const { write, stdin } = require("bun");

async function prompt(question) {
    process.stdout.write(`${question} `);
    return await new Promise((resolve) => {
        process.stdin.once("data", (data) => {
            resolve(data.toString().trim());
        });
    });
}

async function createBlogPost() {
    const blogDir = path.join(process.cwd(), "blog");

    const title = await prompt("Enter blog post title:");
    const shortTitle = await prompt("Enter short title:");
    const subtitle = await prompt("Enter subtitle:");
    const slug =
        (await prompt("Enter slug (or press enter for auto-generated):")) ||
        title
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, "");
    const tags = (await prompt("Enter tags (comma-separated):"))
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean);

    const date = new Date().toISOString();
    const author = "Gian Luca Pecile";

    const postDir = path.join(blogDir, slug);
    await Bun.write(
        path.join(postDir, "index.json"),
        JSON.stringify(
            {
                title,
                shortTitle,
                subtitle,
                author,
                date,
                slug,
                tags,
            },
            null,
            4,
        ),
    );

    await Bun.write(
        path.join(postDir, "index.js"),
        `module.exports = {
    ...require("./index.json"),
};`,
    );

    await Bun.write(
        path.join(postDir, "index.mdx"),
        `<Title date="${date}">${title}</Title>

Write your blog post content here.`,
    );

    console.log(`Blog post "${title}" created successfully in ${postDir}`);

    // End the execution
    process.exit(0);
}

createBlogPost().catch(console.error);
