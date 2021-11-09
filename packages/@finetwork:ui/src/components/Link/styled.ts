import { BooleanString, FONTS, KINDS, SIZES } from '../../types'

import { Property } from '@stitches/react/types/css'
import { StyledComponent } from '@stitches/react/types/styled-component'
import { styled } from '../../stitches.config'

export const StyledStartEnhancer = styled('div', {
  transition: 'all .3s ease',
  marginRight: '0.65em',
  right: 0,
  position: 'relative',
  display: 'flex',
})
export const StyledEndEnhancer = styled('div', {
  transition: 'all .3s ease',
  marginLeft: '0.65em',
  left: 0,
  position: 'relative',
  display: 'flex',
})

export const StyledLink: StyledComponent<
  'a',
  {
    endEnhancer?: BooleanString
    startEnhancer?: BooleanString
    kind?: 'linkText' | KINDS
    textTransform?: Property.TextTransform
    size?: SIZES
    disabled?: BooleanString
    font?: FONTS
    animation?: BooleanString
  },
  any,
  any
> = styled('a', {
  width: 'fit-content',
  transition: 'all .3s ease',
  textTransform: 'none',
  fontWeight: 500,
  cursor: 'pointer',
  fontFamily: 'inherit',
  borderRadius: '2px',
  padding: '2px',
  variants: {
    animation: {
      true: {},
      false: {},
    },
    font: {
      primary: {
        fontFamily: '$primary',
      },
      secondary: {
        fontFamily: '$secondary',
      },
    },
    endEnhancer: {
      true: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
      },
      false: {},
    },
    startEnhancer: {
      true: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
      },
      false: {},
    },
    kind: {
      linkText: {
        color: '$linkText',
        '&:focus': {
          color: '$linkText600',
          boxShadow: '0 0 0 2px $colors$linkText',
        },
        '&:hover': {
          color: '$linkText600',
        },
      },
      primary: {
        color: '$primary',
        '&:focus': {
          color: '$primary600',
          boxShadow: '0 0 0 2px $colors$primary300',
        },
        '&:hover': {
          color: '$primary600',
        },
      },
      secondary: {
        color: '$secondary',
        '&:focus': {
          color: '$secondary600',
          boxShadow: '0 0 0 2px $colors$secondary',
        },
        '&:hover': {
          color: '$secondary600',
        },
      },
      tertiary: {
        color: '$tertiary',
        '&:focus': {
          color: '$tertiary600',
          boxShadow: '0 0 0 2px $colors$tertiary',
        },
        '&:hover': {
          color: '$tertiary600',
        },
      },
    },
    textTransform: {
      capitalize: {
        textTransform: 'capitalize',
      },
      'full-size-kana': {
        textTransform: 'full-size-kana',
      },
      'full-width': {
        textTransform: 'full-width',
      },
      lowercase: {
        textTransform: 'lowercase',
      },
      none: {
        textTransform: 'none',
      },
      uppercase: {
        textTransform: 'uppercase',
      },
    },
    size: {
      small: {
        lineHeight: '17px',
        fontSize: '12px',
      },
      medium: {
        lineHeight: '21px',
        fontSize: '16px',
      },
      large: {
        lineHeight: '25px',
        fontSize: '20px',
      },
    },
    disabled: {
      true: {
        color: '$disabled',
        pointerEvents: 'none',
      },
      false: {},
    },
  },
  compoundVariants: [
    {
      endEnhancer: false,
      startEnhancer: false,
      animation: true,
      css: {
        '&:hover': {
          transform: 'translateY(3px)',
        },
      },
    },
    {
      endEnhancer: true,
      animation: true,
      css: {
        '&:hover': {
          '& > *:last-child': {
            left: '.5rem',
          },
        },
      },
    },
    {
      startEnhancer: true,
      animation: true,
      css: {
        '&:hover': {
          '& > *:first-child': {
            right: '.5rem',
          },
        },
      },
    },
  ],
  defaultVariants: {
    kind: 'primary',
    size: 'medium',
    animation: true,
    startEnhancer: false,
    endEnhancer: false,
    textTransform: 'none',
  },
})
