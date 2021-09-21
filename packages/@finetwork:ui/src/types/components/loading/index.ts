import { ComponentProps, FC } from 'react'

import { KINDS } from '../../kind'
import { StyledLoading } from '../../../styled-components/loading'

export type LoadingProps = ComponentProps<typeof StyledLoading> & {
  size?: number
  kind?: KINDS
}
export type LoadingComponent = FC<LoadingProps>
