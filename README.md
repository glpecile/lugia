# Lugia 🐉

This is an [Expo](https://expo.dev) project created using [rnreusables](https://rnr-docs.vercel.app/getting-started/introduction/) and [@bacons/mdx](https://github.com/EvanBacon/expo-mdx).

![demo](https://github.com/user-attachments/assets/1e1845bf-90fa-40ff-93d9-34125c40fa4f)

## Run locally 🚀

1. [Install Bun](https://bun.sh/docs/installation).

2. Clone the repo:

    ```bash
    git clone https://github.com/glpecile/lugia.git
    ```

3. Install dependencies:

    ```bash
    bun install
    ```

4. Start the app on your desired platform with either:

    ```bash
     bun run web
     bun run ios
     bun run android
    ```

    This will start the app on port [8081](http://localhost:8081/).

## Add a post ✍️

When you're ready, run:

```bash
bun run add-post
```

You'll be prompted the following questions:

```plaintext
Enter blog post title:
Enter short title:
Enter subtitle:
Enter slug (or press enter for auto-generated):
Enter tags (comma-separated):
```

This will then create a new `index.mdx` post inside the **blog** directory where you can edit it in markdown format.

## Next steps 📝

-   [ ] Dogfood
-   [ ] Add pre-commit linting
-   [ ] Add search
-   [ ] Add pagination
-   [ ] Add post views
-   [ ] Add comments
-   [x] Add sub-domain (https://lugia.glpecile.xyz)

## Acknowledgements 🙏

-   [Evan Bacon](https://bsky.app/profile/bacon.bsky.social) for his amazing [open source blog](https://github.com/EvanBacon/evanbacon.dev) and contributions.
-   [Zach Nugent](https://bsky.app/profile/mrzachnugent.com) without his work on [rnreusables](https://rnr-docs.vercel.app/getting-started/introduction/) this project wouldn't be possible.
-   [Dan Stepanov](https://bsky.app/profile/onlydans.gg) and [Mark Lawlor](https://bsky.app/profile/marklawlor.bsky.social) for their work on [nativewind](https://www.nativewind.dev/).
-   [Samuel Newman](https://bsky.app/profile/samuel.bsky.team) for the [first blog post idea](https://mozzius-dev.vercel.app/post/3l772nawzvw2k).
