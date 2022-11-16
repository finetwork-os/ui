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
  ({ kind, size, label, disabled, value, ...props }, ref) => {
    const Radio = () => (
      <Label>
        <Input ref={ref} type="radio" value={value} {...props} />
        <Span>{label}</Span>
      </Label>
    )
    return <Radio />
  }
)
