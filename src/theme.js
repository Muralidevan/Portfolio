import { createTheme } from "@material-ui/core/styles";
import { createContext, useState } from 'react';

const themeObj = {
  typography: {
    fontFamily: [
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helivetica Neue"'
    ]
  },
  palette: {
    primary: {
      main: '#e50914',
    },
    secondary: {
      main: '#0070f3'
    }
  }
}


const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

  const [isDark, setIsDark] = useState(false)

  const darkTheme = createTheme({
    ...themeObj,
    palette: {
      ...themeObj.palette,
      type: 'dark'
    }
  })

  const lightTheme = createTheme({
    ...themeObj,
    palette: {
      ...themeObj.palette,
      type: 'light'
    }
  })

  // window.matchMedia to detect preferred color scheme.

  const [theme, setTheme] = useState(
    (typeof window !== "undefined" && window.matchMedia('(prefers-color-scheme: dark)').matches) ? darkTheme : lightTheme
  )

  const toggleTheme = () => {
    setIsDark(!isDark)
    setTheme(isDark ? lightTheme : darkTheme)
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider >
  )
}

export { ThemeProvider, ThemeContext }
