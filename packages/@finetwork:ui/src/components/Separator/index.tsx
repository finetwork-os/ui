import * as React from 'react'

import { SeparatorComponent } from './types'
import { StyledSeparator } from './styled'

export const Separator: SeparatorComponent = ({ ...props }) => {
  return <StyledSeparator data-fi="separator" {...props} />
}
