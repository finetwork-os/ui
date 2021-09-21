import { ComponentProps, FC } from 'react'
import { Enhancer, SIZES } from '../../index'

import { StyledLink } from '../../../styled-components/link'

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
  as?: string
}
export type LinkComponent = FC<LinkProps>
