import * as React from 'react'

import {
  ContainerRadioLabel,
  Input,
  Label,
  Span,
  StyledLabel,
  StyledRadio,
  StyledRadioGroup,
  StyledRadioIndicator,
} from './styled'

import { RadioComponent } from './types'

export const RadioGroup = StyledRadioGroup
export const Radio: RadioComponent = React.forwardRef(
  (
    {
      kind,
      label,
      disabled,
      value,
      selectedItemValue,
      onChange,
      indicatorProps = {},
      ...props
    },
    ref
  ) => {
    const Radio = () => (
      <Label>
        <Input
          ref={ref}
          type="radio"
          isChecked={selectedItemValue === value}
          checked={selectedItemValue === value}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          {...props}
        />
        <Span>{label}</Span>
      </Label>
    )
    return <Radio />
  }
)
