import { ComponentProps, ReactNode } from 'react'
import { KINDS } from '../../types'
import { StyledTag } from './styled'

export type TagComponentOwnProps = {
  id?: string
  kind?: KINDS
  text?: string
  textSize?: string
  background?: string
  width?: string
  height?: string
  borderRadius?: string
  colorText?: string
  bold?: boolean
  startEnhancer?: ReactNode | string
  endEnhancer?: ReactNode | string
}
export type TagProps = ComponentProps<typeof StyledTag> & TagComponentOwnProps
