import { KINDS, SIZES } from '../../types'
import { Root, Thumb } from '@radix-ui/react-switch'

import { StyledComponent } from '@stitches/react/types/styled-component'
import { styled } from '../../stitches.config'

export const StyledSwitch: StyledComponent<
  typeof Root,
  {
    size?: SIZES
    kind?: KINDS
  }
> = styled(Root, {
  appearance: 'none',
  border: 'none',
  padding: 2,
  borderRadius: 15,
  position: 'relative',
  transition: 'all .3s ease',
  variants: {
    size: {
      small: {
        width: 30,
        height: 15,
      },
      medium: {
        width: 40,
        height: 20,
      },
      large: {
        width: 50,
        height: 25,
      },
    },
    kind: {
      primary: {
        backgroundColor: '$primary200',
        '&:focus': {
          boxShadow: '0 0 0 2px $colors$primary300',
        },
        '&[data-state="checked"]': {
          backgroundColor: '$primary',
        },
      },
      secondary: {
        backgroundColor: '$secondary200',
        '&:focus': {
          boxShadow: '0 0 0 2px $colors$secondary300',
        },
        '&[data-state="checked"]': {
          backgroundColor: '$secondary',
        },
      },
      tertiary: {
        backgroundColor: '$tertiary200',
        '&:focus': {
          boxShadow: '0 0 0 2px $colors$tertiary300',
        },
        '&[data-state="checked"]': {
          backgroundColor: '$tertiary',
        },
      },
    },
  },
  defaultVariants: {
    size: 'medium',
    kind: 'primary',
  },
})

export const StyledThumb = styled(Thumb, {
  display: 'block',
  backgroundColor: 'white',
  borderRadius: '$round',
  height: '100%',
  boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0px 2px',
  transition: 'transform .3s ease',
  willChange: 'transform',
  variants: {
    size: {
      small: {
        width: 'calc(100% - 15px)',
        '&[data-state="checked"]': {
          transform: 'translateX(calc(100% + 4px))',
        },
      },
      medium: {
        width: 'calc(100% - 20px)',
        transform: 'translateY(0.5px)',
        height: '96%',
        '&[data-state="checked"]': {
          transform: 'translate(calc(100% + 3px), 0.5px)',
        },
      },
      large: {
        width: 'calc(100% - 26px)',
        transform: 'translateY(0.5px)',
        height: '96%',
        '&[data-state="checked"]': {
          transform: 'translate(calc(100% + 5px), 0.5px)',
        },
      },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})
