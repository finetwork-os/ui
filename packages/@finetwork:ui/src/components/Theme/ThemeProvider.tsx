import * as React from 'react'

import { createTheme, globalStyles } from '../../stitches.config'
import { deepMerge, recalculateColors } from '../../utils'

import { FiTheme, ThemeProviderProps } from './types'
import { ThemeContext } from './ThemeContext'
import { initialTheme } from './initial-theme'

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme = initialTheme,
}) => {
  const [computedTheme, fiUiTheme] = React.useMemo(() => {
    const mergedTheme = deepMerge(initialTheme, theme)
    mergedTheme.colors = recalculateColors(mergedTheme.colors || {})
    return [mergedTheme, createTheme('finetwork-ui', mergedTheme)]
  }, [theme, initialTheme])
  React.useEffect(() => {
    globalStyles({
      '*': {
        outline: 'none',
        boxSizing: 'border-box',
      },
    })()
    if (!document.body.className.includes(fiUiTheme.className)) {
      document.body.classList.add(fiUiTheme.toString())
    }
  }, [fiUiTheme])
  return (
    <ThemeContext.Provider value={{ theme: computedTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
