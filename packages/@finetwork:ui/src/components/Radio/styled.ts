import { styled } from '../../stitches.config'
import { Paragraph4, Paragraph5 } from '../Typography'

export const StyledContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const StyledRadioGroupContainer = styled('div', {
  display: 'flex',
  variants: {
    direction: {
      horizontal: {
        flexDirection: 'row',
      },
      vertical: {
        flexDirection: 'column',
      },
    },
  },
  defaultVariants: {
    direction: 'horizontal',
  },
})

export const StyledRadioContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5em',
  padding: '0.3rem 0.5rem',
  borderRadius: '10px',
  cursor: 'pointer',
  variants: {
    size: {
      small: {
        fontSize: '20px',
        marginLeft: '-12px',
      },
      medium: {
        fontSize: '25px',
        marginLeft: '-12px',
      },
    },
    isDisabled: {
      true: {
        cursor: 'not-allowed',
      },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})

export const StyledTitle = styled(Paragraph4, {
  color: '#333333 !important',
})

export const StyledText = styled('label', {
  fontSize: '16px',
  cursor: 'pointer',
  variants: {
    fontSize: {
      small: {
        fontSize: '12px',
      },
      medium: {
        fontSize: '16px',
      },
    },
    isDisabled: {
      true: {
        color: '$disabled !important',
        cursor: 'not-allowed',
      },
    },
  },
  defaultVariants: {
    fontSize: 'medium',
  },
})

export const StyledErrorText = styled(Paragraph5, {
  color: '$error !important',
})

export const StyledInputContainer = styled('div', {
  display: 'table',
  alignItems: 'center',
  padding: '0.3rem',
  borderRadius: '50%',
  transition: '100ms background ease-in',
  '&:hover': {
    backgroundColor: '$colors$secondary200',
  },
  variants: {
    kind: {
      primary: {
        '&:hover': {
          backgroundColor: '$colors$secondary200',
        },
      },
      secondary: {
        '&:hover': {
          backgroundColor: '$colors$secondary200',
        },
      },
      tertiary: {
        '&:hover': {
          backgroundColor: '$colors$tertiary200',
        },
      },
    },
    size: {
      small: {
        width: '23px',
        height: '23px',
      },
      medium: {
        width: '33px',
        height: '33px',
      },
    },
    isDisabled: {
      true: {
        '&:hover': {
          cursor: 'not-allowed !important',
          backgroundColor: '$disabled100 !important',
        },
      },
    },
  },
  defaultVariants: {
    kind: 'primary',
    size: 'medium',
  },
})

export const StyledInput = styled('input', {
  '-webkit-apapparance': 'none',
  appearance: 'none',
  margin: 0,
  font: 'inherit',
  width: '1.5rem',
  height: '1.5rem',
  borderRadius: '50%',
  display: 'grid',
  placeContent: 'center',
  transform: 'translateY(0em)',
  cursor: 'pointer',
  '&:before': {
    content: '',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    transition: '115ms transform ease-in-out',
    transform: 'scale(0)',
    boxShadow: 'inset 14px 14px $colors$primary',
  },
  '&:checked': {
    '&:before': {
      transform: 'scale(1)',
    },
  },
  variants: {
    size: {
      small: {
        border: '1px solid #000',
        '&:before': {
          width: '8px',
          height: '8px',
        },
      },
      medium: {
        border: '1px solid #000',
        '&:before': {
          width: '10px',
          height: '10px',
        },
      },
    },
    kind: {
      primary: {
        '&:before': {
          boxShadow: 'inset 14px 14px $colors$primary',
        },
      },
      secondary: {
        '&:before': {
          boxShadow: 'inset 14px 14px $colors$secondary',
        },
      },
      tertiary: {
        '&:before': {
          boxShadow: 'inset 14px 14px $colors$tertiary',
        },
      },
    },
    isDisabled: {
      true: {
        cursor: 'not-allowed',
        border: '1px solid $disabled',
        '&:before': {
          boxShadow: 'inset 14px 14px $colors$disabled',
        },
      },
    },
  },
  defaultVariants: {
    size: 'medium',
    kind: 'primary',
  },
})
