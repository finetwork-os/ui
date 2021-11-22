import { BaseMenu, Item, StyledSelectContainer } from './styled'
import { ComponentProps, FC, RefObject } from 'react'
import { Enhancer, KINDS, SIZES } from '../../types'

import { Input } from '../Input'

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
  inputRef?: RefObject<HTMLInputElement>
  menuContainerProps?: ComponentProps<typeof BaseMenu>
  itemProps?: ComponentProps<typeof Item>
  inputProps?: ComponentProps<typeof Input>
  clearable?: boolean
  onClear?: () => void
}
export type SelectComponent = FC<SelectProps>
