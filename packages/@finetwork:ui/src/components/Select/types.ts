import { ComponentProps, FC, RefObject } from 'react'
import { KINDS, SIZES } from '../../types'

import { Input } from '../Input'
import { StyledSelect } from './styled'

export enum VARIANT {
  outline = 'outline',
  default = 'default',
}
export type VARIANTS = keyof typeof VARIANT
type SelectProps = ComponentProps<typeof StyledSelect>
export type SelectComponent = FC<SelectProps>
