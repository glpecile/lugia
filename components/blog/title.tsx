import { View } from "react-native";
import { H1, P } from "../ui/typography";
// biome-ignore lint/style/useImportType: recursive error
import { PropsWithChildren } from "react";

type TitleProps = {
    date: string;
} & PropsWithChildren;

export function Title({ children, date: dateString }: TitleProps) {
    // Format date
    const date = new Date(dateString);
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    const year = date.getFullYear();

    const dateFormatted = `${month} ${day}, ${year}`;

    return (
        <View className="flex items-center flex-col gap-2">
            <H1
                style={{
                    borderRadius: 8,
                    paddingVertical: 4,
                    paddingHorizontal: 8,
                }}
                className="text-3xl"
            >
                {children}
            </H1>
            <P>{dateFormatted}</P>
        </View>
    );
}
