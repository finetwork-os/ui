import { createStitches } from '@stitches/react'
import { lightTheme } from 'website/themes'

export const {
  styled,
  css,
  theme: createTheme,
  keyframes,
  globalCss: globalStyles,
  getCssText,
} = createStitches({
  theme: lightTheme,
  media: {
    mobile: `(min-width: ${lightTheme.sizes.mobile})`,
    tablet: `(min-width: ${lightTheme.sizes.tablet})`,
    desktop: `(min-width: ${lightTheme.sizes.desktop})`,
    'desktop-xl': `(min-width: ${lightTheme.sizes.desktop})`,
    'desktop-2xl': `(min-width: ${lightTheme.sizes['desktop-2xl']})`,
  },
})
