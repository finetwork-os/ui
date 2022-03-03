import {
  Button,
  Toast,
  ToastAction,
  ToastDescription,
  ToastProvider,
  ToastTitle,
} from '@finetwork/ui'
import { useState } from 'react'

const kinds = [
  'primary',
  'secondary',
  'tertiary',
  'success',
  'warning',
  'error',
  'info',
]

export const ToastPlayground = () => {
  const [notifications, setNotifications] = useState([])
  // If you want to remove notifications from tree components
  // useEffect(() => {
  //   if (notifications.length > 0) {

  // setTimeout to not remove animation
  //     setTimeout(() => {
  //       setNotifications((prev) => prev.filter((n) => n.show))
  //     }, 2000)
  //   }

  // }, [notifications])
  return (
    <ToastProvider direction="bottom-right">
      <div>
        <Button
          onClick={() =>
            setNotifications((prev) => [
              ...prev,
              {
                id: prev.length + 1,
                show: true,
                kind: kinds[Math.floor(Math.random() * kinds.length)],
              },
            ])
          }
          size="small"
        >
          Open toast
        </Button>
      </div>
      {notifications.map((notification) => (
        <Toast
          key={notification.id}
          open={notification.show}
          kind={notification.kind}
          onOpenChange={() =>
            setNotifications((prev) =>
              prev.map((n) =>
                n.id === notification.id
                  ? {
                      id: n.id,
                      show: false,
                      kind: n.kind,
                    }
                  : n
              )
            )
          }
        >
          <ToastTitle>Notification number {notification.id}</ToastTitle>
          <ToastDescription>{notification.kind.toUpperCase()}</ToastDescription>
          <ToastAction altText="Goto schedule to undo"></ToastAction>
        </Toast>
      ))}
    </ToastProvider>
  )
}
