import * as React from 'react'

import {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledH6,
  StyledHighLight,
  StyledParagraph1,
  StyledParagraph2,
  StyledParagraph3,
  StyledParagraph4,
  StyledParagraph5,
  StyledParagraph6,
} from './styled'
import { TypographyComponent, TypographyImplementationComponent } from './types'

const Typography: TypographyComponent = React.forwardRef(
  (
    {
      Component,
      children,
      isHighLight = false,
      highLightAlign = 'bottom',
      align = 'left',
      kind = 'primary',
      highLightSize = 'medium',
      highLightKind = 'primary',
      ...props
    },
    ref
  ) => {
    return (
      <Component
        kind={kind}
        variant={isHighLight && 'highLight'}
        align={align}
        data-fi="typography"
        ref={ref}
        {...props}
      >
        {children}
        {isHighLight && (
          <StyledHighLight
            highLightAlign={highLightAlign}
            kind={highLightKind}
            highLightSize={highLightSize}
            align={align}
            data-fi="typography-highlight"
          />
        )}
      </Component>
    )
  }
)
export const H1: TypographyImplementationComponent = React.forwardRef(
  ({ children, ...props }, ref) => {
    return (
      <Typography {...props} Component={StyledH1} ref={ref}>
        {children}
      </Typography>
    )
  }
)
export const H2: TypographyImplementationComponent = React.forwardRef(
  ({ children, ...props }, ref) => {
    return (
      <Typography {...props} Component={StyledH2} ref={ref}>
        {children}
      </Typography>
    )
  }
)
export const H3: TypographyImplementationComponent = React.forwardRef(
  ({ children, ...props }, ref) => {
    return (
      <Typography {...props} Component={StyledH3} ref={ref}>
        {children}
      </Typography>
    )
  }
)
export const H4: TypographyImplementationComponent = React.forwardRef(
  ({ children, ...props }, ref) => {
    return (
      <Typography {...props} Component={StyledH4} ref={ref}>
        {children}
      </Typography>
    )
  }
)
export const H5: TypographyImplementationComponent = React.forwardRef(
  ({ children, ...props }, ref) => {
    return (
      <Typography {...props} Component={StyledH5} ref={ref}>
        {children}
      </Typography>
    )
  }
)
export const H6: TypographyImplementationComponent = React.forwardRef(
  ({ children, ...props }, ref) => {
    return (
      <Typography {...props} Component={StyledH6} ref={ref}>
        {children}
      </Typography>
    )
  }
)
export const Paragraph1: TypographyImplementationComponent = React.forwardRef(
  ({ children, ...props }, ref) => {
    return (
      <Typography {...props} Component={StyledParagraph1} ref={ref}>
        {children}
      </Typography>
    )
  }
)
export const Paragraph2: TypographyImplementationComponent = React.forwardRef(
  ({ children, ...props }, ref) => {
    return (
      <Typography {...props} Component={StyledParagraph2} ref={ref}>
        {children}
      </Typography>
    )
  }
)
export const Paragraph3: TypographyImplementationComponent = React.forwardRef(
  ({ children, ...props }, ref) => {
    return (
      <Typography {...props} Component={StyledParagraph3} ref={ref}>
        {children}
      </Typography>
    )
  }
)
export const Paragraph4: TypographyImplementationComponent = React.forwardRef(
  ({ children, ...props }, ref) => {
    return (
      <Typography {...props} Component={StyledParagraph4} ref={ref}>
        {children}
      </Typography>
    )
  }
)
export const Paragraph5: TypographyImplementationComponent = React.forwardRef(
  ({ children, ...props }, ref) => {
    return (
      <Typography {...props} Component={StyledParagraph5} ref={ref}>
        {children}
      </Typography>
    )
  }
)
export const Paragraph6: TypographyImplementationComponent = React.forwardRef(
  ({ children, ...props }, ref) => {
    return (
      <Typography {...props} Component={StyledParagraph6} ref={ref}>
        {children}
      </Typography>
    )
  }
)
