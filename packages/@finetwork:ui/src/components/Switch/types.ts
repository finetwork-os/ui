import { Enhancer, KINDS } from '@finetwork:ui/src/types'

export type SwitchComponent = {
  size?: 'medium' | 'large'
  kind?: KINDS
  id: string
  isLoading?: boolean
  checked?: boolean
  disabled?: boolean
  loadingColor?: string
  loadingSpeed?: number
  type?: 'standard' | 'success' | 'warning' | 'error' | 'disabled'
  handleChange?: (value: boolean) => void
  switchBackgroundColor?: { checked: string; unchecked: string }
  focusOutlineColor?: string
  sliderColor?: string
  enhancerIcons?: { checked: Enhancer; unchecked: Enhancer }
}
