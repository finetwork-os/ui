import { ComponentProps, MouseEventHandler, ReactNode } from 'react'
import { KINDS } from '../../types'
import { StyledTag } from './styled'

export type TagComponentOwnProps = {
  id?: string
  kind?: KINDS
  textSize?: string
  background?: string
  width?: string
  height?: string
  type?: 'standard' | 'success' | 'warning' | 'error' | 'disabled'
  borderRadius?: string
  textColor?: string
  bold?: boolean
  startEnhancer?: ReactNode | string
  endEnhancer?: ReactNode | string
  onClick?: MouseEventHandler<HTMLDivElement> &
    MouseEventHandler<HTMLButtonElement>
}
export type TagProps = ComponentProps<typeof StyledTag> & TagComponentOwnProps
