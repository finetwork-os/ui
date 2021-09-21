import { ComponentProps } from 'react'
import { KINDS } from '../../kind'
import { StyledCard } from '../../../styled-components/card'

export type CardProps = ComponentProps<typeof StyledCard> & {
  hoverAnimation?: boolean
  kind?: KINDS
}
