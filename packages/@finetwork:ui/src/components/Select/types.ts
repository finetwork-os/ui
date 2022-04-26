import { SelectProps } from '@radix-ui/react-select'
import { FC } from 'react'
import { KINDS, SIZES } from '../../types'

import { StyledContent, StyledItemIndicator, StyledTrigger } from './styled'

type SelectItemIndicatorProps = React.ComponentProps<
  typeof StyledItemIndicator
> & {
  Icon?: any
  size?: SIZES
}
type SelectTriggerProps = React.ComponentProps<typeof StyledTrigger> & {
  size?: SIZES
}
type SelectContentProps = React.ComponentProps<typeof StyledContent> & {
  size?: SIZES
}

export type SelectContentComponent = FC<SelectContentProps>
export type SelectTriggerComponent = FC<SelectTriggerProps>
export type SelectItemIndicatorComponent = FC<SelectItemIndicatorProps>
export type SelectComponent = FC<
  SelectProps & {
    size?: SIZES
    kind?: KINDS
    contentProps?: SelectContentProps
    triggerProps?: SelectTriggerProps
  }
>
