import { deepMerge, recalculateColors } from './utils'

import { FiTheme } from './components/Theme/types'
import * as Stitches from '@stitches/react'
import { initialTheme } from './components/Theme/initial-theme'

const media = {
  mobile: '(min-width: 360px)',
  tablet: '(min-width: 768px)',
  desktop: '(min-width: 1024px)',
  'desktop-xl': '(min-width: 1280px)',
}

const prefix = 'fi-ui'

export const {
  styled,
  css,
  theme,
  keyframes,
  globalCss: globalStyles,
  createTheme,
  getCssText,
  config,
} = Stitches.createStitches({
  media,
})

export type CSS = Stitches.CSS<typeof config>

// export const getCssText = (t: FiTheme = initialTheme) => {
//   const mergedTheme = deepMerge(initialTheme, t)
//   mergedTheme.colors = recalculateColors(mergedTheme.colors || {})
//   const stitches = createStitches({
//     theme: mergedTheme,
//     media,
//   })
//   return stitches.getCssText
// }
