import { StyleSheet } from "react-native";

export interface ThemeColors {
    primary: string;
    text: string;
    background: string;
    cardBackground: string;
    buttonTextColor: string;
}

export const colors_them: ThemeColors = {
    primary: "#5856D6",
    text: "black",

    background: "#F3F2F7",
    cardBackground: "white",
    buttonTextColor: "white",
};

export const globalStyles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: colors_them.text,
    },
    subTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors_them.text,
    },

    mainContainer: {
        flex: 1,
        backgroundColor: colors_them.background,
    },
    globalMargin: {
        paddingHorizontal: 20,
        flex: 1,
    },

    btnPrimary: {
        backgroundColor: colors_them.primary,
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
    },
    btnPrimaryText: {
        color: colors_them.text,
        fontSize: 16,
    },
});