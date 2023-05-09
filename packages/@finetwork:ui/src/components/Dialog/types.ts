import { ComponentProps } from '@stitches/react'
import { CSS } from '@stitches/react/types/css-util'
import { StyledDialog, StyledDialogTrigger } from './styled'

type DialogTriggerComponentOwnProps = {
  css?: CSS
  id?: string
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export type DialogTriggerProps = ComponentProps<typeof StyledDialogTrigger> &
  DialogTriggerComponentOwnProps

type DialogComponentOwnProps = {
  css?: CSS
  id?: string
  overlay?: boolean
  width?: 'full' | 'auto' | string
  fullSize?: boolean
  borderRadius?: string
  closeButton?: boolean
  closeButtonSize?: string
  bottomSheet?: boolean
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export type DialogProps = ComponentProps<typeof StyledDialog> &
  DialogComponentOwnProps
