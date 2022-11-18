import { FC, ReactNode } from 'react'

import { CSS } from '@stitches/react/types/css-util'
import { Enhancer, KINDS, SIZES } from '../../types'

export type RadioGroupComponentProps = {
  direction: 'vertical' | 'horizontal'
  name: string
  title: Enhancer
  children: ReactNode
  error?: string
}

export type RadioComponentProps = {
  css?: CSS
  kind?: KINDS
  size?: 'small' | 'medium'
  label?: string | ReactNode
  disabled?: boolean
  value: string | number
  name?: string
  dotColor?: string
  dotSize?: string
  dotHover?: string
  textColor?: string
  borderColor?: string
  id: string
}
