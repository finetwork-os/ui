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
  lineHeight: 1.1,
  display: 'grid',
  gridTemplateColumns: '1em auto',
  alignItems: 'center',
  gap: '0.5em',
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

export const Span = styled('span', {
  fontSize: '16px',
})

export const Input = styled('input', {
  '-webkit-apapparance': 'none',
  appearance: 'none',
  margin: 0,
  font: 'inherit',
  width: '1em',
  height: '1em',
  border: '1px solid #000',
  borderRadius: '50%',
  display: 'grid',
  placeContent: 'center',
  transform: 'translateY(0em)',
  '&:hover': {
    backgroundColor: '$colors$secondary200',
  },
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
})

export const StyledRadioGroup = styled('div', {
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
