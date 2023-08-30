import * as React from 'react'

import { createTheme, globalStyles } from '../../stitches.config'
import { deepMerge, recalculateColors } from '../../utils'

import { ThemeContext } from './ThemeContext'
import { initialTheme } from './initial-theme'
import { FiTheme } from './types'

export const ThemeProvider: React.FC<{
  theme: FiTheme
  children?: React.ReactNode
}> = ({ children, theme = initialTheme }) => {
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
