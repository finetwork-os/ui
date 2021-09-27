import * as React from 'react'

import { KIND, SIZE } from '../../types'
import { StyledSwitch, StyledThumb } from './styled'

import { SwitchComponent } from './types'

export const Switch: SwitchComponent = React.forwardRef(
  ({ kind = KIND.primary, size = SIZE.medium, ...props }, ref) => (
    <StyledSwitch kind={kind} size={size} {...props} ref={ref}>
      <StyledThumb size={size} />
    </StyledSwitch>
  )
)
