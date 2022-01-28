import * as React from 'react'
import { CheckIcon, DividerHorizontalIcon } from '../icons'

import {
  StyledCheckbox,
  StyledCheckboxIndicator,
  StyledCheckIcon,
} from './styled'

import { CheckboxProps } from './types'

export const Checkbox: React.FC<CheckboxProps> = ({ children, ...props }) => {
  return (
    <StyledCheckbox
      data-fi="checkbox"
      isChecked={props.checked || props.defaultChecked}
      isDisabled={props.disabled}
      {...props}
    >
      <StyledCheckboxIndicator kind={props.kind} disabled={props.disabled}>
        {props.defaultChecked === 'indeterminate' ||
        props.checked === 'indeterminate' ? (
          <DividerHorizontalIcon />
        ) : (
          <StyledCheckIcon />
        )}
      </StyledCheckboxIndicator>
    </StyledCheckbox>
  )
}
