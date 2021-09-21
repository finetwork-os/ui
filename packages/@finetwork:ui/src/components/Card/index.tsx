import * as React from 'react'

import {
  StyledBody,
  StyledCard,
  StyledFooter,
  StyledHeader,
} from '../../styled-components/card'

import { CardProps } from '../../types/components/card'
import { KIND } from '../../types'

export const CardHeader: React.FC<React.ComponentProps<typeof StyledHeader>> =
  ({ ...props }) => <StyledHeader {...props} />

export const CardBody: React.FC<React.ComponentProps<typeof StyledBody>> = ({
  ...props
}) => <StyledBody {...props} />

export const CardFooter: React.FC<React.ComponentProps<typeof StyledFooter>> =
  ({ ...props }) => <StyledFooter {...props} />

export const Card: React.FC<CardProps> = ({
  hoverAnimation = false,
  kind = KIND.primary,
  children,
  ...props
}) => {
  return (
    <StyledCard
      kind={kind}
      hoverAnimation={hoverAnimation}
      data-fi="card"
      {...props}
    >
      {children}
    </StyledCard>
  )
}
