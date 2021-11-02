import { ComponentProps, FC, ReactNode } from 'react'
import { Enhancer, KINDS, SIZES } from '../../types'
import {
  StyledContainer,
  StyledContainerInput,
  StyledLabel,
  StyledTextarea,
} from './styled'

type TextareaProps = Omit<ComponentProps<typeof StyledTextarea>, 'size'> & {
  containerProps?: ComponentProps<typeof StyledContainer>
  inputContainerProps?: ComponentProps<typeof StyledContainerInput>
  size?: SIZES
  resize?: boolean
  kind?: KINDS
  label?: ReactNode | string
  isDisabled?: boolean
  error?: ReactNode | string
  info?: ReactNode | string
  success?: boolean
  labelProps?: ComponentProps<typeof StyledLabel>
}

export type TextareaComponent = FC<TextareaProps>
