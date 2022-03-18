import * as React from 'react'
import { Provider, Close, ToastProviderProps } from '@radix-ui/react-toast'
import {
  ProgressBar,
  StyledAction,
  StyledDescription,
  StyledTitle,
  StyledToast,
  StyledViewport,
  StyledCloseButton,
} from './styled'
import { DIRECTION, ToastComponent, ToastProviderComponent } from './types'
import { KIND } from '../../types'

import { Cross1Icon } from '../icons'

const swipeDirectionByDirection: Record<
  DIRECTION,
  ToastProviderProps['swipeDirection']
> = {
  'top-left': 'left',
  'top-center': 'down',
  'top-right': 'right',
  'bottom-left': 'left',
  'bottom-center': 'up',
  'bottom-right': 'right',
}

export const ToastTitle = StyledTitle
export const ToastDescription = StyledDescription
export const ToastAction = StyledAction
export const ToastClose = Close

const getTimerFn = (fn, timer) => () => {
  return setInterval(
    () =>
      fn((prev) => {
        const finalDuration = prev - 100
        if (finalDuration === 0 && timer?.current) {
          clearInterval(timer.current)
        }
        return finalDuration
      }),
    100
  )
}
export const Toast: ToastComponent = ({
  duration = 5000,
  kind = KIND.default,
  withProgressBar = false,
  children,
  closeable = true,
  onOpenChange,
  pauseOnFocusLoss = true,
  pauseOnHover = true,
  open,
  ...props
}) => {
  const [isRunning, setIsRunning] = React.useState(true)
  const [isOpen, setIsOpen] = React.useState(open)
  const [durationLeft, setDurationLeft] = React.useState(duration)
  const timer = React.useRef<NodeJS.Timer>(null)

  const playToast = () => setIsRunning(true)
  const pauseToast = () => setIsRunning(false)
  const closeToast = () => setIsOpen(false)
  const bindFocusEvents = () => {
    if (!document.hasFocus()) pauseToast()
    window.addEventListener('focus', playToast)
    window.addEventListener('blur', pauseToast)
  }
  const unbindFocusEvents = () => {
    window.removeEventListener('focus', playToast)
    window.removeEventListener('blur', pauseToast)
  }
  const handleChange = (open: boolean) => {
    setIsOpen(open)
    onOpenChange?.(open)
  }
  const reset = () => {
    pauseToast()
    setTimeout(() => {
      setDurationLeft(0)
    }, 300)
  }

  React.useEffect(() => {
    if (!isOpen) {
      reset()
    }
  }, [isOpen])
  React.useEffect(() => {
    if (withProgressBar && isRunning && durationLeft > 0) {
      timer.current = getTimerFn(setDurationLeft, timer)()
    }
    return () => clearInterval(timer.current)
  }, [withProgressBar, isRunning, durationLeft])
  React.useEffect(() => {
    if (!pauseOnFocusLoss) {
      if (durationLeft > 0) return
      return closeToast()
    }
    if (durationLeft > 0) {
      bindFocusEvents()
      return () => unbindFocusEvents()
    }
    unbindFocusEvents()
    pauseToast()
    closeToast()
  }, [pauseOnFocusLoss, durationLeft])

  const handlers = {
    ...(pauseOnHover && {
      onMouseOver: pauseToast,
      onMouseLeave: playToast,
    }),
  }

  const percentage = React.useMemo(
    () => (withProgressBar ? (durationLeft * 100) / duration : 0),
    [withProgressBar, durationLeft, duration]
  )

  return (
    <StyledToast
      {...props}
      kind={kind}
      duration={durationLeft}
      onOpenChange={handleChange}
      open={isOpen}
      {...handlers}
    >
      {withProgressBar && (
        <ProgressBar
          kind={kind}
          css={{
            width: `${percentage}%`,
          }}
        />
      )}
      {closeable && (
        <StyledCloseButton>
          <Cross1Icon />
        </StyledCloseButton>
      )}
      {children}
    </StyledToast>
  )
}

export const ToastProvider: ToastProviderComponent = ({
  direction = DIRECTION['bottom-right'],
  children,
  ...props
}) => (
  <Provider {...props} swipeDirection={swipeDirectionByDirection[direction]}>
    {children}
    <StyledViewport direction={direction} />
  </Provider>
)
