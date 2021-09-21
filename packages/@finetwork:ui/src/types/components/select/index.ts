import { ComponentProps, FC, RefObject } from 'react'
import { Enhancer, KINDS, SIZES } from '../../index'
import {
  StyledInputMenuContainer,
  StyledMenu,
  StyledMenuContainer,
  StyledSelectContainer,
} from '../../../styled-components/select'

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
  keyValue?: string
  keyLabel?: string
  value?: Record<string, any>
  onInputChange?: (inputText: string) => void
  kind?: KINDS
  size?: SIZES
  getOptionLabel?: (option: Record<string, any>) => Enhancer
  onSelect?: (option: Record<string, any>) => void
  isLoading?: boolean
  placeholder?: string
  emptyText?: string
  optionsContainerProps?: ComponentProps<typeof StyledMenuContainer>
  inputMenuProps?: ComponentProps<typeof StyledInputMenuContainer>
  menuProps?: ComponentProps<typeof StyledMenu>
  inputRef?: RefObject<HTMLInputElement>
}
export type SelectComponent = FC<SelectProps>
