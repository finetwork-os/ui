import type * as Polymorphic from '@radix-ui/react-polymorphic'

import { ComponentProps, FC, ReactNode } from 'react'
import { StyledRadio, StyledRadioIndicator, Input } from './styled'

import { CSS } from '@stitches/react/types/css-util'
import { KINDS } from '../../types'

type RadioComponentProps = Omit<
  Omit<ComponentProps<typeof Input>, 'label'>,
  'disabled'
> & {
  css?: CSS
  kind?: KINDS
  label?: string | ReactNode
  disabled?: boolean
  indicatorProps?: Polymorphic.OwnProps<typeof StyledRadioIndicator>
  selectedItemValue: string | number
  onChange: any
}
export type RadioComponent = FC<Omit<RadioComponentProps, 'children'>>
