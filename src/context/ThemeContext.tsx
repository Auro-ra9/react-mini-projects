import { createContext, ReactNode, useContext, useState } from "react";

type TypeThemeContext={
    theme:string;
    toggleTheme:()=>void
}

const ThemeContext= createContext<TypeThemeContext|undefined>(undefined);

export const useTheme=()=>{
    const context= useContext(ThemeContext);
    if(!context){   
        throw new Error('useTheme must be inside the provider') 
    }

    return context;

}


const ThemeProvider=({children}:{children: ReactNode})=>{
    const [theme, setTheme]= useState<string>('light');

    const toggleTheme=()=>{
        setTheme((prevTheme)=> (prevTheme==='light'?'dark':'light'));
    }


    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider