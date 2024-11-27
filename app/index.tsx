import { Link } from "expo-router";
import * as React from "react";
import { View } from "react-native";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "~/components/ui/card";
import { getBlogPosts } from "~/lib/utils";

export default function Screen() {
    const posts = getBlogPosts();

    return (
        <View className="flex-1 justify-start items-center gap-5 p-3 bg-secondary/30">
            {posts.map((item) => (
                <View key={item.date} className="py-4">
                    {
                        <Link
                            // @ts-expect-error: the date is always a string
                            href={`${item.href}`}
                            key={item.title}
                            className="w-full"
                        >
                            <Card className="w-fit">
                                <CardHeader>
                                    <CardTitle>{item.title}</CardTitle>
                                    <CardDescription>
                                        {item.description}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </Link>
                    }
                </View>
            ))}
        </View>
    );
}
