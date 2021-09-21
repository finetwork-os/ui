import { ComponentProps } from 'react'
import { KINDS } from '../../kind'
import { StyledCheckbox } from '../../../styled-components/checkbox'

export type CheckboxProps = ComponentProps<typeof StyledCheckbox> & {
  kind?: KINDS
}
