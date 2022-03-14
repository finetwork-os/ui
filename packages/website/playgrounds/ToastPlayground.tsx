import {
  Button,
  CheckIcon,
  H4,
  H5,
  H6,
  Paragraph4,
  Paragraph5,
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
  '& div': {
    display: 'inline-block',
  },
})

const StyledButton = styled(Button, {
  marginLeft: '1rem',
  '&:hover': {
    backgroundColor: '#fff !important',
    '& svg': {
      color: '$primary',
    },
  },
})

export const ToastPlayground = () => {
  const [notifications, setNotifications] = useState([])
  // // If you want to remove notifications from tree components
  // useEffect(() => {
  //   if (notifications.length > 0) {

  //     // setTimeout to not remove animation
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
          withProgressBar={false}
          clousable={true}
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
            <H6>SAMPLE TITLE: </H6>
          </ToastTitle>
          <ToastDescription>
            <StyledDiv>
              <Paragraph5>Sample description {`${notification.id}`}</Paragraph5>
            </StyledDiv>
          </ToastDescription>
          <ToastAction altText="Goto schedule to undo">
            <StyledButton
              kind="primary"
              shape="circle"
            >
              <CheckIcon />
            </StyledButton>
          </ToastAction>
        </Toast>
      ))}
    </ToastProvider>
  )
}
