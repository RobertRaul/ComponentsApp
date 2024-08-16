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

export const lightColors: ThemeColors = {
    primary: "#5856D6",
    text: "black",

    background: "#F3F2F7",
    cardBackground: "white",
    buttonTextColor: "white",
};

export const darkColors: ThemeColors = {
    primary: "#5856D6",
    text: "white",

    background: "#090909",
    cardBackground: "#2d2d2d",
    buttonTextColor: "white",
};

export const globalStyles = StyleSheet.create({

    myInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderBlockColor: 'rgba(0,0,0,0.3)',
        borderRadius: 10,
       // color: colors_them.text
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        //color: colors_them.text,
    },
    subTitle: {
        fontSize: 20,
        fontWeight: "bold",
        //color: colors_them.text,
    },

    mainContainer: {
        flex: 1,
        //backgroundColor: colors_them.background,
    },
    globalMargin: {
        paddingHorizontal: 20,
        flex: 1,
    },

    btnPrimary: {
        //backgroundColor: colors_them.primary,
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
    },
    btnPrimaryText: {
        //color: colors_them.text,
        fontSize: 16,
    },
});