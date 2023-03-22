import { ComponentProps } from '@stitches/react'
import { CSS } from '@stitches/react/types/css-util'
import { ReactNode } from 'react'
import { StyledDialog } from './styled'

// export type DialogProps = ComponentProps<typeof Root> & {
//   overlayProps?: ComponentProps<typeof StyledOverlay>
// }

// export type DialogContentProps = ComponentProps<typeof StyledContent> & {
//   dialogRef?: Ref<HTMLDivElement>
// }

type DialogComponentOwnProps = {
  css?: CSS
  id?: string
  overlay?: boolean
  width?: string
  height?: string
  size?: 'default' | 'auto' | 'fullSize'
  isOpen?: boolean
  borderRadius?: string
  onClose?: () => void
  content: string | ReactNode
}
export type DialogProps = ComponentProps<typeof StyledDialog> &
  DialogComponentOwnProps
