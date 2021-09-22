import { createStitches } from '@stitches/react'

export const { styled, keyframes } = createStitches({
  media: {
    mobile: '(min-width: 360px)',
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1024px)',
    'desktop-xl': '(min-width: 1280px)',
  },
})
