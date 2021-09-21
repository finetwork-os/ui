import { ComponentProps, FC } from 'react'
import { Enhancer, KINDS, SIZES } from '../../index'

import { CSS } from '@stitches/react/types/css-util'
import { LoadingProps } from '../loading'
import { StyledButton } from '../../../styled-components/button'

export enum SHAPE {
  default = 'default',
  pill = 'pill',
  round = 'round',
  circle = 'circle',
  square = 'square',
}
export enum VARIANT {
  outline = 'outline',
  default = 'default',
}
export type VARIANTS = keyof typeof VARIANT
export type SHAPES = keyof typeof SHAPE

type ButtonCSSProp = { css?: CSS }
type ButtonOwnProps = ButtonCSSProp & {
  size?: SIZES
  shape?: SHAPES
  outline?: boolean
  kind?: KINDS
  isLoading?: boolean
  isSelected?: boolean
  loadingProps?: LoadingProps
  startEnhancer?: Enhancer
  endEnhancer?: Enhancer
}

export type ButtonProps = ComponentProps<typeof StyledButton> & ButtonOwnProps
export type ButtonComponent = FC<ButtonProps>
