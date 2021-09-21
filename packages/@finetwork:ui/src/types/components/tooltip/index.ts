import { ComponentProps, FC } from 'react'

import { Root } from '@radix-ui/react-tooltip'
import { StyledContent } from '../../../styled-components/tooltip'

type TooltipContentProps = ComponentProps<typeof StyledContent> & {
  withArrow?: boolean
}
type TooltipProps = ComponentProps<typeof Root>

export type TooltipContentComponent = FC<TooltipContentProps>
export type TooltipComponent = FC<TooltipProps>
