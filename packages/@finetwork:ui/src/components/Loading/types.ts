import { FC } from 'react'

export type LoadingProps = {
  size?: number
  speed?: number
  color?: string
  thickness?: number
}
export type LoadingComponent = FC<LoadingProps>
