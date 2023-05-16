import * as React from 'react'

import { InputComponent, InputPasswordComponent } from './types'
import {
  StyledContainer,
  StyledContainerInput,
  StyledContainerInputPassword,
  StyledEnhancer,
  StyledEyeButton,
  StyledInput,
  StyledLabel,
  StyledMessage,
  StyledSuccessIcon,
} from './styled'

import {
  RenderEnhancer,
  formatPhoneNumber,
  removeFormatPhoneNumber,
} from '../../utils'
import { EyeClosedIcon, EyeOpenIcon } from '../icons'

const InputPassword: InputPasswordComponent = React.forwardRef(
  ({ size, kind, ...props }, ref) => {
    const [visiblePassword, setVisiblePassword] = React.useState(false)
    return (
      <StyledContainerInputPassword>
        <StyledInput
          {...props}
          type={visiblePassword ? 'text' : 'password'}
          size={size}
          kind={kind}
          ref={ref}
        />
        <StyledEyeButton
          onClick={() => setVisiblePassword(!visiblePassword)}
          type="button"
        >
          <RenderEnhancer
            Enhancer={visiblePassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
          />
        </StyledEyeButton>
      </StyledContainerInputPassword>
    )
  }
)

export const Input: InputComponent = React.forwardRef(
  (
    {
      size,
      kind,
      label,
      startEnhancer,
      endEnhancer,
      inputContainerProps = {},
      containerProps = {},
      error,
      info,
      type = 'text',
      success,
      id,
      labelProps = {},
      enhancerProps = {},
      value,
      action,
      ...props
    },
    ref
  ) => {
    React.useEffect(() => {
      if (label && !id) {
        console.warn(
          'Input id is undefined, you should put id if you are using label'
        )
      }
    }, [])

    const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
      const {
        target: { value },
      } = e
      action(removeFormatPhoneNumber(value))
    }

    function getTypeInput() {
      if (type === 'password') {
        return (
          <InputPassword
            {...props}
            size={size}
            ref={ref}
            kind={kind}
            id={id}
            startEnhancer={!!startEnhancer}
            isDisabled={props.disabled}
          />
        )
      } else if (type === 'telf') {
        return (
          <StyledInput
            {...props}
            size={size}
            maxLength={11}
            minLength={11}
            pattern="^[6-9]{1}[0-9][0-9 ]+[0-9][0-9][0-9 ]+[0-9][0-9][0-9]$"
            ref={ref}
            id={id}
            kind={kind}
            startEnhancer={!!startEnhancer}
            onChange={handleChangeNumber}
            type={type}
            isDisabled={props.disabled}
            value={
              isNaN(Number(value))
                ? ''
                : formatPhoneNumber(value?.toString()) || ''
            }
          />
        )
      } else {
        return (
          <StyledInput
            {...props}
            size={size}
            ref={ref}
            id={id}
            kind={kind}
            startEnhancer={!!startEnhancer}
            type={type}
            isDisabled={props.disabled}
          />
        )
      }
    }

    return (
      <StyledContainer data-fi="input" {...containerProps}>
        {label && (
          <StyledLabel
            htmlFor={id}
            size={size}
            kind={kind}
            error={!!error}
            disabled={props.disabled}
            font={props.font}
            {...labelProps}
          >
            {label}
          </StyledLabel>
        )}
        <StyledContainerInput
          {...inputContainerProps}
          size={size}
          kind={kind}
          error={!!error}
          disabled={props.disabled}
          success={success}
        >
          {startEnhancer && (
            <StyledEnhancer {...enhancerProps}>
              <RenderEnhancer Enhancer={startEnhancer} />
            </StyledEnhancer>
          )}
          {getTypeInput()}
          {success && !error && (
            <StyledEnhancer success={success} {...enhancerProps}>
              <RenderEnhancer Enhancer={<StyledSuccessIcon />} />
            </StyledEnhancer>
          )}
          {endEnhancer && (
            <StyledEnhancer {...enhancerProps}>
              <RenderEnhancer Enhancer={endEnhancer} />
            </StyledEnhancer>
          )}
        </StyledContainerInput>
        {(info || error) && (
          <StyledMessage size={size} error={!!error} disabled={props.disabled}>
            <RenderEnhancer Enhancer={error || info} />
          </StyledMessage>
        )}
      </StyledContainer>
    )
  }
)
