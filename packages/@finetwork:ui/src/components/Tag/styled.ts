import { styled } from '../../stitches.config'
import { Paragraph6 } from '../Typography'

export const StyledTag = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '.3rem',
  padding: '5px 10px',
  background: '#B4C4F9',
  width: 'fit-content',
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
    type: {
      standard: {
        background: 'rgb(244, 238, 255) !important',
      },
      success: {
        background: 'rgb(218, 252, 236) !important',
      },
      warning: {
        background: '#F7F4CD !important',
      },
      error: {
        background: '#F7CDCD !important',
      },
      disabled: {
        background: '#E9E9E9 !important',
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
    type: {
      standard: {
        color: 'rgb(95, 10, 255) !important',
      },
      success: {
        color: 'rgb(0, 109, 57) !important',
      },
      warning: {
        color: '#D0C100 !important',
      },
      error: {
        color: '$error !important',
      },
      disabled: {
        color: '#8E8E8E !important',
      },
    },
  },
})
