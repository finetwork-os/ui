
import * as React from 'react'

import {
  ContainerRadioLabel,
  StyledLabel,
  StyledRadio,
  StyledRadioGroup,
  StyledRadioIndicator,
} from './styled'

import { RadioComponent } from './types'

export const RadioGroup = StyledRadioGroup
export const Radio: RadioComponent = React.forwardRef(
  ({ kind,size, label, disabled, indicatorProps = {}, ...props }, ref) => {
    const Radio = () => (
      <StyledRadio
        {...props}
        ref={ref}
        isDisabled={disabled}
        disabled={disabled}
        kind={kind}
        size={size}
      >
        <StyledRadioIndicator kind={kind} size={size} {...indicatorProps} />
      </StyledRadio>
    )
    return label ? (
      <ContainerRadioLabel disabled={disabled}>
        <Radio />
        <StyledLabel htmlFor={props.id}>{label}</StyledLabel>
      </ContainerRadioLabel>
    ) : (
      <Radio />
    )
  }
)