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
    kind: {
      primary: {
        '&:focus-visible': {
          outline: 'none',
          boxShadow: '0 0 0 2px #fff, 0 0 0 4px $colors$primary',
        },
      },
      secondary: {
        '&:focus-visible': {
          outline: 'none',
          boxShadow: '0 0 0 2px #fff, 0 0 0 4px $colors$secondary',
        },
      },
      tertiary: {
        '&:focus-visible': {
          outline: 'none',
          boxShadow: '0 0 0 2px #fff, 0 0 0 4px $colors$tertiary',
        },
      },
    },
    type: {
      standard: {
        background: '#ceb3ff !important',
        '&:focus-visible': {
          outline: 'none',
          boxShadow: '0 0 0 2px #fff, 0 0 0 4px rgb(95, 10, 255)',
        },
      },
      success: {
        background: '#a6f8d1 !important',
        '&:focus-visible': {
          outline: 'none',
          boxShadow: '0 0 0 2px #fff, 0 0 0 4px rgb(0, 109, 57)',
        },
      },
      warning: {
        background: '#f0ea9e !important',
        '&:focus-visible': {
          outline: 'none',
          boxShadow: '0 0 0 2px #fff, 0 0 0 4px #D0C100',
        },
      },
      error: {
        background: '#f09e9e !important',
        '&:focus-visible': {
          outline: 'none',
          boxShadow: '0 0 0 2px #fff, 0 0 0 4px $colors$error',
        },
      },
      disabled: {
        background: '#cdcdcd !important',
        '&:focus-visible': {
          outline: 'none',
          boxShadow: '0 0 0 2px #fff, 0 0 0 4px #8E8E8E',
        },
      },
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
        background: '#E9E9E9 !important',
      },
    },
  },
})

export const StyledSlider = styled('span', {
  position: 'absolute',
  backgroundColor: '#FFF',
  borderRadius: '50%',
  transition: 'all 0.35s ease-in-out',
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
    disabled: {
      true: {
        backgroundColor: '$colors$disabled !important',
      },
    },
  },
})

export const StyledInput = styled('input', {
  display: 'none',
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
    kind: {
      primary: {
        [`&:checked ~ ${StyledSwitch}`]: {
          background: '$colors$primary',
        },
      },
      secondary: {
        [`&:checked ~ ${StyledSwitch}`]: {
          background: '$colors$secondary',
        },
      },
      tertiary: {
        [`&:checked ~ ${StyledSwitch}`]: {
          background: '$colors$tertiary',
        },
      },
    },
    switchType: {
      standard: {
        [`&:checked ~ ${StyledSwitch}`]: {
          background: 'rgb(95, 10, 255) !important',
        },
      },
      success: {
        [`&:checked ~ ${StyledSwitch}`]: {
          background: 'rgb(0, 109, 57) !important',
        },
      },
      warning: {
        [`&:checked ~ ${StyledSwitch}`]: {
          background: '#D0C100 !important',
        },
      },
      error: {
        [`&:checked ~ ${StyledSwitch}`]: {
          background: '$error !important',
        },
      },
      disabled: {
        [`&:checked ~ ${StyledSwitch}`]: {
          background: '#8E8E8E !important',
        },
      },
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
          } 0.35s ease-in-out forwards`,
        },
        [`&:not(:checked) ~ ${StyledSwitch} ${StyledSlider}`]: {
          animation: `${
            switchFunction('medium').switchAnimationBackwards
          } 0.35s ease-in-out forwards`,
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
          } 0.35s ease-in-out forwards`,
        },
        [`&:not(:checked) ~ ${StyledSwitch} ${StyledSlider}`]: {
          animation: `${
            switchFunction('large').switchAnimationBackwards
          } 0.35s ease-in-out forwards`,
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

export const StyledEnhancerContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
})
