import { styled } from '../../stitches.config'

export const StyledTag = styled('div', {
  padding: '5px 10px',
  textTransform: 'uppercase',
  variants: {
    kind: {
      primary: {
        color: '$primaryText',
        backgroundColor: '$primary',
      },
      secondary: {
        color: '$secondaryText',
        backgroundColor: '$secondary',
      },
      tertiary: {
        color: '$tertiaryText',
        backgroundColor: '$tertiary',
      },
    },
    font: {
      primary: {
        fontFamily: '$primary',
      },
      secondary: {
        fontFamily: '$secondary',
      },
    },
  },
  defaultVariants: {
    kind: 'primary',
    font: 'primary',
  },
})
