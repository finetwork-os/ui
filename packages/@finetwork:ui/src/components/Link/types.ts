import { ComponentProps, FC } from 'react'
import { Enhancer, SIZES } from '../../types'

import { StyledLink } from './styled'

type LinkProps = Omit<
  ComponentProps<typeof StyledLink>,
  'endEnhancer' | 'startEnhancer'
> & {
  href?: string
  kind?: string
  disabled?: boolean
  startEnhancer?: Enhancer
  endEnhancer?: Enhancer
  size?: SIZES
  textTransform?: string
  as?: any
  animation?: boolean
}
export type LinkComponent = FC<LinkProps>
