import {
  Button,
  Toast,
  ToastAction,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@finetwork/ui'
import { useEffect, useRef, useState } from 'react'

export const ToastPlayground = () => {
  const [open, setOpen] = useState(false)
  const timerRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <ToastProvider swipeDirection="right">
      <Button
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => {
            setOpen(true)
          }, 100)
        }}
      >
        Add to calendar
      </Button>

      <Toast open={open} onOpenChange={setOpen}>
        <ToastTitle>Scheduled: Catch up</ToastTitle>
        <ToastDescription>Description</ToastDescription>
        <ToastAction asChild altText="Goto schedule to undo">
          <Button size="small">Undo</Button>
        </ToastAction>
      </Toast>
      <ToastViewport />
    </ToastProvider>
  )
}
