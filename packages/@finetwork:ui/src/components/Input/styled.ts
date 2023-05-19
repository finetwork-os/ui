import { BooleanString, FONTS, KINDS, SIZES } from '../../types'

import { StyledComponent } from '@stitches/react/types/styled-component'
import { styled } from '../../stitches.config'
import { CheckIcon } from '../icons'

const stylesMessage = {
  fontWeight: 500,
  variants: {
    size: {
      small: {
        fontSize: '12px',
        lineHeight: '18px',
      },
      medium: {
        fontSize: '14px',
        lineHeight: '20px',
      },
      large: {
        fontSize: '16px',
        lineHeight: '22px',
      },
    },
    error: {
      true: {
        color: '$error',
      },
      false: {},
    },
    disabled: {
      true: {
        color: '$disabled',
      },
      false: {},
    },
  },
  defaultVariants: {
    size: 'medium',
  },
}

export const StyledContainer = styled('div', {
  display: 'grid',
  gap: '5px',
  width: '100%',
})
export const StyledLabel: StyledComponent<
  'label',
  {
    size?: SIZES
    kind?: KINDS
    error?: BooleanString
    disabled?: BooleanString
    font?: FONTS
  },
  any,
  any
> = styled('label', {
  ...stylesMessage,
  variants: {
    ...stylesMessage.variants,
    font: {
      primary: {
        fontFamily: '$primary',
      },
      secondary: {
        fontFamily: '$secondary',
      },
    },
    kind: {
      primary: {
        color: '$primaryText',
      },
      secondary: {
        color: '$secondaryText',
      },
      tertiary: {
        color: '$tertiaryText',
      },
    },
  },
  compoundVariants: [
    {
      disabled: true,
      error: true,
      css: {
        color: '$disabled',
      },
    },
  ],
  defaultVariants: {
    font: 'primary',
  },
})

export const StyledMessageContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '0.3rem',
  flexWrap: 'nowrap',
  alignItems: 'center',
  '& svg path': {
    fill: '$error',
  },
})
export const StyledMessage = styled('span', {
  ...stylesMessage,
  color: '#aaa',
  variants: {
    ...stylesMessage.variants,
    size: {
      small: {
        fontSize: '10px',
        lineHeight: '12px',
      },
      medium: {
        fontSize: '12px',
        lineHeight: '16px',
      },
      large: {
        fontSize: '14px',
        lineHeight: '20px',
      },
    },
  },
  compoundVariants: [
    {
      disabled: true,
      error: true,
      css: {
        color: '$disabled',
      },
    },
  ],
  defaultVariants: {
    size: 'medium',
  },
})
export const StyledContainerInput = styled('div', {
  display: 'flex',
  borderWidth: '1px',
  borderStyle: 'solid',
  width: '100%',
  transition: 'all .3s ease',
  variants: {
    size: {
      small: {
        ...stylesMessage.variants.size.small,
      },
      medium: {
        ...stylesMessage.variants.size.medium,
      },
      large: {
        ...stylesMessage.variants.size.large,
      },
    },
    kind: {
      primary: {
        borderColor: '$primaryText',
        '&:focus-within': {
          borderColor: '$primary',
        },
      },
      secondary: {
        borderColor: '$primaryText',
        '&:focus-within': {
          borderColor: '$secondary',
        },
      },
      tertiary: {
        borderColor: '$tertiaryText',
        '&:focus-within': {
          borderColor: '$tertiary',
        },
      },
    },
    error: {
      true: {
        borderColor: '$error',
      },
    },
    success: {
      true: {
        borderColor: '$success',
      },
    },
    disabled: {
      true: {
        borderColor: '$disabled',
        color: '$disabled',
        cursor: 'not-allowed',
      },
    },
  },
  compoundVariants: [
    {
      disabled: true,
      error: true,
      success: true,
      css: {
        borderColor: '$disabled',
        color: '$disabled',
        cursor: 'not-allowed',
      },
    },
    {
      disabled: true,
      kind: 'primary' || 'secondary' || 'tertiary',
      css: {
        borderColor: '$disabled',
        color: '$disabled',
        cursor: 'not-allowed',
      },
    },
    {
      error: true,
      success: true,
      css: {
        borderColor: '$error',
      },
    },
  ],
  defaultVariants: {
    size: 'medium',
    kind: 'primary',
  },
})
export const StyledContainerInputPassword = styled('div', {
  display: 'flex',
  width: '100%',
})
export const StyledEyeButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  background: 'none',
  transition: 'all .5s ease-in-out',
  '&:focus-visible': {
    outline: 'none',
    boxShadow: '0 0 0 2px #fff, 0 0 0 4px $colors$primary',
  },
})
export const StyledEnhancer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  color: '#aaa ',
  variants: {
    isAnotherEnhancer: {
      true: {
        padding: '0',
      },
    },
    isStartEnhancer: {
      true: {
        padding: '0 14px',
      },
    },
  },
})

export const StyledSuccessIcon = styled(CheckIcon, {
  color: '$success',
})

export const IconsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 14px',
})
export const StyledInput: StyledComponent<
  'input',
  {
    size?: SIZES
    kind?: KINDS
    startEnhancer?: BooleanString
    isDisabled?: BooleanString
    font?: FONTS
  },
  any,
  any
> = styled('input', {
  outline: 'none',
  border: 0,
  backgroundColor: 'transparent',
  fontWeight: 300,
  width: '100%',
  height: '100%',
  paddingRight: '14px',
  paddingLeft: '14px',
  fontSize: '16px',
  '&::placeholder': {
    color: '#A7A7A7',
  },
  '@tabletXl': {
    fontSize: 'unset',
  },
  variants: {
    font: {
      primary: {
        fontFamily: '$primary',
      },
      secondary: {
        fontFamily: '$secondary',
      },
    },
    kind: {
      primary: {
        color: '$primaryText',
      },
      secondary: {
        color: '$primaryText',
      },
      tertiary: {
        color: '$tertiaryText',
      },
    },
    size: {
      small: {
        paddingTop: '10px',
        paddingBottom: '10px',
      },
      medium: {
        paddingTop: '12px',
        paddingBottom: '12px',
      },
      large: {
        paddingTop: '14px',
        paddingBottom: '14px',
      },
    },
    startEnhancer: {
      true: {
        paddingLeft: 0,
      },
      false: {},
    },
    isDisabled: {
      true: {
        color: '$disabled',
        pointerEvents: 'none',
      },
      false: {},
    },
  },
  defaultVariants: {
    font: 'primary',
    size: 'medium',
  },
})
