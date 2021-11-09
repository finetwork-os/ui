import * as React from 'react'

import { DropdownMenuComponent, DropdownMenuContentComponent } from './types'
import { RadioGroup, Root, Trigger } from '@radix-ui/react-dropdown-menu'
import {
  StyledArrow,
  StyledCheckboxItem,
  StyledContent,
  StyledItem,
  StyledItemIndicator,
  StyledLabel,
  StyledRadioItem,
  StyledSeparator,
  StyledTriggerItem,
} from './styled'

export const DropdownMenuItem = StyledItem
export const DropdownMenuCheckboxItem = StyledCheckboxItem
export const DropdownMenuRadioItem = StyledRadioItem
export const DropdownMenuItemIndicator = StyledItemIndicator
export const DropdownMenuTriggerItem = StyledTriggerItem
export const DropdownMenuLabel = StyledLabel
export const DropdownMenuSeparator = StyledSeparator
export const DropdownMenuArrow = StyledArrow
export const DropdownMenuRadioGroup = RadioGroup
export const DropdownMenuTrigger = Trigger
export const DropdownMenu: DropdownMenuComponent = ({ children, ...props }) => (
  <Root {...props}>{children}</Root>
)
export const DropdownMenuContent: DropdownMenuContentComponent = ({
  children,
  withArrow,
  side = 'top',
  ...props
}) => (
  <StyledContent side={side} data-fi="dropdown-menu" {...props}>
    {children}
    {withArrow && <StyledArrow />}
  </StyledContent>
)
