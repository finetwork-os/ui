import {
  Button,
  CheckIcon,
  H3,
  H4,
  H5,
  Toast,
  ToastAction,
  ToastDescription,
  ToastProvider,
  ToastTitle,
} from '@finetwork/ui'
import { useState } from 'react'
import { styled } from '@finetwork:ui/src/stitches.config'

const kinds = [
  'primary',
  'secondary',
  'tertiary',
  'success',
  'warning',
  'error',
  'info',
]

const StyledDiv = styled('div', {
  display: 'grid',
  gridAutoFlow: 'column',
  alignItems: 'center',
  gap: '50px',
  '& div': {
    display: 'inline-block',
  },
  '& svg': {
    transition: '0.3s',
    color: '#5F3DFF',
  },
})

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
    <ToastProvider direction="top-center">
      <div>
        <Button
          onClick={() =>
            setNotifications((prev) => [
              ...prev,
              {
                id: prev.length + 1,
                show: true,
                kind: 'primary',
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
          withProgressBar={false}
          withCloseButton={true}
          duration={15000}
          key={notification.id}
          open={notification.show}
          kind={notification.kind}
          onOpenChange={() => {
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
          }}
        >
          <ToastTitle>
            <H5>PUK: </H5>
          </ToastTitle>
          <ToastDescription>
            <StyledDiv>
              <H4 css={{ color: '#5F3DFF' }}>77777777</H4>
              <Button
                kind="primary"
                shape="circle"
                css={{
                  backgroundColor: '#fff',
                  '&:hover': {
                    backgroundColor: '#5F3DFF',
                    '& svg': {
                      color: '#fff',
                    },
                  },
                }}
              >
                <CheckIcon />
              </Button>
            </StyledDiv>
          </ToastDescription>
          <ToastAction altText="Goto schedule to undo"></ToastAction>
        </Toast>
      ))}
    </ToastProvider>
  )
}
