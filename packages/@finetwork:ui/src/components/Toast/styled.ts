import * as ToastPrimitive from '@radix-ui/react-toast'
import { styled, keyframes } from '../../stitches.config'
import { slate } from '@radix-ui/colors'
import { fadeOut } from '../../animations'

const VIEWPORT_PADDING = 25

const slideInRight = keyframes({
  '0%': { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  '70%': {
    transform: 'translateX(-10px)',
  },
  '100%': { transform: 'translateX(0)' },
})
const slideInLeft = keyframes({
  '0%': { transform: `translateX(calc(0 + ${VIEWPORT_PADDING}px))` },
  '70%': {
    transform: 'translateX(10px)',
  },
  '100%': { transform: 'translateX(0)' },
})
const slideInTop = keyframes({
  '0%': { transform: `translateY(calc(-100% + ${VIEWPORT_PADDING}px))` },
  '70%': {
    transform: 'translateY(10px)',
  },
  '100%': { transform: 'translateY(0)' },
})
const slideInBottom = keyframes({
  '0%': { transform: `translateY(calc(100% + ${VIEWPORT_PADDING}px))` },
  '70%': {
    transform: 'translateY(-10px)',
  },
  '100%': { transform: 'translateY(0)' },
})
const swipeOutRight = keyframes({
  '0%': { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  '50%': {
    transform: 'translateX(-30px)',
  },
  '100%': { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})
const swipeOutLeft = keyframes({
  '0%': { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  '50%': {
    transform: 'translateX(30px)',
  },
  '100%': { transform: `translateX(calc(-100% + ${VIEWPORT_PADDING}px))` },
})

export const StyledViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  variants: {
    direction: {
      'top-left': {
        top: 0,
        left: 0,
      },
      'top-right': {
        top: 0,
        right: 0,
      },
      'top-center': {
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
      },
      'bottom-left': {
        bottom: 0,
        left: 0,
      },
      'bottom-right': {
        bottom: 0,
        right: 0,
      },
      'bottom-center': {
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
      },
    },
  },
  defaultVariants: {
    direction: 'bottom-left',
  },
})

export const StyledToast = styled(ToastPrimitive.Root, {
  backgroundColor: 'white',
  border: '1px solid black',
  padding: 15,
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: 15,
  alignItems: 'center',
  boxShadow:
    '0 0 5px $colors$primary100, 0 0 10px $colors$primary100, 0 0 15px $colors$primary100',
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe-direction="left"]': {
    '@media (prefers-reduced-motion: no-preference)': {
      '&[data-state="open"]': {
        animation: `${slideInLeft} 300ms cubic-bezier(0.16, 1, 0.3, 1)`,
      },
      '&[data-state="closed"]': {
        animation: `${swipeOutLeft} 300ms ease-in forwards`,
      },
      '&[data-swipe="end"]': {
        animation: `${swipeOutLeft} 300ms ease-out forwards`,
      },
    },
  },
  '&[data-swipe-direction="right"]': {
    '@media (prefers-reduced-motion: no-preference)': {
      '&[data-state="open"]': {
        animation: `${slideInRight} 300ms cubic-bezier(0.16, 1, 0.3, 1)`,
      },
      '&[data-state="closed"]': {
        animation: `${swipeOutRight} 300ms ease-in forwards`,
      },
      '&[data-swipe="end"]': {
        animation: `${swipeOutRight} 300ms ease-out forwards`,
      },
    },
  },
})

export const StyledTitle = styled(ToastPrimitive.Title, {
  gridArea: 'title',
  marginBottom: 5,
  fontWeight: 500,
  color: slate.slate12,
  fontSize: 15,
})

export const StyledDescription = styled(ToastPrimitive.Description, {
  gridArea: 'description',
  margin: 0,
  color: slate.slate11,
  fontSize: 13,
  lineHeight: 1.3,
})

export const StyledAction = styled(ToastPrimitive.Action, {
  gridArea: 'action',
})
