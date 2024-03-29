import { CSS } from '@stitches/react/types/css-util'
import { ComponentProps, ReactNode } from 'react'
import { KINDS, SIZES } from '../../types'
import { StyledInput } from './styled'

type CheckboxComponentOwnProps = {
  css?: CSS
  kind?: KINDS
  size?: SIZES
  label?: string | number | ReactNode
  disabled?: boolean
  value?: string | number
  name?: string
  align?: 'start' | 'center' | 'end'
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
export type CheckboxProps = ComponentProps<typeof StyledInput> &
  CheckboxComponentOwnProps
