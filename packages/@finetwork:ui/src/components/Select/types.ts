import { CSS } from '@stitches/react/types/css-util'
import * as React from 'react'
import { KINDS } from '../../types'

export type Value =
  | { value: string | number; label: string | number }
  | Array<{ value: string | number; label: string | number }>

export type TypeOption = {
  value: string | number
  label: string | number
  disabled?: boolean
}

type OptionsWithTitle = {
  title: string | number
  options: Array<TypeOption>
  disabled?: boolean
}

export type TypeOptions = Array<TypeOption> | Array<OptionsWithTitle>

export interface DOMEvent<T extends EventTarget> extends Event {
  readonly target: T
}

type Shared = {
  id: string
  onChange: React.Dispatch<React.SetStateAction<any>>
  kind?: KINDS
  withoutCheck?: boolean
  scrollbarColor?: string
  selectedOptionColor?: string
  optionTextColor?: string
  value: Value
  grouping?: boolean
  radio?: boolean
}

export type SelectProps = {
  css?: CSS
  width?: string
  label?: string | React.ReactNode
  disabled?: boolean
  name?: string
  labelSize?: string
  hoverBorderColor?: string
  labelColor?: string
  borderColor?: string
  borderRadius?: string
  checkColor?: string
  hoverOptionTextColor?: string
  hoverBackgroundOptionColor?: string
  error?: string
  search?: boolean
  optionContainerHeight?: string
  optionContainerTitle?: string
  options: TypeOptions
  notFoundText?: string
  searchText?: string
  backgroundColor?: string
  bottomSheet?: boolean
  containerBackgroundColor?: string
  optionsBackgroundColor?: string
  containerColor?: string
} & Shared

export type SelectState = {
  isOpen: boolean
  searchValue: string
  isOverlay: boolean
  allPosibleOptions: TypeOptions
}

export type OptionsProps = {
  allPosibleOptions: TypeOptions
  optionRef: React.MutableRefObject<HTMLLIElement | HTMLDivElement>
  setIsOpen: (isOpen: boolean) => void
  customStyle: {
    select: {}
    label: {}
    hover: {}
    container: {}
    optionsContainer: {}
    optionsGroup: {}
    options: {}
  }
  isMultiple: boolean
} & Shared
