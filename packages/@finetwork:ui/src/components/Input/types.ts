import { ComponentProps, FC, ReactNode, SetStateAction } from 'react'
import { Enhancer, KINDS, SIZES } from '../../types'
import {
  StyledContainer,
  StyledContainerInput,
  StyledEnhancer,
  StyledInput,
  StyledLabel,
} from './styled'

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
  enhancerProps?: ComponentProps<typeof StyledEnhancer>
  value?: string
  action?: (value: SetStateAction<string>) => void
}

type InputPasswordProps = Omit<
  React.ComponentProps<typeof StyledInput>,
  'size'
> & {
  size?: SIZES
  kind?: KINDS
  isDisabled?: boolean
}

export type InputComponent = FC<InputProps>
export type InputPasswordComponent = FC<InputPasswordProps>
