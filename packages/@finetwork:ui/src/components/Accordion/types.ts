import { ComponentProps, FC } from 'react'
import { StyledAccordion, StyledContent, StyledTrigger } from './styled'

import { CSS } from '@stitches/react/types/css-util'
import { ForwardRefComponent } from '@radix-ui/react-polymorphic'
import { KINDS } from '../../types'

export type AccordionComponent = FC<
  ComponentProps<typeof StyledAccordion> & {
    kind?: KINDS
  }
>
export type AccordionContentComponent = FC<ComponentProps<typeof StyledContent>>

type AccordionTriggerCSSProp = { css?: CSS; withIcon?: boolean }
export type AccordionTriggerComponent = ForwardRefComponent<
  typeof StyledTrigger,
  AccordionTriggerCSSProp
>
