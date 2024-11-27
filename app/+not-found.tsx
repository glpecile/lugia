import { Link, Stack } from "expo-router";
import { Fragment } from "react";
import { View } from "react-native";
import { H1, P } from "~/components/ui/typography";

export default function NotFoundScreen() {
    return (
        <Fragment>
            <Stack.Screen options={{ title: "Oops!" }} />
            <View className="flex-1 justify-start items-center gap-5 p-3.5 bg-secondary/30">
                <H1>404</H1>

                <P>This screen doesn't exist.</P>

                <Link href="/">
                    <P className="underline underline-offset-2">
                        Go to home screen
                    </P>
                </Link>
            </View>
        </Fragment>
    );
}
