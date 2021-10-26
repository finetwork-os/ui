import { BooleanString, KINDS } from '../../types'
import { CheckedState, Indicator, Root } from '@radix-ui/react-checkbox'
import { bounceIn, fadeIn } from '../../animations'

import { StyledComponent } from '@stitches/react/types/styled-component'
import { styled } from '../../stitches.config'

export const StyledCheckbox: StyledComponent<
  typeof Root,
  {
    isChecked?: CheckedState | 'true' | 'false'
    kind?: KINDS
    isDisabled?: BooleanString
  }
> = styled(Root, {
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
  '&:active': {
    transform: 'scale(0.8)',
  },
  variants: {
    isChecked: {
      true: {},
      false: {},
      indeterminate: {},
    },
    kind: {
      primary: {
        '&:focus': {
          boxShadow: '0 0 0 2px $colors$primary300',
        },
      },
      secondary: {
        '&:focus': {
          boxShadow: '0 0 0 2px $colors$secondary300',
        },
      },
      tertiary: {
        '&:focus': {
          boxShadow: '0 0 0 2px $colors$tertiary',
        },
      },
    },
    isDisabled: {
      true: {
        borderColor: '$disabled',
        pointerEvents: 'none',
      },
      false: {},
    },
  },
  compoundVariants: [
    {
      isDisabled: false || undefined,
      isChecked: true,
      kind: 'primary',
      css: {
        borderColor: '$primary',
      },
    },
    {
      isDisabled: false || undefined,
      isChecked: true,
      kind: 'secondary',
      css: {
        borderColor: '$secondary',
      },
    },
    {
      isDisabled: false || undefined,
      isChecked: true,
      kind: 'tertiary',
      css: {
        borderColor: '$tertiary',
      },
    },
    {
      isDisabled: false || undefined,
      isChecked: 'indeterminate',
      kind: 'primary',
      css: {
        borderColor: '$primary',
      },
    },
    {
      isDisabled: false || undefined,
      isChecked: 'indeterminate',
      kind: 'secondary',
      css: {
        borderColor: '$secondary',
      },
    },
    {
      isDisabled: false || undefined,
      isChecked: 'indeterminate',
      kind: 'tertiary',
      css: {
        borderColor: '$tertiary',
      },
    },
  ],
  defaultVariants: {
    kind: 'primary',
  },
})
export const StyledCheckboxIndicator = styled(Indicator, {
  animation: `${fadeIn} .3s ease, ${bounceIn} .3s ease`,
  variants: {
    kind: {
      primary: {
        color: '$primary',
      },
      secondary: {
        color: '$secondary',
      },
      tertiary: {
        color: '$tertiary',
      },
    },
    disabled: {
      false: {},
      true: {
        color: '$disabled',
      },
    },
  },
  defaultVariants: {
    kind: 'primary',
  },
})
