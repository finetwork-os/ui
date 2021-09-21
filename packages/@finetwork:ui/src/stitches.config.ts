import { deepMerge, recalculateColors } from './utils'

import { FiTheme } from './types/components/theme'
import { createStitches } from '@stitches/react'
import { initialTheme } from './components/Theme/initial-theme'

export const {
  styled,
  css,
  theme,
  keyframes,
  globalCss: globalStyles,
  createTheme,
} = createStitches({
  media: {
    mobile: '(min-width: 360px)',
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1024px)',
    'desktop-xl': '(min-width: 1280px)',
  },
})

export const getCss = (t: FiTheme = initialTheme) => {
  const mergedTheme = deepMerge(initialTheme, t)
  mergedTheme.colors = recalculateColors(mergedTheme.colors || {})
  const stitches = createStitches({
    theme: mergedTheme,
    media: {
      mobile: '(min-width: 360px)',
      tablet: '(min-width: 768px)',
      desktop: '(min-width: 1024px)',
      'desktop-xl': '(min-width: 1280px)',
    },
  })
  stitches.globalCss({
    '*': {
      outline: 'none',
      boxSizing: 'border-box',
    },
  })()
  return stitches.getCssText
}
