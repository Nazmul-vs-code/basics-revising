'use client'
import { createContext, useContext } from "react";

export const ThemeContext = createContext<null | string>(null);

export function useThemeContext() {
    const theme = useContext(ThemeContext)

    if (theme == undefined){
        throw new Error('Undefined ')
    }
    return theme
}