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

enum ACTIONS {
  RESET = 'reset',
  DURATION_LEFT = 'durationLeft',
  IS_OPEN = 'isOpen',
  IS_RUNNING = 'isRunning',
}

export const ToastTitle = StyledTitle
export const ToastDescription = StyledDescription
export const ToastAction = StyledAction
export const ToastClose = Close

const getFinalDuration = (durationLeft, timer) => {
  const finalDuration = durationLeft - 100
  if (finalDuration === 0 && timer?.current) {
    clearInterval(timer.current)
  }
  return finalDuration
}

const getTimerFn = (fn, timer, durationLeft) => () => {
  return setInterval(() => {
    const currentDuration = getFinalDuration(durationLeft, timer)
    fn({ type: 'durationLeft', payload: currentDuration })
  }, 100)
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.RESET:
      return { ...state, isRunning: false, durationLeft: 0 }
    case ACTIONS.DURATION_LEFT:
      return { ...state, durationLeft: action.payload }
    case ACTIONS.IS_OPEN:
      return { ...state, isOpen: action.payload, isRunning: action.payload }
    case ACTIONS.IS_RUNNING:
      return { ...state, isRunning: action.payload }
    default:
      return state
  }
}

export const Toast: ToastComponent = ({
  duration = 5000,
  kind = KIND.primary,
  withProgressBar = false,
  children,
  closeable = true,
  onOpenChange,
  pauseOnFocusLoss = true,
  pauseOnHover = true,
  open,
  ...props
}) => {
  const [state, dispatch] = React.useReducer(reducer, {
    isRunning: open,
    isOpen: open,
    durationLeft: duration,
  })
  const timer = React.useRef<NodeJS.Timer>(null)

  const playToast = () => dispatch({ type: ACTIONS.IS_RUNNING, payload: true })
  const pauseToast = () =>
    dispatch({ type: ACTIONS.IS_RUNNING, payload: false })
  const openToast = () => dispatch({ type: ACTIONS.IS_OPEN, payload: true })
  const closeToast = () => dispatch({ type: ACTIONS.IS_OPEN, payload: false })

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
    dispatch({ type: ACTIONS.IS_OPEN, payload: open })
    onOpenChange?.(open)
  }
  const reset = () => {
    pauseToast()
    setTimeout(() => {
      dispatch({ type: ACTIONS.DURATION_LEFT, payload: 0 })
    }, 300)
  }

  React.useEffect(() => {
    if (!state.isOpen) {
      reset()
    }
  }, [state.isOpen])
  React.useEffect(() => {
    if (!open) return closeToast()
    openToast()
  }, [open])
  React.useEffect(() => {
    dispatch({ type: ACTIONS.DURATION_LEFT, payload: duration })
  }, [duration])
  React.useEffect(() => {
    if (withProgressBar && state.isRunning && state.durationLeft > 0) {
      timer.current = getTimerFn(dispatch, timer, state.durationLeft)()
    }
    return () => clearInterval(timer.current)
  }, [withProgressBar, state.isRunning, state.durationLeft])
  React.useEffect(() => {
    if (!pauseOnFocusLoss) {
      if (state.durationLeft > 0) return
      return closeToast()
    }
    if (state.durationLeft > 0) {
      bindFocusEvents()
      return () => unbindFocusEvents()
    }
    unbindFocusEvents()
    pauseToast()
    closeToast()
  }, [pauseOnFocusLoss, state.durationLeft])

  const handlers = {
    ...(pauseOnHover && {
      onMouseOver: pauseToast,
      onMouseLeave: playToast,
    }),
  }

  const percentage = React.useMemo(
    () => (withProgressBar ? (state.durationLeft * 100) / duration : 0),
    [withProgressBar, state.durationLeft, duration]
  )

  return (
    <StyledToast
      {...props}
      duration={state.durationLeft}
      onOpenChange={handleChange}
      open={state.isOpen}
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
