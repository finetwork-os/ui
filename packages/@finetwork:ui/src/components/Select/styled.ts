import { blackA } from '@radix-ui/colors'
import * as SelectPrimitive from '@radix-ui/react-select'
import { styled } from '../../stitches.config'

export const StyledTrigger = styled(SelectPrimitive.SelectTrigger, {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 13,
  lineHeight: 1,
  height: 35,
  gap: 5,
  backgroundColor: 'white',
  // color: violet.violet11,
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  '&:focus': { boxShadow: `0 0 0 2px black` },
  variants: {
    kind: {
      primary: {
        '&:hover': { backgroundColor: '$primary300' },
        color: '$primary',
      },
      secondary: {
        '&:hover': { backgroundColor: '$secondary300' },
        color: '$secondary',
      },
      tertiary: {
        '&:hover': { backgroundColor: '$tertiary300' },
        color: '$tertiary',
      },
    },
  },
  defaultVariants: {
    kind: 'primary',
  },
})

export const StyledContent = styled(SelectPrimitive.Content, {
  overflow: 'hidden',
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
})

export const StyledViewport = styled(SelectPrimitive.Viewport, {
  padding: 5,
})

export const StyledItem = styled(SelectPrimitive.Item, {
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  borderRadius: 3,
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
          backgroundColor: '$primary',
          color: '$primary200',
        },
      },
      secondary: {
        color: '$secondary',
        '&:focus': {
          backgroundColor: '$secondary',
          color: '$secondary200',
        },
      },
      tertiary: {
        color: '$tertiary',
        '&:focus': {
          backgroundColor: '$tertiary',
          color: '$tertiary200',
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
        backgroundColor: '$primary600',
      },
      secondary: {
        backgroundColor: '$secondary600',
      },
      tertiary: {
        backgroundColor: '$tertiary600',
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
