import {
  Button,
  H4,
  Toast,
  ToastProvider,
  CheckIcon,
  EyeClosedIcon,
} from '@finetwork/ui'
import { useState } from 'react'
import { styled } from '../styles/stitches.config'

const kinds = [
  'primary',
  'secondary',
  'tertiary',
  'success',
  'warning',
  'error',
  'info',
]

const StyledContainer = styled('div', {
  display: 'grid',
  gridAutoFlow: 'column',
  alignItems: 'center',
  gap: '70px',
  justifyContent: 'space-around',
  padding: '0px 30px',
})

export const StyledButton = styled(Button, {
  margin: '0.1rem 1rem',
  variants: {
    button: {
      primary: {},
    },
  },
  compoundVariants: [
    {
      button: 'primary',
      css: {
        backgroundColor: '#fff',
        '&:hover': {
          backgroundColor: '$primary100',
        },
      },
    },
  ],
})

export const StyledCheckIcon = styled(CheckIcon, {
  color: '$primary',
  width: 20,
  height: 20,
})

export const StyledCopyIcon = styled(EyeClosedIcon, {
  color: '$primary',
  width: 20,
  height: 20,
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
                copied: false,
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
          withProgressBar
          pauseOnFocusLoss={true}
          pauseOnHover={false}
          duration={5000}
          key={notification.id}
          kind={notification.kind}
          open={notification.show}
          onOpenChange={() => {
            setNotifications((prev) =>
              prev.map((n) =>
                n.id === notification.id
                  ? {
                      ...n,
                      show: false,
                    }
                  : n
              )
            )
          }}
        >
          <StyledContainer>
            <H4 kind="primary">Hello world!</H4>
            <StyledButton
              button="primary"
              shape="circle"
              onClick={() => {
                setNotifications((prev) =>
                  prev.map((n) =>
                    n.id === notification.id
                      ? {
                          ...n,
                          copied: true,
                        }
                      : n
                  )
                )
              }}
            >
              {notification.copied ? <StyledCheckIcon /> : <StyledCopyIcon />}
            </StyledButton>
          </StyledContainer>
        </Toast>
      ))}
    </ToastProvider>
  )
}
