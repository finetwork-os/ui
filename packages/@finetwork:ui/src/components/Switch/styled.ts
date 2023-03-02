import {
  switchAnimation,
  switchAnimationBackwards,
  switchFunction,
} from '@finetwork:ui/src/animations'
import { styled } from '../../stitches.config'

export const StyledSwitch = styled('label', {
  position: 'relative',
  backgroundColor: '$colors$disabled',
  borderRadius: '40px',
  display: 'flex',
  alignItems: 'center',
  padding: '2px',
  transition: 'all .5s ease-in-out',
  cursor: 'pointer',
  variants: {
    size: {
      medium: {
        width: '40px',
        height: '20px',
      },
      large: {
        width: '50px',
        height: '25px',
      },
    },
  },
})

export const StyledSlider = styled('span', {
  position: 'absolute',
  backgroundColor: '#FFF',
  borderRadius: '50%',
  transition: 'all 0.5s ease-in-out',
  variants: {
    size: {
      medium: {
        width: '16px',
        height: '16px',
      },
      large: {
        width: '21px',
        height: '21px',
      },
    },
  },
})

export const StyledInput = styled('input', {
  display: 'none',
  [`&:checked ~ ${StyledSwitch}`]: {
    background: '$colors$primary',
  },
  variants: {
    size: {
      medium: {
        [`&:checked ~ ${StyledSwitch} ${StyledSlider}`]: {
          transform: 'translateX(20px)',
        },
      },
      large: {
        [`&:checked ~ ${StyledSwitch} ${StyledSlider}`]: {
          transform: 'translateX(25px)',
        },
      },
    },
    isFirstChecked: {
      false: {},
    },
  },
  compoundVariants: [
    {
      size: 'medium',
      isFirstChecked: 'false',
      css: {
        [`&:checked ~ ${StyledSwitch} ${StyledSlider}`]: {
          transform: 'translateX(20px)',
          animation: `${
            switchFunction('medium').switchAnimationForwards
          } 0.5s ease-in-out forwards`,
        },
        [`&:not(:checked) ~ ${StyledSwitch} ${StyledSlider}`]: {
          animation: `${
            switchFunction('medium').switchAnimationBackwards
          } 0.5s ease-in-out forwards`,
        },
      },
    },
    {
      size: 'large',
      isFirstChecked: 'false',
      css: {
        [`&:checked ~ ${StyledSwitch} ${StyledSlider}`]: {
          transform: 'translateX(25px)',
          animation: `${
            switchFunction('large').switchAnimationForwards
          } 0.5s ease-in-out forwards`,
        },
        [`&:not(:checked) ~ ${StyledSwitch} ${StyledSlider}`]: {
          animation: `${
            switchFunction('large').switchAnimationBackwards
          } 0.5s ease-in-out forwards`,
        },
      },
    },
  ],
})

export const StyledLoadingContainer = styled('div', {
  display: 'grid',
  justifyContent: 'center',
  alignContent: 'center',
  width: '100%',
})
