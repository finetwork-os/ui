import { CSS } from '@stitches/react/types/css-util'
import * as React from 'react'
import { KINDS } from '../../types'

export type TypeOption = { value: string | number; label: string | number }

export type TypeOptions =
  | Array<TypeOption>
  | Array<{
      title: string | number
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
  value?: string | number
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
  setValue?: React.Dispatch<
    React.SetStateAction<string | number | Array<string | number>>
  >
}

export type SelectState = {
  isOpen: boolean
  chosenOption: string | number
  chosenMultipleOptions: (string | number)[]
  searchValue: string
  isOverlay: boolean
  allPosibleOptions: TypeOptions
}
