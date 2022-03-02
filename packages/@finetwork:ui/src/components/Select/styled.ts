import { mauve } from '@radix-ui/colors'
import * as SelectPrimitive from '@radix-ui/react-select'
import { keyframes, styled } from '../../stitches.config'

export const StyledTrigger = styled(SelectPrimitive.SelectTrigger, {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,
  backgroundColor: '#fff',
  transition: 'all .3s ease',
  cursor: 'pointer',
  border: '1px  solid black',
  variants: {
    kind: {
      primary: {
        '&:hover': { backgroundColor: '$primary100' },
        '&:focus': {
          boxShadow: `0 0 0 1px $colors$primary300`,
          borderColor: '$primary300',
          color: '$primary',
        },
      },
      secondary: {
        '&:hover': { backgroundColor: '$secondary100' },
        '&:focus': {
          boxShadow: `0 0 0 2px $colors$secondary300`,
          borderColor: '$secondary300',
          color: '$secondary',
        },
      },
      tertiary: {
        '&:hover': { backgroundColor: '$tertiary100' },
        '&:focus': {
          boxShadow: `0 0 0 2px $colors$tertiary300`,
          borderColor: '$tertiary300',
          color: '$tertiary',
        },
      },
    },
    size: {
      small: {
        fontSize: 15,
        padding: '5px 10px',
      },
      medium: {
        fontSize: 18,
        padding: '8px 13px',
      },
      large: {
        fontSize: 25,
        padding: '11px 16px',
      },
    },
  },
  defaultVariants: {
    kind: 'primary',
    size: 'medium',
  },
})

export const StyledContent = styled(SelectPrimitive.Content, {
  overflow: 'hidden',
  backgroundColor: 'white',
  borderWidth: '1px',
  borderStyle: 'solid',
  position: 'relative',

  animation: `${keyframes({
    '0%': {
      opacity: 0,
      bottom: '-1rem',
    },
    '100%': {
      opacity: 1,
      bottom: 0,
    },
  })} .3s ease`,
  variants: {
    kind: {
      primary: {
        borderColor: '$primary',
        boxShadow:
          '0 0 5px $colors$primary100, 0 0 10px $colors$primary100, 0 0 15px $colors$primary100',
      },
      secondary: {
        borderColor: '$secondary',
        boxShadow:
          '0 0 5px $colors$secondary100, 0 0 10px $colors$secondary100, 0 0 15px $colors$secondary100',
      },
      tertiary: {
        borderColor: '$tertiary',
        boxShadow:
          '0 0 5px $colors$tertiary100, 0 0 10px $colors$tertiary100, 0 0 15px $colors$tertiary100',
      },
    },
  },
  defaultVariants: {
    kind: 'primary',
  },
})

export const StyledViewport = styled(SelectPrimitive.Viewport, {
  padding: 5,
})

export const StyledItem = styled(SelectPrimitive.Item, {
  all: 'unset',
  lineHeight: 1,
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  userSelect: 'none',
  cursor: 'pointer',
  '&[data-disabled]': {
    color: mauve.mauve8,
    pointerEvents: 'none',
  },
  variants: {
    kind: {
      primary: {
        color: '$primary',
        '&:focus': {
          backgroundColor: '$primary400',
          color: '$primary100',
        },
      },
      secondary: {
        color: '$secondary',
        '&:focus': {
          backgroundColor: '$secondary400',
          color: '$secondary100',
        },
      },
      tertiary: {
        color: '$tertiary',
        '&:focus': {
          backgroundColor: '$tertiary400',
          color: '$tertiary100',
        },
      },
    },
    size: {
      small: {
        fontSize: 15,
        padding: '5px 20px 5px 25px',
      },
      medium: {
        fontSize: 18,
        padding: '7px 25px 7px 25px',
      },
      large: {
        fontSize: 25,
        padding: '9px 30px 9px 30px',
      },
    },
  },
  defaultVariants: {
    kind: 'primary',
    size: 'medium',
  },
})

export const StyledLabel = styled(SelectPrimitive.Label, {
  fontSize: 12,
  lineHeight: '25px',
  variants: {
    size: {
      small: {
        fontSize: 13,
        padding: '3px 25px',
      },
      medium: {
        fontSize: 16,
        padding: '5px 25px',
      },
      large: {
        fontSize: 23,
        padding: '7px 30px',
      },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})

export const StyledSeparator = styled(SelectPrimitive.Separator, {
  height: 1,
  variants: {
    kind: {
      primary: {
        backgroundColor: '$primary100',
      },
      secondary: {
        backgroundColor: '$secondary100',
      },
      tertiary: {
        backgroundColor: '$tertiary100',
      },
    },
    size: {
      small: {
        margin: 5,
      },
      medium: {
        margin: 7,
      },
      large: {
        margin: 9,
      },
    },
  },
  defaultVariants: {
    kind: 'primary',
    size: 'medium',
  },
})

export const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  backgroundColor: 'white',
  variants: {
    kind: {
      primary: {
        color: '$primary600',
      },
      secondary: {
        color: '$secondary600',
      },
      tertiary: {
        color: '$tertiary600',
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
}

export const StyledScrollUpButton = styled(
  SelectPrimitive.ScrollUpButton,
  scrollButtonStyles
)

export const StyledScrollDownButton = styled(
  SelectPrimitive.ScrollDownButton,
  scrollButtonStyles
)
