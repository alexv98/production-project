import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from './ThemeContext'
import React, {useMemo, useState} from "react";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT


const ThemeProvider: React.FC<React.PropsWithChildren> = ({children}) => {

  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;