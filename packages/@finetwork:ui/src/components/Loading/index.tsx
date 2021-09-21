import * as React from 'react'

import {
  StyledLoading,
  getComputedStyles,
} from '../../styled-components/loading'

import { KIND } from '../../types'
import { LoadingComponent } from '../../types/components/loading'

export const Loading: LoadingComponent = ({
  size = 24,
  css = {},
  kind = KIND.primary,
  ...props
}) => {
  const styles: any = { ...getComputedStyles({ size, kind }), ...css }
  return <StyledLoading css={styles} data-fi="loading" {...props} />
}
