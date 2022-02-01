import { CSS } from '../../stitches.config'
import { VariantProps } from '@stitches/react'
import { AnchorHTMLAttributes, ComponentProps } from 'react'
import { Enhancer, SIZES } from '../../types'

import { StyledLink } from './styled'

type Props = Omit<
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
  animation?: boolean
  as?: any
  [key: string]: any
}
type NativeAttrs = Omit<AnchorHTMLAttributes<unknown>, keyof Props>
type LinkVariantsProps = VariantProps<typeof StyledLink>

export type LinkProps = Props & NativeAttrs & LinkVariantsProps & { css?: CSS }
