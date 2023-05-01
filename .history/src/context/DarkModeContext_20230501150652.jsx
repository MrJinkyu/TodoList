const { createContext, useState } = require("react");

const DarkModeContext = createContext();

export function DarkModeProvider({children}){
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    }

    return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}