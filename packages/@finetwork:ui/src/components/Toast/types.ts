import type { ToastProviderProps as ToastProviderPrimitiveProps } from '@radix-ui/react-toast'
import { KINDS } from '../../types'
import { StyledToast } from './styled'

export enum DIRECTION {
  'top-left' = 'top-left',
  'top-right' = 'top-right',
  'top-center' = 'top-center',
  'bottom-left' = 'bottom-left',
  'bottom-right' = 'bottom-right',
  'bottom-center' = 'bottom-center',
}
export type DIRECTIONS = keyof typeof DIRECTION

export enum TOAST_KIND {
  info = 'info',
  error = 'error',
  success = 'success',
  warning = 'warning',
}
export type TOAST_KINDS = keyof typeof TOAST_KIND

type ToastProps = React.ComponentProps<typeof StyledToast> & {
  kind?: KINDS | TOAST_KINDS
  withProgressBar?: boolean
  closeable?: boolean
  pauseOnFocusLoss?: boolean
  pauseOnHover?: boolean
}
type ToastProviderProps = Omit<
  ToastProviderPrimitiveProps,
  'swipeDirection'
> & {
  direction?: DIRECTIONS
}
export type ToastComponent = React.FC<ToastProps>
export type ToastProviderComponent = React.FC<ToastProviderProps>
