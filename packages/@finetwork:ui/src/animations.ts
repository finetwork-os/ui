import { keyframes } from './stitches.config'

export const fadeIn = keyframes({
  '0%': { opacity: '0' },
  '100%': { opacity: '1' },
})

export const fadeOut = keyframes({
  '0%': { opacity: '1' },
  '100%': { opacity: '0' },
})

export const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const moveModalToTop = keyframes({
  '0%': { top: '52%' },
  '100%': { top: '50%' },
})
export const moveModalToBottom = keyframes({
  '0%': { top: '50%' },
  '100%': { top: '52%' },
})

export const bounceIn = keyframes({
  '0%': { transform: 'scale(0)' },
  '100%': { transform: 'scale(1)' },
})

export const radioCheck = keyframes({
  '0%': {
    width: 0,
    height: 0,
  },
  '100%': {
    width: 10,
    height: 10,
  },
})

export const slideDownAccordion = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
})

export const slideUpAccordion = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
})

export const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

export const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

export const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

export const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

export const scaleUpAnimation = keyframes({
  '0%': {
    transform: 'scale(0)',
  },
  '100%': {
    transform: 'scale(1) ',
  },
})
export const scaleDownAnimation = keyframes({
  '0%': {
    transform: 'scale(1)',
  },
  '100%': {
    transform: 'scale(0) ',
  },
})

export const rotateAnimation = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(-180deg) ',
  },
})

export const fadeInBackground = keyframes({
  '0%': { backgroundColor: 'rgba(0,0,0,0)' },
  '100%': { backgroundColor: 'rgba(0,0,0,0.5)' },
})

export const fadeOutBackground = keyframes({
  '0%': { backgroundColor: 'rgba(0,0,0,0)' },
  '100%': { backgroundColor: 'rgba(0,0,0,0)' },
})

export const animationSelect = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-10%)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

export const animationSelectMobile = keyframes({
  '0%': { opacity: 0, transform: 'translateY(100%)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})
