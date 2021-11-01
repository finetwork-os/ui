import * as React from 'react'

import { StyledLoading, getComputedStyles } from './styled'

import { KIND } from '../../types'
import { LoadingComponent } from './types'

export const Loading: LoadingComponent = ({
  size = 24,
  css = {},
  kind = KIND.primary,
  disabled = false,
  ...props
}) => {
  const styles: any = { ...getComputedStyles({ size, kind, disabled }), ...css }
  return <StyledLoading css={styles} data-fi="loading" {...props} />
}
