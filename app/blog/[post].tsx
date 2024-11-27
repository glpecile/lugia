import { Stack, useLocalSearchParams } from "expo-router";
import { Fragment } from "react";
import { View } from "react-native";
import { MarkdownTheme } from "~/components/blog/markdown-theme";
import { Text } from "~/components/ui/text";
import { useBlogData } from "~/hooks/use-blog-data";

export default function Page() {
    const { post: postId } = useLocalSearchParams<{ post: string }>();
    const data = useBlogData(postId);

    if (!data) {
        return <Text>Not Found: {postId}</Text>;
    }

    const { info, MarkdownComponent } = data;

    return (
        <Fragment>
            <Stack.Screen
                options={{
                    title: info.title,
                }}
            />

            <View className="flex-1 justify-start items-center gap-5 p-6 bg-secondary/30">
                <MarkdownTheme>
                    <MarkdownComponent />
                </MarkdownTheme>
            </View>
        </Fragment>
    );
}
