import * as React from 'react'

import { StyledTag } from './styled'
import { TagComponent } from './types'

export const Tag: TagComponent = ({
  kind,
  children,
  textTransform = 'uppercase',
  css,
  ...props
}) => {
  const computedStyles: any = {
    textTransform,
  }
  return (
    <StyledTag
      kind={kind}
      css={{ ...computedStyles, ...css }}
      data-fi="tag"
      {...props}
    >
      {children}
    </StyledTag>
  )
}
