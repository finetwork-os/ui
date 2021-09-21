import { ComponentProps, FC, ReactNode } from 'react'
import { Enhancer, KINDS, SIZES } from '../../index'
import {
  StyledContainer,
  StyledContainerInput,
  StyledInput,
  StyledLabel,
} from '../../../styled-components/input'

type InputProps = Omit<
  Omit<ComponentProps<typeof StyledInput>, 'startEnhancer'>,
  'size'
> & {
  containerProps?: ComponentProps<typeof StyledContainer>
  inputContainerProps?: ComponentProps<typeof StyledContainerInput>
  size?: SIZES
  kind?: KINDS
  label?: ReactNode | string
  isDisabled?: boolean
  startEnhancer?: Enhancer
  endEnhancer?: Enhancer
  error?: ReactNode | string
  info?: ReactNode | string
  success?: boolean
  labelProps?: ComponentProps<typeof StyledLabel>
}

type InputPasswordProps = Omit<
  React.ComponentProps<typeof StyledInput>,
  'size'
> & {
  size?: SIZES
  isDisabled?: boolean
}

export type InputComponent = FC<InputProps>
export type InputPasswordComponent = FC<InputPasswordProps>
