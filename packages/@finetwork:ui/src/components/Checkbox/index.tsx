import * as React from 'react'

import { CheckIcon, DividerHorizontalIcon } from '@radix-ui/react-icons'
import { StyledCheckbox, StyledCheckboxIndicator } from './styled'

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
          (props.defaultChecked || props.checked === true) && <CheckIcon />
        )}
      </StyledCheckboxIndicator>
    </StyledCheckbox>
  )
}
