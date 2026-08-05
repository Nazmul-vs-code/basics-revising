'use client'

import { ThemeContext, useThemeContext } from "@/components/shared/ThemeContext";
import { useContext } from "react";

const ToggleTheme = () => {
    const theme = useThemeContext()
    console.log(theme , ' theme ')
    return (
        <div data-theme={theme} >
            <button className="btn btn-secondary ">Toggle Theme</button>            
        </div>
    );
};

export default ToggleTheme;