import { ComponentProps, ReactNode } from 'react'
import { CSS } from '@stitches/react/types/css-util'
import { StyledTooltip } from './styled'
import { KINDS } from '../../types'

type TooltipComponentOwnProps = {
  css?: CSS
  id?: string
  kind?: KINDS
  type?: 'standard' | 'success' | 'warning' | 'error' | 'disabled'
  backgroundColor?: string
  colorText?: string
  width?: string
  height?: string
  position?: 'top' | 'right' | 'bottom' | 'left'
  borderRadius?: string
  disabled?: boolean
  content?: string | ReactNode
  arrow?: boolean
}

export type TooltipProps = ComponentProps<typeof StyledTooltip> &
  TooltipComponentOwnProps
