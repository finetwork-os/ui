import { ComponentProps, Dispatch, ReactNode, SetStateAction } from 'react'
import { CSS } from '@stitches/react/types/css-util'
import { KINDS } from '../../types'
import { StyledInput } from './styled'

type RangeComponentOwnProps = {
  css?: CSS
  kind?: KINDS
  size?: 'small' | 'medium'
  label?: string | ReactNode
  disabled?: boolean
  value?: string | number
  name?: string
  dotColor?: string
  dotSize?: string
  dotHover?: string
  textColor?: string
  borderColor?: string
  id?: string
  checked?: boolean
  min: number
  max: number
  step?: number
  currentMinValue?: number
  currentMaxValue?: number
  setValue?: Dispatch<SetStateAction<Record<string, number>>>
}
export type RangeProps = ComponentProps<typeof StyledInput> &
  RangeComponentOwnProps
