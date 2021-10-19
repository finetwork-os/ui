import * as React from 'react'

import {
  AccordionComponent,
  AccordionContentComponent,
  AccordionTriggerComponent,
} from './types'
import {
  StyledAccordion,
  StyledChevron,
  StyledContent,
  StyledContentText,
  StyledHeader,
  StyledItem,
  StyledTrigger,
} from './styled'

export const Accordion: AccordionComponent = ({ children, type, ...props }) => (
  <StyledAccordion type={type} data-fi="accordion" {...props}>
    {children}
  </StyledAccordion>
)
export const AccordionTrigger: AccordionTriggerComponent = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <StyledHeader>
      <StyledTrigger {...props} ref={forwardedRef}>
        {children}
        <StyledChevron aria-hidden />
      </StyledTrigger>
    </StyledHeader>
  )
)
export const AccordionContent: AccordionContentComponent = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <StyledContent {...props} ref={forwardedRef}>
      <StyledContentText className="accordion-content">
        {children}
      </StyledContentText>
    </StyledContent>
  )
)
export const AccordionItem = StyledItem
