'use client'

import { ThemeContext, useThemeContext } from "@/components/shared/ThemeContext";
import { useContext, useState } from "react";

const ToggleTheme = () => {
    const theme = useThemeContext()
    // console.log(theme , ' theme ')
    const [newTheme, setNewTheme] = useState(theme);
    
    return (
        <div data-theme={newTheme || 'dark'} >
            <button
            onClick={()=> setNewTheme(!newTheme)}
            className="btn btn-secondary ">Toggle Theme</button>            
        </div>
    );
};

export default ToggleTheme;