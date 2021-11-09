import * as React from 'react'

import { StyledSwitch, StyledThumb } from './styled'

import { SwitchComponent } from './types'

export const Switch: SwitchComponent = React.forwardRef(
  ({ kind, size, ...props }, ref) => (
    <StyledSwitch kind={kind} size={size} {...props} ref={ref}>
      <StyledThumb size={size} />
    </StyledSwitch>
  )
)
