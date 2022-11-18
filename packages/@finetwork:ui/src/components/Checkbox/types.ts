import { CSS } from '@stitches/react/types/css-util'
import { ComponentProps, ReactNode } from 'react'
import { KINDS, SIZES } from '../../types'

export type CheckboxComponentProps = {
  css?: CSS
  kind?: KINDS
  size?: SIZES
  label?: string
  disabled?: boolean
  value: string | number
  name: string
  checkColor?: string
  checkSize?: SIZES
  textSize?: string
  hoverColor?: string
  textColor?: string
  borderColor?: string
  id?: string
  borderRadius?: string
  error?: boolean
}
