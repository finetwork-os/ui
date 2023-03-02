import { KINDS, SIZE } from '@finetwork:ui/src/types'
import { ComponentProps, FC } from 'react'
import { StyledSwitch } from './styled'

export type SwitchComponent = {
  size?: 'medium' | 'large'
  kind: KINDS
  id: string
  isLoading?: boolean
  checked?: boolean
  loadingColor?: string
  loadingSpeed?: number
  type?: 'standard' | 'success' | 'warning' | 'error' | 'disabled'
  handleChange?: (value: boolean) => void
}
