import { BooleanString, KINDS, SIZES } from '../../types'
import {
  Indicator,
  Item,
  Root as RadioGroupRoot,
} from '@radix-ui/react-radio-group'
import { fadeIn, largeRadioCheck, mediumRadioCheck, smallRadioCheck } from '../../animations'

import { StyledComponent } from '@stitches/react/types/styled-component'
import { grayA } from '@radix-ui/colors'
import { styled } from '../../stitches.config'

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
  { isDisabled?: BooleanString; kind?: KINDS, size?: SIZES }
> = styled(Item, {
  all: 'unset',
  backgroundColor: 'white',
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
    size: {
      'small': {
        width: '20px',
        height: '20px',
      },

      'medium': {
        width: '22px',
        height: '22px',
      },

      'large': {
        width: '24px',
        height: '24px',
      }
    },


  },
  defaultVariants: {
    isDisabled: false,
    kind: 'primary',
    size: 'medium'
  },
})

export const StyledRadioIndicator: StyledComponent<
  typeof Indicator,
  { kind?: KINDS, size?: SIZES }
> = styled(Indicator, {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '50%',
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
    size: {
      'small': {
        width: '8px',
        height: '8px',
        animation: `${smallRadioCheck} 200ms ease, ${fadeIn} 500ms ease`,
      },

      'medium': {
        width: '10px',
        height: '10px',
        animation: `${mediumRadioCheck} 200ms ease, ${fadeIn} 500ms ease`,
      },

      'large': {
        width: '12px',
        height: '12px',
        animation: `${largeRadioCheck} 200ms ease, ${fadeIn} 500ms ease`,
      }
    },
  },
  defaultVariants: {
    kind: 'primary',
    disabled: false,
    size: 'medium'
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