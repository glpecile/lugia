import { MDXComponents, MDXStyles } from "@bacons/mdx";
import { Link } from "expo-router";
import { Children, Fragment } from "react";
import { View } from "react-native";
import { Text } from "~/components/ui/text";
import {
    Code,
    H1,
    H2,
    H3,
    H4,
    P,
    BlockQuote as UiBlockQuote,
} from "../ui/typography";
import { Title } from "./title";

export function MarkdownTheme({ children }: { children: React.ReactNode }) {
    return (
        <MDXStyles
            img={{
                // marginBottom: "1.25em",
                borderRadius: "1rem",
                minHeight: 180,
                maxHeight: 480,
            }}
            hr={{
                paddingBottom: 10,
                marginBottom: 14,
                marginTop: 32,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 24,
            }}
        >
            <MDXComponents
                components={{
                    Title,
                    // Kbd,
                }}
                pre={({ style, children }) => {
                    return (
                        <pre style={style} className="mb-5">
                            {children}
                        </pre>
                    );
                }}
                em={({
                    firstChild,
                    firstOfType,
                    prevSibling,
                    lastChild,
                    parentName,
                    ...props
                }) => <em {...props} />}
                h1={({ style, children, ...props }) => {
                    return <H1 {...props}>{children}</H1>;
                }}
                h2={({ style, children, ...props }) => {
                    return <H2 {...props}>{children}</H2>;
                }}
                h3={({ style, children, ...props }) => {
                    return <H3 {...props}>{children}</H3>;
                }}
                h4={({ style, children, ...props }) => {
                    return <H4 {...props}>{children}</H4>;
                }}
                p={({ style, children, ...props }) => {
                    const image = Children.toArray(children).find((child) => {
                        return (
                            typeof child === "object" &&
                            "props" in child &&
                            child.props.src
                        );
                    });
                    if (image) {
                        // biome-ignore lint/complexity/noUselessFragments: Type related issues.
                        return <Fragment>{children}</Fragment>;
                    }

                    return <P style={style}>{children}</P>;
                }}
                code={({ style, children, ...props }) => {
                    return (
                        <Code style={style} {...props}>
                            {children}
                        </Code>
                    );
                }}
                br={() => <br />}
                blockquote={({
                    firstChild,
                    lastChild,
                    parentName,
                    style,
                    firstOfType,
                    children,
                    prevSibling,
                    ...props
                }) => {
                    return (
                        <UiBlockQuote {...props} style={[style]}>
                            {children}
                        </UiBlockQuote>
                    );
                }}
                a={({ href, children, style, className, ...props }) => {
                    return (
                        <Link
                            href={href}
                            target={
                                href.startsWith("http") ? "_blank" : undefined
                            }
                            style={[
                                style && {
                                    textDecorationLine: "underline",
                                },
                            ]}
                            className={className}
                            {...props}
                        >
                            {children}
                        </Link>
                    );
                }}
                // TODO: add image
                li={({
                    firstChild,
                    lastChild,
                    parentName,
                    prevSibling,
                    firstOfType,
                    style,
                    ...props
                }) => (
                    <li
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                        }}
                    >
                        <Text
                            {...props}
                            style={[style, { display: "block" }]}
                        />
                    </li>
                )}
                hr={({ style }) => (
                    <View style={style}>
                        {["", "", ""].map((v, i) => (
                            <View
                                key={String(i)}
                                style={{
                                    marginRight: i !== 2 ? 20 : 0,
                                    width: 3,
                                    height: 3,
                                    borderRadius: 1.5,
                                    backgroundColor: "#f2f5f7",
                                }}
                            />
                        ))}
                    </View>
                )}
            >
                {children}
            </MDXComponents>
        </MDXStyles>
    );
}
