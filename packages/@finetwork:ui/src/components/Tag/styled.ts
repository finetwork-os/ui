import { styled } from '../../stitches.config'
import { Paragraph6 } from '../Typography'

export const StyledTag = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '.3rem',
  padding: '5px 10px',
  background: '#B4C4F9',
  variants: {
    kind: {
      primary: {
        background: '$primary',
      },
      secondary: {
        background: '$secondary',
      },
      tertiary: {
        background: '$tertiary',
      },
    },
  },
})

export const StyledParagraph6 = styled(Paragraph6, {
  variants: {
    bold: {
      true: {
        fontWeight: 'bold !important',
      },
    },
    kind: {
      primary: {
        color: 'white',
      },
      secondary: {
        color: 'white',
      },
      tertiary: {},
    },
  },
})
