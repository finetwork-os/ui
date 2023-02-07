import { styled } from '../../stitches.config'

export const StyledSeparator = styled('hr', {
  borderColor: '#ddd',
  width: '100%',
  variants: {
    orientation: {
      horizontal: {},
      vertical: {
        transform: 'rotate(90deg)',
      },
    },
    type: {
      solid: {
        borderStyle: 'solid',
      },
      dashed: {
        borderStyle: 'dashed',
      },
      dotted: {
        borderStyle: 'dotted',
      },
    },
    kind: {
      primary: {
        borderColor: '$primary',
      },
      secondary: {
        borderColor: '$secondary',
      },
      tertiary: {
        borderColor: '$tertiary',
      },
    },
    align: {
      start: {
        alignSelf: 'start',
      },
      center: {
        alignSelf: 'center',
      },
      end: {
        alignSelf: 'end',
      },
    },
  },
})
