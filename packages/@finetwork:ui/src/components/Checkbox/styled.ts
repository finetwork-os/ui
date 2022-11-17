import { BooleanString, KINDS } from '../../types'
import { CheckedState, Indicator, Root } from '@radix-ui/react-checkbox'
import { bounceIn, fadeIn } from '../../animations'

import { StyledComponent } from '@stitches/react/types/styled-component'
import { styled } from '../../stitches.config'
import { CheckIcon } from '../icons'

export const CheckboxContainer = styled('div', {
  lineHeight: 1.1,
  display: 'grid',
  gridTemplateColumns: '1em auto',
  alignItems: 'center',
  variants: {
    size: {
      small: {
        fontSize: '18px',
      },
      medium: {
        fontSize: '25px',
      },
      large: {
        fontSize: '32px',
      },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})

export const StyledInput = styled('input', {
  '-webkit-apapparance': 'none',
  all: 'unset',
  borderWidth: 1,
  borderColor: '#000',
  width: '20px',
  height: '20px',
  transition: 'all .3s ease',
  borderStyle: 'solid',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:focus': {
    outline: '1px solid $colors$secondary',
  },
  '&:before': {
    transformOrigin: 'bottom left',
    clipPath: 'polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%)',
    content: '',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    transform: 'scale(0)',
    transition: '115ms transform ease-in-out',
    boxShadow: 'inset 14px 14px $colors$primary',
  },
  '&:checked::before': {
    transform: 'scale(1)',
  },
  '&:hover': {
    backgroundColor: '$colors$secondary200',
  },
  variants: {
    size: {
      small: {
        width: '16px',
        height: '16px',
        '&:before': {
          width: '8px',
          height: '8px',
        },
      },
      medium: {
        width: '20px',
        height: '20px',
        '&:before': {
          width: '10px',
          height: '10px',
        },
      },
      large: {
        width: '30px',
        height: '30px',
        '&:before': {
          width: '15px',
          height: '15px',
        },
      },
    },
    checkSize: {
      small: {
        '&:before': {
          width: '8px',
          height: '8px',
        },
      },
      medium: {
        '&:before': {
          width: '10px',
          height: '10px',
        },
      },
      large: {
        '&:before': {
          width: '15px',
          height: '15px',
        },
      },
    },
    kind: {
      primary: {
        '&:focus': {
          outline: '1px solid $colors$primary',
        },
        '&:before': {
          boxShadow: 'inset 14px 14px $colors$primary',
        },
        '&:hover': {
          backgroundColor: '$colors$primary200',
        },
      },
      secondary: {
        '&:focus': {
          outline: '1px solid $colors$secondary',
        },
        '&:before': {
          boxShadow: 'inset 14px 14px $colors$secondary',
        },
        '&:hover': {
          backgroundColor: '$colors$secondary200',
        },
      },
      tertiary: {
        '&:focus': {
          outline: '1px solid $colors$tertiary',
        },
        '&:before': {
          boxShadow: 'inset 14px 14px $colors$tertiary',
        },
        '&:hover': {
          backgroundColor: '$colors$tertiary200',
        },
      },
    },
    isDisabled: {
      true: {
        border: '1px solid $disabled !important',
        '&:hover': {
          cursor: 'not-allowed',
          backgroundColor: '$disabled100',
        },
      },
    },
    error: {
      true: {
        border: '1px solid $error !important',
        '&:focus': {
          outline: '1px solid $error !important',
        },
        '&:hover': {
          backgroundColor: '$colors$error100 !important',
        },
      },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})

export const StyledLabel = styled('label', {
  fontSize: '16px',
  variants: {
    isDisabled: {
      true: {
        cursor: 'not-allowed',
        color: '$disabled100',
      },
    },
    size: {
      small: {
        fontSize: '12px',
      },
      medium: {
        fontSize: '16px',
      },
      large: {
        fontSize: '25px',
      },
    },
  },
})

export const StyledInputContainer = styled('div', {
  display: 'grid',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '.4rem',
  borderRadius: '100%',
  width: 'min-content',
  transition: '100ms background ease-in',
  '&:hover': {
    backgroundColor: '$colors$secondary200',
  },
})
