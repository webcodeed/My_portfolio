import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem("darkMode") === "true"
    })

    useEffect(() => {
        localStorage.setItem("darkMode", isDark)
    }, [isDark])
    const toggleTheme = () => setIsDark((prev) => !prev)

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)
