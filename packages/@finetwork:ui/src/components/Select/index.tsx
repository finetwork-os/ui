import * as SelectPrimitive from '@radix-ui/react-select'
import * as React from 'react'
import {
  StyledContent,
  StyledItem,
  StyledItemIndicator,
  StyledLabel,
  StyledScrollDownButton,
  StyledScrollUpButton,
  StyledSeparator,
  StyledTrigger,
  StyledViewport,
} from './styled'
import { RenderEnhancer } from '../../utils'
import { SIZE } from '../../types'
import { CheckIcon, ChevronDownIcon } from '../icons'
import {
  SelectComponent,
  SelectContentComponent,
  SelectItemIndicatorComponent,
  SelectTriggerComponent,
} from './types'

const sizeIcon = {
  [SIZE.small]: 15,
  [SIZE.medium]: 18,
  [SIZE.large]: 21,
}

export const SelectValue = SelectPrimitive.Value
export const SelectGroup = SelectPrimitive.Group
export const SelectItem = StyledItem
export const SelectItemText = SelectPrimitive.ItemText
export const SelectLabel = StyledLabel
export const SelectSeparator = StyledSeparator

export const Select: SelectComponent = ({
  children,
  kind = 'primary',
  size = 'medium',
  ...props
}) => (
  <SelectPrimitive.Root {...props}>
    <SelectTrigger kind={kind} size={size} data-fi="select">
      <SelectValue />
    </SelectTrigger>
    <SelectContent kind={kind} size={size}>
      {children}
    </SelectContent>
  </SelectPrimitive.Root>
)
export const SelectTrigger: SelectTriggerComponent = React.forwardRef(
  ({ children, kind, size, ...props }, ref) => (
    <StyledTrigger {...props} kind={kind} size={size} ref={ref}>
      {children}
      <SelectPrimitive.Icon>
        <ChevronDownIcon width={sizeIcon[size]} height={sizeIcon[size]} />
      </SelectPrimitive.Icon>
    </StyledTrigger>
  )
)
export const SelectItemIndicator: SelectItemIndicatorComponent =
  React.forwardRef(
    ({ Icon = CheckIcon, size = 'medium' }, ref): JSX.Element => {
      return (
        <StyledItemIndicator ref={ref}>
          <RenderEnhancer
            Enhancer={<Icon width={sizeIcon[size]} height={sizeIcon[size]} />}
          />
        </StyledItemIndicator>
      )
    }
  )
export const SelectContent: SelectContentComponent = React.forwardRef(
  ({ children, kind, size, ...props }, ref) => {
    return (
      <StyledContent {...props} kind={kind} ref={ref}>
        <StyledScrollUpButton>
          <ChevronDownIcon width={sizeIcon[size]} height={sizeIcon[size]} />
        </StyledScrollUpButton>
        <StyledViewport>{children}</StyledViewport>
        <StyledScrollDownButton>
          <ChevronDownIcon width={sizeIcon[size]} height={sizeIcon[size]} />
        </StyledScrollDownButton>
      </StyledContent>
    )
  }
)
