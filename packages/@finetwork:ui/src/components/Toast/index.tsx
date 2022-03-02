import { Provider, Close, ToastProviderProps } from '@radix-ui/react-toast'
import { css } from '@stitches/react'
import * as React from 'react'
import {
  ProgressBar,
  StyledAction,
  StyledDescription,
  StyledTitle,
  StyledToast,
  StyledViewport,
} from './styled'

type Direction =
  | 'top-left'
  | 'top-right'
  | 'top-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-center'

const swipeDirectionByDirection: Record<
  Direction,
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
const timerFn = (fn, timer) => () => {
  fn((prev) => {
    const finalDuration = prev - 100
    if (finalDuration === 0 && timer?.current) {
      clearInterval(timer.current)
    }
    return finalDuration
  })
}
export const Toast = ({
  duration = 5000,
  type = 'background',
  kind = 'primary',
  children,
}) => {
  let timer = React.useRef<NodeJS.Timer>(null)
  const [durationLeft, setDurationLeft] = React.useState(duration)
  React.useEffect(() => {
    timer.current = setInterval(timerFn(setDurationLeft, timer.current), 100)
    return () => clearInterval(timer.current)
  }, [type])
  const percentage = (durationLeft * 100) / duration
  return (
    <StyledToast
      type="background"
      onMouseOver={() => clearTimeout(timer.current)}
      onMouseLeave={() => {
        timer.current = setInterval(
          timerFn(setDurationLeft, timer.current),
          100
        )
      }}
    >
      {type === 'background' && (
        <ProgressBar
          css={{
            width: percentage + '%',
          }}
        />
      )}
      {children}
    </StyledToast>
  )
}

export const ToastProvider: React.FC<
  Omit<ToastProviderProps, 'swipeDirection'> & {
    direction?: Direction
  }
> = ({ direction = 'bottom-right', children, ...props }) => (
  <Provider {...props} swipeDirection={swipeDirectionByDirection[direction]}>
    {children}
    <StyledViewport direction={direction} />
  </Provider>
)
