import { BaseMenu, StyledSelectContainer } from './styled'
import { ComponentProps, FC, RefObject } from 'react'
import { Enhancer, KINDS, SIZES } from '../../types'

export enum VARIANT {
  outline = 'outline',
  default = 'default',
}
export type VARIANTS = keyof typeof VARIANT
type SelectProps = ComponentProps<typeof StyledSelectContainer> & {
  disabled?: boolean
  searchable?: boolean
  label?: string
  options: Record<string, any>[]
  value?: Record<string, any>
  initialValue?: Record<string, any>
  onInputChange?: (inputText: string) => void
  kind?: KINDS
  size?: SIZES
  onSelect?: (option: Record<string, any>) => void
  isLoading?: boolean
  placeholder?: string
  emptyText?: string
  menuContainerProps?: ComponentProps<typeof BaseMenu>
  inputRef?: RefObject<HTMLInputElement>
}
export type SelectComponent = FC<SelectProps>
