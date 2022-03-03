import * as React from 'react'
import { Provider, Close, ToastProviderProps } from '@radix-ui/react-toast'
import {
  ProgressBar,
  StyledAction,
  StyledDescription,
  StyledTitle,
  StyledToast,
  StyledViewport,
} from './styled'
import { DIRECTION, ToastComponent, ToastProviderComponent } from './types'
import { KIND } from '../../types'

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
  kind = KIND.primary,
  withProgressBar = true,
  children,
  ...props
}) => {
  const timer = React.useRef<NodeJS.Timer>(null)
  const [durationLeft, setDurationLeft] = React.useState(duration)
  React.useEffect(() => {
    if (withProgressBar) {
      timer.current = getTimerFn(setDurationLeft, timer)()
    }
    return () => clearInterval(timer.current)
  }, [])
  const percentage = withProgressBar ? (durationLeft * 100) / duration : 0
  const handlers = {
    ...(withProgressBar && {
      onMouseOver: () => clearTimeout(timer.current),
      onMouseLeave: () => {
        timer.current = getTimerFn(setDurationLeft, timer)()
      },
    }),
  }
  return (
    <StyledToast {...handlers} {...props} kind={kind}>
      {withProgressBar && (
        <ProgressBar
          kind={kind}
          css={{
            width: `${percentage}%`,
          }}
        />
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
