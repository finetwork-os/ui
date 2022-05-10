import { styled } from '../../stitches.config'

export const InputFileContainer = styled('label', {
  padding: '1rem',
  cursor: 'pointer',
  minWidth: '5rem',
  display: 'inline-block',
  outline: 'none',
  variants: {
    kind: {
      primary: {
        backgroundColor: '$primary100',
        '&:focus-within': {
          boxShadow: '0 0 0 2px $colors$primary400',
        },
      },
      secondary: {
        backgroundColor: '$secondary100',
        '&:focus-within': {
          boxShadow: '0 0 0 2px $colors$secondary400',
        },
      },
      tertiary: {
        backgroundColor: '$tertiary100',
        '&:focus-within': {
          boxShadow: '0 0 0 2px $colors$tertiary400',
        },
      },
    },
    size: {
      small: {},
      medium: {},
      large: {},
    },
  },
  defaultVariants: {
    kind: 'primary',
    size: 'medium',
  },
})
