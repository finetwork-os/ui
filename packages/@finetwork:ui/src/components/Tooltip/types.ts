import { ComponentProps, ReactNode } from 'react'
import { CSS } from '@stitches/react/types/css-util'
import { StyledTooltip } from './styled'

type TooltipComponentOwnProps = {
  css?: CSS
  id?: string
  idContent?: string
  contentWidth?: number
  contentHeight?: number
  type?: 'standard' | 'success' | 'warning' | 'error' | 'disabled'
  backgroundColor?: string
  colorText?: string
  width?: number
  height?: string
  position?: 'top' | 'right' | 'bottom' | 'left'
  borderRadius?: string
  disabled?: boolean
  content: string | ReactNode
  arrow?: boolean
  maxWidth?: string
  interactive?: boolean
  gap?: string
  align?: 'start' | 'center' | 'end'
}

export type TooltipProps = ComponentProps<typeof StyledTooltip> &
  TooltipComponentOwnProps
