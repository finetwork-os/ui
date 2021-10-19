import * as React from 'react'

import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons'
import { InputComponent, InputPasswordComponent } from './types'
import { KIND, SIZE } from '../../types'
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

import { RenderEnhancer } from '../../utils'

const InputPassword: InputPasswordComponent = React.forwardRef(
  ({ size, ...props }, ref) => {
    const [visiblePassword, setVisiblePassword] = React.useState(false)
    return (
      <StyledContainerInputPassword>
        <StyledInput
          {...props}
          type={visiblePassword ? 'text' : 'password'}
          size={size}
          ref={ref}
        />
        <StyledEyeButton
          onClick={() => setVisiblePassword(!visiblePassword)}
          type="button"
        >
          <RenderEnhancer
            Enhancer={
              visiblePassword ? (
                <EyeOpenIcon width={20} />
              ) : (
                <EyeClosedIcon width={20} />
              )
            }
          />
        </StyledEyeButton>
      </StyledContainerInputPassword>
    )
  }
)

export const Input: InputComponent = React.forwardRef(
  (
    {
      size = SIZE.medium,
      kind = KIND.primary,
      label,
      startEnhancer,
      endEnhancer,
      inputContainerProps = {},
      containerProps = {},
      css,
      error,
      info,
      type = 'text',
      success = false,
      id,
      labelProps = {},
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
    return (
      <StyledContainer data-fi="input" {...containerProps}>
        {label && (
          <StyledLabel
            htmlFor={id}
            size={size}
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
            <StyledEnhancer>
              <RenderEnhancer Enhancer={startEnhancer} />
            </StyledEnhancer>
          )}
          {type === 'password' ? (
            <InputPassword
              {...props}
              size={size}
              ref={ref}
              id={id}
              startEnhancer={!!startEnhancer}
              isDisabled={props.disabled}
            />
          ) : (
            <StyledInput
              {...props}
              size={size}
              ref={ref}
              id={id}
              startEnhancer={!!startEnhancer}
              type={type}
              isDisabled={props.disabled}
            />
          )}
          {success && !error && (
            <StyledEnhancer success={success}>
              <RenderEnhancer Enhancer={<StyledSuccessIcon />} />
            </StyledEnhancer>
          )}
          {endEnhancer && (
            <StyledEnhancer>
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
