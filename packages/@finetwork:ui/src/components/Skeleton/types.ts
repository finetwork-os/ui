import { SIZES } from '@finetwork:ui/src/types'
import { ComponentProps, FC } from 'react'
import { StyledRoot } from './styled'

type SkeletonProps = Omit<ComponentProps<typeof StyledRoot>, 'hasRows'> & {
  kind?: 'primary' | 'secondary'
  width?: number | string
  height?: number | string
  backgroundColor?: string
  animationColor?: string
  borderRadius?: string
  chart?: {
    size?: SIZES
    backgroundInnerCircle?: string
  }
  group?: {
    direction: 'vertical' | 'horizontal'
    repeat: number
    gap: string
  }
}

export type SkeletonComponent = FC<SkeletonProps>
