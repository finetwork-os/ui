import * as SelectPrimitive from '@radix-ui/react-select'
import { styled } from '../../stitches.config'

export const StyledTrigger = styled(SelectPrimitive.SelectTrigger, {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 5,
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
        padding: '5px 15px',
      },
      medium: {
        fontSize: 18,
        padding: '8px 18px',
      },
      large: {
        fontSize: 25,
        padding: '11px 21px',
      },
    },
  },
  defaultVariants: {
    kind: 'primary',
    size: 'small',
  },
})

export const StyledContent = styled(SelectPrimitive.Content, {
  overflow: 'hidden',
  backgroundColor: 'white',
  border: '1px solid #000',
  // boxShadow:
  //   '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
})

export const StyledViewport = styled(SelectPrimitive.Viewport, {
  padding: 5,
})

export const StyledItem = styled(SelectPrimitive.Item, {
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 35px 0 25px',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    // color: mauve.mauve8,
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
  },
  defaultVariants: {
    kind: 'primary',
  },
})

export const StyledLabel = styled(SelectPrimitive.Label, {
  padding: '0 25px',
  fontSize: 12,
  lineHeight: '25px',
})

export const StyledSeparator = styled(SelectPrimitive.Separator, {
  height: 1,
  margin: 5,
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
  },
  defaultVariants: {
    kind: 'primary',
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
  },
  defaultVariants: {
    kind: 'primary',
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
