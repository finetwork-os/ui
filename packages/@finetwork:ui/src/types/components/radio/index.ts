import type * as Polymorphic from '@radix-ui/react-polymorphic'

import { ComponentProps, FC, ReactNode } from 'react'
import {
  StyledRadio,
  StyledRadioIndicator,
} from '../../../styled-components/radio'

import { CSS } from '@stitches/react/types/css-util'
import { KINDS } from '../../kind'

type RadioComponentProps = Omit<
  Omit<ComponentProps<typeof StyledRadio>, 'label'>,
  'disabled'
> & {
  css?: CSS
  kind?: KINDS
  label?: string | ReactNode
  disabled?: boolean
  indicatorProps?: Polymorphic.OwnProps<typeof StyledRadioIndicator>
}
export type RadioComponent = Omit<FC<RadioComponentProps>, 'children'>
