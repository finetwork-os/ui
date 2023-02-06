import { CSS } from '@stitches/react/types/css-util'
import * as React from 'react'
import { KINDS } from '../../types'

export type Value =
  | { value: string | number; label: string | number }
  | Array<{ value: string | number; label: string | number }>

export type TypeOption = { value: string | number; label: string | number }

export type TypeOptions =
  | Array<TypeOption>
  | Array<{
      value: string | number
      options: Array<TypeOption>
    }>

export type TypeSelect =
  | 'Standard'
  | 'StandardWithTitle'
  | 'Multiple'
  | 'MultipleWithTitle'

export interface DOMEvent<T extends EventTarget> extends Event {
  readonly target: T
}

export type SelectProps = {
  css?: CSS
  kind?: KINDS
  width?: string
  label?: string | React.ReactNode
  disabled?: boolean
  value?: Value
  name?: string
  labelSize?: string
  hoverBorderColor?: string
  labelColor?: string
  optionTextColor?: string
  borderColor?: string
  id: string
  borderRadius?: string
  checkColor?: boolean
  hoverOptionTextColor?: boolean
  hoverBackgroundOptionColor?: boolean
  selectedOptionColor?: string
  error?: string
  search?: boolean
  optionContainerHeight?: string
  optionContainerTitle?: string
  options: TypeOptions
  type?: TypeSelect
  withoutCheck?: boolean
  scrollbarColor?: string
  setValue?: React.Dispatch<React.SetStateAction<any>>
  grouping: boolean
}

export type SelectState = {
  isOpen: boolean
  searchValue: string
  isOverlay: boolean
  allPosibleOptions: TypeOptions
}
