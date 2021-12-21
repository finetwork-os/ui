import { ComponentProps } from '@stitches/react'
import { Ref } from 'react'
import { Root } from '@radix-ui/react-dialog'
import { StyledContent, StyledOverlay } from './styled'

export type DialogProps = ComponentProps<typeof Root> & {
  overlayProps: ComponentProps<typeof StyledOverlay>
}

export type DialogContentProps = ComponentProps<typeof StyledContent> & {
  dialogRef?: Ref<HTMLDivElement>
}
