import { Provider, Close, ToastProviderProps } from '@radix-ui/react-toast'
import * as React from 'react'
import {
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
export const Toast = StyledToast

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
