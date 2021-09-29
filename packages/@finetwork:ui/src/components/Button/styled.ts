import { BooleanString, FONTS, KINDS, SIZES } from '../../types'

import { SHAPES } from './types'
import { StyledComponent } from '@stitches/react/types/styled-component'
import { styled } from '../../stitches.config'

const getStylesSelectedLoading = (kind: KINDS) => ({
  backgroundColor: `$${kind}300`,
  borderColor: `$${kind}300`,
})

const getStylesOutline = (kind: KINDS) => ({
  borderColor: `$${kind}300`,
  color: `$${kind}`,
  '&:hover': {
    backgroundColor: `$${kind}100`,
    border: `1px solid $${kind}500`,
  },
  '&:active': {
    backgroundColor: `$${kind}200`,
    border: `1px solid $${kind}500`,
  },
})

const getGenericStylesByKind = (kind: KINDS) => ({
  borderColor: `$${kind}`,
  color: `$${kind}ButtonText`,
  backgroundColor: `$${kind}`,
  '&:focus': {
    boxShadow: `0 0 0 2px $colors$${kind}300`,
  },
  '&:hover': {
    backgroundColor: `$${kind}400`,
    borderColor: `$${kind}400`,
  },
  '&:active': {
    backgroundColor: `$${kind}300`,
    borderColor: `$${kind}300`,
  },
})

export const ChildrenLoading = styled('div', {
  height: 0,
  opacity: 0,
  display: 'flex',
})

export const StyledStartEnhancer = styled('div', {
  marginRight: '1em',
})
export const StyledEndEnhancer = styled('div', {
  marginLeft: '1em',
})

export const StyledButton: StyledComponent<
  'button',
  {
    isSelected?: BooleanString
    kind?: KINDS
    isDisabled?: BooleanString
    isLoading?: BooleanString
    outline?: BooleanString
    size?: SIZES
    shape?: SHAPES
    font?: FONTS
  },
  any,
  any
> = styled('button', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 1,
  borderStyle: 'solid',
  borderRadius: 0,
  transition: 'all .3s ease',
  fontWeight: 500,
  cursor: 'pointer',
  variants: {
    isSelected: {
      true: {
        pointerEvents: 'none',
      },
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
    kind: {
      primary: {
        ...getGenericStylesByKind('primary'),
      },
      secondary: {
        ...getGenericStylesByKind('secondary'),
      },
      tertiary: {
        ...getGenericStylesByKind('tertiary'),
      },
    },
    isDisabled: {
      true: {
        backgroundColor: '$disabled',
        borderColor: '$disabled',
        pointerEvents: 'none',
        color: '#aaa',
        cursor: 'not-allowed',
      },
      false: {},
    },
    isLoading: {
      true: {
        pointerEvents: 'none',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
      false: {},
    },
    outline: {
      true: {
        backgroundColor: 'unset',
        borderWidth: '1px',
      },
      false: {},
    },
    size: {
      small: {
        padding: '10px',
        minWidth: '170px',
        fontSize: '12px',
      },
      medium: {
        padding: '15px',
        minWidth: '210px',
        fontSize: '16px',
      },
      large: {
        padding: '20px',
        minWidth: '250px',
        fontSize: '20px',
      },
    },
    shape: {
      default: {},
      pill: {
        borderRadius: '30px',
      },
      round: {
        borderRadius: '50%',
      },
      circle: {
        minWidth: 'unset',
        padding: 0,
        borderRadius: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
      },
      square: {
        minWidth: 'unset',
        padding: 0,
        flexDirection: 'row',
        justifyContent: 'center',
      },
    },
  },
  compoundVariants: [
    {
      outline: true,
      isDisabled: true,
      css: {
        borderColor: '$disabled',
        color: '$disabled',
      },
    },
    {
      outline: true,
      kind: 'primary',
      css: {
        ...getStylesOutline('primary'),
      },
    },
    {
      outline: true,
      kind: 'secondary',
      css: {
        ...getStylesOutline('secondary'),
      },
    },
    {
      outline: true,
      kind: 'tertiary',
      css: {
        ...getStylesOutline('tertiary'),
      },
    },
    {
      isSelected: true,
      kind: 'primary',
      css: {
        ...getStylesSelectedLoading('primary'),
      },
    },
    {
      isSelected: true,
      kind: 'secondary',
      css: {
        ...getStylesSelectedLoading('secondary'),
      },
    },
    {
      isSelected: true,
      kind: 'tertiary',
      css: {
        ...getStylesSelectedLoading('tertiary'),
      },
    },
    {
      isLoading: true,
      kind: 'primary',
      css: {
        ...getStylesSelectedLoading('primary'),
      },
    },
    {
      isLoading: true,
      kind: 'secondary',
      css: {
        ...getStylesSelectedLoading('secondary'),
      },
    },
    {
      isLoading: true,
      kind: 'tertiary',
      css: {
        ...getStylesSelectedLoading('tertiary'),
      },
    },
    {
      shape: 'circle',
      size: 'small',
      css: {
        width: 28,
        height: 28,
      },
    },
    {
      shape: 'circle',
      size: 'medium',
      css: {
        width: 38,
        height: 38,
      },
    },
    {
      shape: 'circle',
      size: 'large',
      css: {
        width: 48,
        height: 48,
      },
    },
    {
      shape: 'square',
      size: 'small',
      css: {
        width: 28,
        height: 28,
      },
    },
    {
      shape: 'square',
      size: 'medium',
      css: {
        width: 38,
        height: 38,
      },
    },
    {
      shape: 'square',
      size: 'large',
      css: {
        width: 48,
        height: 48,
      },
    },
  ],
  defaultVariants: {
    kind: 'primary',
    shape: 'default',
    size: 'medium',
    font: 'primary',
  },
})
