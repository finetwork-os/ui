import { BooleanString, KINDS } from '../../types'
import {
  Indicator,
  Item,
  Root as RadioGroupRoot,
} from '@radix-ui/react-radio-group'
import { fadeIn, radioCheck } from '../../animations'

import { StyledComponent } from '@stitches/react/types/styled-component'
import { grayA } from '@radix-ui/colors'
import { styled } from '../../stitches.config'

export const Label = styled('label', {
  display: 'flex',
  cursor: 'pointer',
  fontWeight: 500,
  position: 'relative',
  overflow: 'hidden',
  marginBottom: '0.375em',
})

export const Span = styled('span', {
  display: 'flex',
  alignItems: 'center',
  padding: '0.375em 0.75em 0.375em 0.375em',
  transition: '0.25s ease',

  '&:hover': {
    backgroundColor: '#fff',
  },
  '&:before': {
    display: 'flex',
    flexShrink: 0,
    content: '',
    backgroundColor: '#fff',
    width: '1.5em',
    height: '1.5em',
    borderRadius: '50%',
    marginRight: '0.375em',
    transition: '0.25s ease',
    outline: '1px solid #000',
  },
})

export const Input = styled('input', {
  position: 'absolute',
  visibility: 'hidden',
  variants: {
    isChecked: {
      true: {
        '&:hover': {
          [`&:hover + ${Span}`]: {
            '&:before': {
              backgroundColor: '$colors$primary',
              boxShadow: 'inset 0 0 0 0.4em #EFE6FF',
            },
          },
        },
        [`&:checked + ${Span}`]: {
          '&:before': {
            boxShadow: 'inset 0 0 0 0.4em #fff',
            borderColor: '1px solid $colors$primary',
            backgroundColor: '$colors$primary',
          },
        },
      },
      false: {
        '&:hover': {
          [`&:hover + ${Span}`]: {
            '&:before': { backgroundColor: '#EFE6FF' },
          },
        },
        [`&:checked + ${Span}`]: {
          '&:before': {
            boxShadow: 'inset 0 0 0 0.4em #fff',
            borderColor: '1px solid $colors$primary',
            backgroundColor: '$colors$primary',
          },
        },
      },
    },
  },
})

export const StyledRadioGroup = styled(RadioGroupRoot, {
  display: 'flex',
  gap: '1rem',
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

export const StyledRadio: StyledComponent<
  typeof Item,
  { isDisabled?: BooleanString; kind?: KINDS }
> = styled(Item, {
  all: 'unset',
  backgroundColor: 'white',
  width: 25,
  height: 25,
  borderRadius: '100%',
  boxShadow: `0 2px 10px ${grayA.grayA7}`,
  position: 'relative',
  variants: {
    isDisabled: {
      false: {
        cursor: 'pointer',
      },
      true: {
        boxShadow: `0 2px 10px ${grayA.grayA5}`,
        cursor: 'not-allowed',
        pointerEvents: 'none',
      },
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
          boxShadow: '0 0 0 2px $colors$tertiary300',
        },
      },
    },
  },
  defaultVariants: {
    isDisabled: false,
    kind: 'primary',
  },
})

export const StyledRadioIndicator: StyledComponent<
  typeof Indicator,
  { kind?: KINDS }
> = styled(Indicator, {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '50%',
  width: 10,
  height: 10,
  animation: `${radioCheck} 200ms ease, ${fadeIn} 500ms ease`,
  variants: {
    kind: {
      primary: {
        backgroundColor: '$primary',
      },
      secondary: {
        backgroundColor: '$secondary',
      },
      tertiary: {
        backgroundColor: '$tertiary',
      },
    },
    disabled: {
      false: {},
      true: {
        backgroundColor: '$disabled',
      },
    },
  },
  defaultVariants: {
    kind: 'primary',
    disabled: false,
  },
})

export const ContainerRadioLabel = styled('div', {
  display: 'grid',
  gridAutoFlow: 'column',
  gap: '1rem',
  justifyContent: 'start',
  alignItems: 'center',
  variants: {
    disabled: {
      false: {
        cursor: 'pointer',
      },
      true: {
        cursor: 'not-allowed',
        color: '$disabled',
      },
    },
  },
  defaultVariants: {
    disabled: false,
  },
})

export const StyledLabel = styled('label', {
  paddingLeft: '1rem',
})
