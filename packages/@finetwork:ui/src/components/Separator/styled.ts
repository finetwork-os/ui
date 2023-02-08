import { styled } from '../../stitches.config'

export const StyledSeparator = styled('hr', {
  borderColor: '#ddd',
  width: '100%',
  variants: {
    orientation: {
      horizontal: {},
      vertical: {
        height: '100%',
        width: '1px',
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
