import { ComponentProps, FC } from 'react'

import { StyledRoot } from '../../../styled-components/skeleton'

type SkeletonProps = Omit<ComponentProps<typeof StyledRoot>, 'hasRows'> & {
  rows?: number
  width: number | string
  height: number | string
  backgroundColor?: string
  animationColor?: string
}

export type SkeletonComponent = FC<SkeletonProps>
