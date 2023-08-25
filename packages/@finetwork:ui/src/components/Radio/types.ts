import { ComponentProps, ReactNode } from 'react'
import { CSS } from '@stitches/react/types/css-util'
import { Enhancer, KINDS } from '../../types'
import { StyledInput } from './styled'

type RadioSize = 'small' | 'medium'

export type RadioGroupComponentProps = {
  direction?: 'vertical' | 'horizontal'
  name?: string
  title?: Enhancer
  children?: ReactNode
  error?: string
  optionsGap?: string
}

type RadioComponentOwnProps = {
  css?: CSS
  kind?: KINDS
  size?: RadioSize
  label?: string | ReactNode
  disabled?: boolean
  value?: string | number
  name?: string
  dotColor?: string
  dotSize?: string
  dotHover?: string
  textColor?: string
  borderColor?: string
  id?: string
  checked?: boolean
  fontSize?: RadioSize
}
export type RadioProps = ComponentProps<typeof StyledInput> &
  RadioComponentOwnProps
