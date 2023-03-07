import { ComponentProps, FC } from 'react'

import { StyledRoot } from './styled'

type SkeletonProps = Omit<ComponentProps<typeof StyledRoot>, 'hasRows'> & {
  rows?: number
  width: number | string
  height: number | string
  backgroundColor?: string
  animationColor?: string
  borderRadius?: string
  chart?: boolean
}

export type SkeletonComponent = FC<SkeletonProps>
