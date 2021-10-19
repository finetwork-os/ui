import * as React from 'react'

import { Root, Trigger } from '@radix-ui/react-tooltip'
import { StyledContent, StyledTooltipArrow } from './styled'
import { TooltipComponent, TooltipContentComponent } from './types'

export const Tooltip: TooltipComponent = ({
  children,
  delayDuration = 200,
  ...props
}) => (
  <Root delayDuration={delayDuration} {...props}>
    {children}
  </Root>
)
export const TooltipTrigger = Trigger
export const TooltipContent: TooltipContentComponent = ({
  children,
  withArrow = false,
  side = 'top',
  ...props
}) => (
  <StyledContent side={side} data-fi="tooltip" {...props}>
    {children}
    {withArrow && <StyledTooltipArrow />}
  </StyledContent>
)
