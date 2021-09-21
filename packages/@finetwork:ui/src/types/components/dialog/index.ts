import { ComponentProps } from '@stitches/react'
import { Ref } from 'react'
import { Root } from '@radix-ui/react-dialog'
import { StyledContent } from '../../../styled-components/dialog'

export type DialogProps = ComponentProps<typeof Root>

export type DialogContentProps = ComponentProps<typeof StyledContent> & {
  dialogRef?: Ref<HTMLDivElement>
}
