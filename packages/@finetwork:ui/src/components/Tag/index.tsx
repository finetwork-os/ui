import * as React from 'react'

import { KIND } from '../../types'
import { StyledTag } from '../../styled-components/tag'
import { TagComponent } from '../../types/components/tag'

export const Tag: TagComponent = ({
  kind = KIND.primary,
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
