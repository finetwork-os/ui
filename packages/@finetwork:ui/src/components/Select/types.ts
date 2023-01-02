import { CSS } from '@stitches/react/types/css-util'
import { Dispatch, SetStateAction } from 'react'
import { KINDS } from '../../types'

export type SelectProps = {
  css?: CSS
  kind?: KINDS
  width?: number
  label?: string | number
  disabled?: boolean
  value?: string | number
  name?: string
  labelSize?: string
  hoverColor?: string
  labelColor?: string
  textColor?: string
  borderColor?: string
  id: string
  borderRadius?: string
  checkColor?: boolean
  hoverOptionColor?: boolean
  hoverBackgroundOptionColor?: boolean
  chosenColor?: boolean
  error?: boolean
  errorMessage?: string
  search?: boolean
  options:
    | Array<{ value: string | number; label: string | number }>
    | Array<{
        title: string | number
        options: Array<{ value: string | number; label: string | number }>
      }>
  type?: 'Standard' | 'StandardWithTitle' | 'Multiple' | 'MultipleWithTitle'
  withoutCheck: boolean
  setValue?: Dispatch<SetStateAction<string | number | Array<string | number>>>
}
