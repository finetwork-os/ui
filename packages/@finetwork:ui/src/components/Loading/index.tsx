import * as React from 'react'

import { StyledLoading, getComputedStyles } from './styled'

import { LoadingComponent } from './types'

export const Loading: LoadingComponent = ({
  size = 24,
  css = {},
  kind,
  disabled,
  ...props
}) => {
  const styles: any = { ...getComputedStyles({ size, kind, disabled }), ...css }
  return <StyledLoading css={styles} data-fi="loading" {...props} />
}
