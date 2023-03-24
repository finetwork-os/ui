import { ComponentProps } from '@stitches/react'
import { CSS } from '@stitches/react/types/css-util'
import { ReactNode } from 'react'
import { StyledDialog } from './styled'

type DialogComponentOwnProps = {
  css?: CSS
  id?: string
  overlay?: boolean
  width?: 'full' | 'auto' | string
  fullSize?: boolean
  disabledScroll?: boolean
  borderRadius?: string
  closeButton?: boolean
  closeButtonSize?: string
  content: string | ReactNode
}
export type DialogProps = ComponentProps<typeof StyledDialog> &
  DialogComponentOwnProps
