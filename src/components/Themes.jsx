import React from "react";
import { createContext } from "react";
import { useState } from "react";
//Create theme context

export const ThemeContext = createContext();

//Create theme Provider

export const Themes =({children})=>{
    const [theme ,setTheme]=useState('light')


    //Toggle function

    const toggleTheme=()=>{
       setTheme((prevTheme)=>(prevTheme==='light'?'dark':'light')) 
    }

    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}