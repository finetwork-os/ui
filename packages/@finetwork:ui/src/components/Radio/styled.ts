import { styled } from '../../stitches.config'

export const StyledContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.7rem',
})

export const StyledRadioGroupContainer = styled('div', {
  display: 'flex',
  gap: '0.4rem',
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
  lineHeight: 1.1,
  display: 'grid',
  gridTemplateColumns: '1em auto',
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

export const StyledText = styled('label', {
  fontSize: '16px',
  cursor: 'pointer',
  variants: {
    size: {
      small: {
        fontSize: '12px',
        marginTop: '3px',
      },
      medium: {
        fontSize: '16px',
        marginTop: '5px',
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

export const StyledInputContainer = styled('div', {
  display: 'grid',
  justifyContent: 'center',
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
        width: '28px',
        height: '28px',
      },
      medium: {
        width: '35px',
        height: '35px',
      },
    },
    isDisabled: {
      true: {
        '&:hover': {
          backgroundColor: '$disabled',
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
  width: '1em',
  height: '1em',
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
    transform: 'scale(0)',
    transition: '115ms transform ease-in-out',
    boxShadow: 'inset 14px 14px $colors$primary',
  },
  '&:checked::before': {
    transform: 'scale(1)',
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
        border: '1px solid $disabled100',
      },
    },
  },
  defaultVariants: {
    size: 'medium',
    kind: 'primary',
  },
})
