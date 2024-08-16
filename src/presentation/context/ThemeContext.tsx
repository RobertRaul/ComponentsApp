import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { darkColors, lightColors, ThemeColors } from "../../config/theme/theme";
import { Appearance, AppState, useColorScheme } from "react-native";
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";


type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
    currentTheme: ThemeColor;
    colors: ThemeColors;
    setTheme: (theme: ThemeColor) => void;
    isDark: boolean;
}

export const MyThemeContext = createContext({} as ThemeContextProps);

export const MyThemeProvider = ({ children }: PropsWithChildren) => {

    const colorScheme = useColorScheme();
    const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light')
    const isDark = currentTheme === 'dark';
    const colors = isDark ? darkColors : lightColors;

    useEffect(() => {
        console.log(colorScheme)
        if (colorScheme === 'dark') {
            setTheme('dark')
        } else {
            setTheme('light')
        }

    }, [colorScheme])

    useEffect(() => {
        const subscription = AppState.addEventListener('change', nextAppState => {
            const colorSchem = Appearance.getColorScheme();
            setCurrentTheme(colorSchem === 'dark' ? 'dark' : 'light')
        });
    }, []);

    const setTheme = (theme: ThemeColor) => {
        setCurrentTheme(theme);
    }

    return (

        <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
            <MyThemeContext.Provider value={{
                currentTheme: currentTheme,
                colors: colors,
                //colors: (currentTheme === 'light' ? lightColors : darkColors),
                setTheme: setTheme,
                isDark: isDark
                //isDark: (currentTheme === 'light' ? false : true)
            }}>
                {children}
            </MyThemeContext.Provider>
        </NavigationContainer>

    )
}