import * as React from 'react'

import { SeparatorComponent } from '../../types/components/separator'
import { StyledSeparator } from '../../styled-components/separator'

export const Separator: SeparatorComponent = ({ ...props }) => {
  return <StyledSeparator data-fi="separator" {...props} />
}
