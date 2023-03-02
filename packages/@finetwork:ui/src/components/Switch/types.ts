import { SIZE } from '@finetwork:ui/src/types'
import { ComponentProps, FC } from 'react'
import { StyledSwitch } from './styled'

export type SwitchComponent = {
  size?: 'medium' | 'large'
  id: string
  isLoading?: boolean
  checked?: boolean
  loadingColor?: string
  loadingSpeed?: number
  handleChange?: (value: boolean) => void
}
