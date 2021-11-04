import * as TabsPrimitive from '@radix-ui/react-tabs'

import { mauve } from '@radix-ui/colors'
import { styled } from '../../stitches.config'

export const StyledTabs = styled(TabsPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

export const StyledList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: 'flex',
  variants: {
    align: {
      bottom: {
        borderBottom: `2px solid ${mauve.mauve6}`,
      },
      top: {
        borderTop: `2px solid ${mauve.mauve6}`,
      },
    },
  },
  defaultVariants: {
    align: 'bottom',
  },
})

export const StyledTrigger = styled(TabsPrimitive.Trigger, {
  all: 'unset',
  fontFamily: 'inherit',
  padding: '0 20px',
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 15,
  lineHeight: 1,
  userSelect: 'none',
  cursor: 'pointer',
  variants: {
    align: {
      bottom: {
        '&[data-state="active"]': {
          boxShadow: '0 2px 0 0 currentColor',
        },
      },
      top: {
        '&[data-state="active"]': {
          boxShadow: '0 -2px 0 0 currentColor',
        },
      },
    },
    kind: {
      primary: {
        '&:hover': { color: '$primary' },
        '&[data-state="active"]': {
          color: '$primary',
        },
        '&:focus': {
          boxShadow: '0 0 0 2px $colors$primary300 !important',
        },
      },
      secondary: {
        '&:hover': { color: '$secondary' },
        '&[data-state="active"]': {
          color: '$secondary',
        },
        '&:focus': {
          boxShadow: '0 0 0 2px $colors$primary300 !important',
        },
      },
      tertiary: {
        '&:hover': { color: '$tertiary' },
        '&[data-state="active"]': {
          color: '$tertiary',
        },
        '&:focus': {
          boxShadow: '0 0 0 2px $colors$primary300 !important',
        },
      },
    },
  },
  defaultVariants: {
    kind: 'primary',
    align: 'bottom',
  },
})

export const StyledContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  padding: 20,
  borderBottomLeftRadius: 6,
  borderBottomRightRadius: 6,
  outline: 'none',
})
