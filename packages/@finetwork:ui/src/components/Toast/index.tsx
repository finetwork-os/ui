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
    <StyledToast {...handlers} {...props} kind={kind} duration={duration}>
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
