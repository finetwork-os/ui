import { deepMerge, recalculateColors } from './utils'

import { FiTheme } from './components/Theme/types'
import { createStitches } from '@stitches/react'
import { initialTheme } from './components/Theme/initial-theme'

const media = {
  mobile: '(min-width: 360px)',
  tablet: '(min-width: 768px)',
  desktop: '(min-width: 1024px)',
  'desktop-xl': '(min-width: 1280px)',
}

export const {
  styled,
  css,
  theme,
  keyframes,
  globalCss: globalStyles,
  createTheme,
  getCssText,
} = createStitches({
  prefix: 'fi-ui',
  media,
})
