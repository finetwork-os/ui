import { FC, ReactNode } from 'react'

import { CSS } from '@stitches/react/types/css-util'
import { KINDS, SIZES } from '../../types'

export type RadioGroupComponentProps = {
  direction: 'vertical' | 'horizontal'
  name: string
  children: ReactNode
}

export type RadioComponentProps = {
  css?: CSS
  kind?: KINDS
  size?: SIZES
  label?: string | ReactNode
  disabled?: boolean
  value: string | number
  name: string
  dotColor?: string
  dotSize?: string
  dotHover?: string
  textColor?: string
}

export type RadioComponent = FC<RadioComponentProps>
