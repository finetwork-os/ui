import { ComponentProps } from 'react'
import { KINDS } from '../../types'
import { StyledCheckbox } from './styled'

export type CheckboxProps = ComponentProps<typeof StyledCheckbox> & {
  kind?: KINDS
}
