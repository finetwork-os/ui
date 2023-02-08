import { CSS } from '@stitches/react/types/css-util'
import { ComponentProps } from 'react'
import { KINDS } from '../../types'
import { StyledSeparator } from './styled'

type SeparatorComponentOwnProps = {
  css?: CSS
  id?: string
  kind?: KINDS
  orientation?: 'horizontal' | 'vertical'
  color?: string
  width?: string
  height?: string
  type?: 'solid' | 'dashed' | 'dotted'
  align?: 'start' | 'center' | 'end'
  borderRadius?: string
  borderWidth?: string
}

export type SeparatorProps = ComponentProps<typeof StyledSeparator> &
  SeparatorComponentOwnProps
