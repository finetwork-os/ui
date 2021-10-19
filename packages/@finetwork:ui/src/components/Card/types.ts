import { ComponentProps } from 'react'
import { KINDS } from '../../types'
import { StyledCard } from './styled'

export type CardProps = ComponentProps<typeof StyledCard> & {
  hoverAnimation?: boolean
  kind?: KINDS
}
