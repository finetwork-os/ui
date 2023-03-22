import { useWindowSize } from '@finetwork:ui/src/hooks/useWindowSize'
import * as React from 'react'
import { StyledDialog } from './styled'
import { DialogProps } from './types'

// import * as DialogPrimitive from '@radix-ui/react-dialog'
// import * as React from 'react'
// import {
//   CloseButton,
//   StyledContent,
//   StyledDescription,
//   StyledOverlay,
//   StyledTitle,
// } from './styled'
// import { DialogContentProps, DialogProps } from './types'

// import { DIALOG_SIZE } from '../../types'
// import { Cross1Icon } from '../icons'

// export const Dialog: React.FC<DialogProps> = ({
//   children,
//   overlayProps = {},
//   ...props
// }) => {
//   return (
//     <DialogPrimitive.Root {...props}>
//       <StyledOverlay {...overlayProps} />
//       {children}
//     </DialogPrimitive.Root>
//   )
// }

// export const DialogContent: React.FC<DialogContentProps> = ({
//   children,
//   size = DIALOG_SIZE.auto,
//   dialogRef,
//   ...props
// }) => (
//   <StyledContent size={size} ref={dialogRef} data-fi="dialog" {...props}>
//     {children}
//   </StyledContent>
// )

// export const DialogTrigger = DialogPrimitive.Trigger
// export const DialogTitle = StyledTitle
// export const DialogDescription = StyledDescription
// export const DialogClose: React.FC<React.ComponentProps<typeof CloseButton>> = (
//   props
// ) => (
//   <DialogPrimitive.Close asChild>
//     <CloseButton {...props}>
//       <Cross1Icon />
//     </CloseButton>
//   </DialogPrimitive.Close>
// )

export const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  (
    {
      children,
      id,
      overlay,
      //width,
      height,
      borderRadius,
      size,
      onClose,
      content,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false)

    const { width } = useWindowSize()

    if (size === 'auto') {
    }

    return (
      <>
        <button onClick={() => setIsOpen(true)}>{children}</button>
        <StyledDialog id={id} open={isOpen} /*size={size}*/>
          {content}
        </StyledDialog>
      </>
    )
  }
)
