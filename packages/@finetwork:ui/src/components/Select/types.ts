// import { SelectProps } from '@radix-ui/react-select'
// import { FC } from 'react'
// import { KINDS, SIZES } from '../../types'

// import { StyledContent, StyledItemIndicator, StyledTrigger } from './styled'

// type SelectItemIndicatorProps = React.ComponentProps<
//   typeof StyledItemIndicator
// > & {
//   Icon?: any
//   size?: SIZES
// }
// type SelectTriggerProps = React.ComponentProps<typeof StyledTrigger> & {
//   size?: SIZES
// }
// type SelectContentProps = React.ComponentProps<typeof StyledContent> & {
//   size?: SIZES
// }

// export type SelectContentComponent = FC<SelectContentProps>
// export type SelectTriggerComponent = FC<SelectTriggerProps>
// export type SelectItemIndicatorComponent = FC<SelectItemIndicatorProps>
// export type SelectComponent = FC<
//   SelectProps & {
//     size?: SIZES
//     kind?: KINDS
//     contentProps?: SelectContentProps
//     triggerProps?: SelectTriggerProps
//   }
// >
import { CSS } from '@stitches/react/types/css-util'
import { Dispatch, SetStateAction } from 'react'
import { KINDS, SIZES } from '../../types'

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
  id?: string
  borderRadius?: string
  error?: boolean
  search?: boolean
  options:
    | Array<{ value: string | number; label: string | number }>
    | Array<{
        title: string | number
        options: Array<{ value: string | number; label: string | number }>
      }>
  type?: 'Standard' | 'StandardWithTitle' | 'Multiple' | 'MultipleWithTitle'
  withoutCheck: boolean
  setValue?: Dispatch<SetStateAction<string | number>>
}
