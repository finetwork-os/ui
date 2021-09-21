import * as DialogPrimitive from '@radix-ui/react-dialog'
import * as React from 'react'

import {
  CloseButton,
  StyledContent,
  StyledDescription,
  StyledOverlay,
  StyledTitle,
} from '../../styled-components/dialog'
import { DialogContentProps, DialogProps } from '../../types/components/dialog'

import { Cross1Icon } from '@radix-ui/react-icons'
import { DIALOG_SIZE } from '../../types'

export const Dialog: React.FC<DialogProps> = ({ children, ...props }) => {
  return (
    <DialogPrimitive.Root {...props}>
      <StyledOverlay />
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
  <StyledContent size={size} ref={dialogRef} fi-data="dialog" {...props}>
    {children}
    <DialogPrimitive.Close asChild>
      <CloseButton>
        <Cross1Icon />
      </CloseButton>
    </DialogPrimitive.Close>
  </StyledContent>
)

export const DialogTrigger = DialogPrimitive.Trigger
export const DialogTitle = StyledTitle
export const DialogDescription = StyledDescription
export const DialogClose = DialogPrimitive.Close
