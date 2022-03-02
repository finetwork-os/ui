import {
  Button,
  Toast,
  ToastAction,
  ToastDescription,
  ToastProvider,
  ToastTitle,
} from '@finetwork/ui'
import { useEffect, useRef, useState } from 'react'

export const ToastPlayground = () => {
  const [open, setOpen] = useState(false)
  return (
    <ToastProvider direction="top-right">
      <div>
        <Button onClick={() => setOpen(true)} size="small">
          Open toast
        </Button>
      </div>
      <Toast open={open} onOpenChange={setOpen}>
        <ToastTitle>Scheduled: Catch up</ToastTitle>
        <ToastDescription>Description</ToastDescription>
        <ToastAction asChild altText="Goto schedule to undo">
          <Button size="small" outline>
            Undo
          </Button>
        </ToastAction>
      </Toast>
    </ToastProvider>
  )
}
