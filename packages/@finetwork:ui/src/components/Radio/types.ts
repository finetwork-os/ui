import type * as Polymorphic from '@radix-ui/react-polymorphic'

import { ComponentProps, FC, ReactNode } from 'react'
import { StyledRadio, StyledRadioIndicator } from './styled'
import { KINDS, SIZES } from '../../types'
import { CSS } from '@stitches/react/types/css-util'

type RadioComponentProps = Omit<
  Omit<ComponentProps<typeof StyledRadio>, 'label'>,
  'disabled'
> & {
  css?: CSS
  kind?: KINDS
  label?: string | ReactNode
  disabled?: boolean
  size?: SIZES
  indicatorProps?: Polymorphic.OwnProps<typeof StyledRadioIndicator>
}
export type RadioComponent = FC<Omit<RadioComponentProps, 'children'>>
