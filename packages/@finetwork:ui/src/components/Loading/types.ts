import { ComponentProps, FC } from 'react'

import { KINDS } from '../../types'
import { StyledLoading } from './styled'

export type LoadingProps = ComponentProps<typeof StyledLoading> & {
  size?: number
  kind?: KINDS
  disabled?: boolean
}
export type LoadingComponent = FC<LoadingProps>
