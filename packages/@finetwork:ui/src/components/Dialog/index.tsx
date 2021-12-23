import * as DialogPrimitive from '@radix-ui/react-dialog'
import * as React from 'react'

import {
  CloseButton,
  StyledContent,
  StyledDescription,
  StyledOverlay,
  StyledTitle,
} from './styled'
import { DialogContentProps, DialogProps } from './types'

import { Cross1Icon } from '@radix-ui/react-icons'
import { DIALOG_SIZE } from '../../types'

export const Dialog: React.FC<DialogProps> = ({
  children,
  overlayProps = {},
  ...props
}) => {
  return (
    <DialogPrimitive.Root {...props}>
      <StyledOverlay {...overlayProps} />
      {children}
    </DialogPrimitive.Root>
  )
}

export const DialogContent: React.FC<DialogContentProps> = ({
  children,
  size = DIALOG_SIZE.auto,
  dialogRef,
  ...props
}) => (
  <StyledContent size={size} ref={dialogRef} data-fi="dialog" {...props}>
    {children}
  </StyledContent>
)

export const DialogTrigger = DialogPrimitive.Trigger
export const DialogTitle = StyledTitle
export const DialogDescription = StyledDescription
export const DialogClose: React.FC<React.ComponentProps<typeof CloseButton>> = (
  props
) => (
  <DialogPrimitive.Close asChild>
    <CloseButton {...props}>
      <Cross1Icon />
    </CloseButton>
  </DialogPrimitive.Close>
)
