import {
  Button,
  Toast,
  ToastAction,
  ToastDescription,
  ToastProvider,
  ToastTitle,
} from '@finetwork/ui'
import { useState } from 'react'

export const ToastPlayground = () => {
  const [notifications, setNotifications] = useState([])
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
              },
            ])
          }
          size="small"
        >
          Open toast
        </Button>
      </div>
      {notifications.map((notification, index) => (
        <Toast
          key={notification.id}
          open={notification.show}
          css={{
            zIndex: index,
          }}
          onOpenChange={() =>
            setNotifications((prev) =>
              prev.map((n) =>
                n.id === notification.id
                  ? {
                      id: n.id,
                      show: false,
                    }
                  : n
              )
            )
          }
        >
          <ToastTitle>Scheduled: Catch up</ToastTitle>
          <ToastDescription>
            Description: notification number {notification.id}
          </ToastDescription>
          <ToastAction altText="Goto schedule to undo"></ToastAction>
        </Toast>
      ))}
    </ToastProvider>
  )
}
