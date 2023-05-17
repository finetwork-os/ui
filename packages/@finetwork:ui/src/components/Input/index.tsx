import * as React from 'react'

import { InputComponent, InputPasswordComponent, InputProps } from './types'
import {
  StyledContainer,
  StyledContainerInput,
  StyledContainerInputPassword,
  StyledEnhancer,
  StyledEyeButton,
  StyledInput,
  StyledLabel,
  StyledMessage,
  StyledMessageContainer,
  StyledSuccessIcon,
} from './styled'

import { RenderEnhancer } from '../../utils'
import { EyeClosedIcon, EyeOpenIcon, ErrorIcon, CloseIcon } from '../icons'

function Button({ children }) {
  return <button>{children}</button>
}

const useFocus = () => {
  const [isFocused, setIsFocused] = React.useState(false)

  const focusInput = () => setIsFocused(true)
  const unfocusInput = () => setIsFocused(false)

  const handleBlur = (ref: React.ForwardedRef<HTMLInputElement>) => {
    setTimeout(() => {
      if (ref === null || typeof ref === 'function') return
      if (document.activeElement === ref.current) return
      unfocusInput()
    }, 200)
  }

  return { focusInput, unfocusInput, isFocused, handleBlur }
}

const InputPassword: InputPasswordComponent = React.forwardRef(
  ({ size, kind, handleClear, error, ...props }, ref) => {
    const { isFocused, focusInput, handleBlur } = useFocus()
    const [visiblePassword, setVisiblePassword] = React.useState(false)

    function chooseIconToShow() {
      const { value } = props
      if (!handleClear) {
        if (error) {
          return <StyledEnhancer isAnotherEnhancer>
            <RenderEnhancer Enhancer={<ErrorIcon height={15} width={15} />} />
          </StyledEnhancer>
        }
        return <></>
      } else {
        if (!isFocused) {
          if (error) {
            return <StyledEnhancer isAnotherEnhancer>
              <RenderEnhancer Enhancer={<ErrorIcon height={15} width={15} />} />
            </StyledEnhancer>
          }
        } else {
          if (value !== undefined && value !== null)
            return <button onClick={handleClear}>
              <StyledEnhancer isAnotherEnhancer>
                <RenderEnhancer Enhancer={<CloseIcon height={15} width={15} />} />
              </StyledEnhancer>
            </button>

          if (error)
            return <StyledEnhancer isAnotherEnhancer>
              <RenderEnhancer Enhancer={<ErrorIcon height={15} width={15} />} />
            </StyledEnhancer>
        }
      }
    }

    return (
      <StyledContainerInputPassword>
        <StyledInput
          {...props}
          type={visiblePassword ? 'text' : 'password'}
          size={size}
          kind={kind}
          ref={ref}
          onFocus={focusInput}
          onBlur={(e) => handleBlur(ref)}
        />
        {
          chooseIconToShow()
        }
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
      handleClear,
      ...props
    },
    ref
  ) => {
    const { isFocused, focusInput, handleBlur } = useFocus()

    function chooseIconToShow() {
      const { value } = props
      if (type === 'password') return null
      if (!handleClear) {
        if (error) {
          return <StyledEnhancer success={success} {...enhancerProps}>
            <RenderEnhancer Enhancer={<ErrorIcon height={15} width={15} />} />
          </StyledEnhancer>
        }
        if (success) {
          return <StyledEnhancer success={success} {...enhancerProps}>
            <RenderEnhancer Enhancer={<StyledSuccessIcon height={15} width={15} />} />
          </StyledEnhancer>
        }
        return <></>
      } else {
        if (!isFocused) {
          if (error) {
            return <StyledEnhancer success={success} {...enhancerProps}>
              <RenderEnhancer Enhancer={<ErrorIcon height={15} width={15} />} />
            </StyledEnhancer>
          }
          if (success) {
            return <StyledEnhancer success={success} {...enhancerProps}>
              <RenderEnhancer Enhancer={<StyledSuccessIcon height={15} width={15} />} />
            </StyledEnhancer>
          }
        } else {
          if (value !== undefined && value !== null)
            return <button onClick={handleClear}>
              <StyledEnhancer success={success} {...enhancerProps}>
                <RenderEnhancer Enhancer={<CloseIcon height={15} width={15} />} />
              </StyledEnhancer>
            </button>

          if (error)
            return <StyledEnhancer success={success} {...enhancerProps}>
              <RenderEnhancer Enhancer={<ErrorIcon height={15} width={15} />} />
            </StyledEnhancer>
        }
      }
    }

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
          {type === 'password' ? (
            <InputPassword
              size={size}
              ref={ref}
              kind={kind}
              id={id}
              startEnhancer={!!startEnhancer}
              isDisabled={props.disabled}
              handleClear={handleClear}
              error={error}
              {...props}
            />
          ) : (
            <StyledInput
              {...props}
              size={size}
              ref={ref}
              id={id}
              kind={kind}
              startEnhancer={!!startEnhancer}
              type={type}
              isDisabled={props.disabled}
              onFocus={focusInput}
              onBlur={() => handleBlur(ref)}
            />
          )}
          {
            chooseIconToShow()
          }
          {endEnhancer && (
            <StyledEnhancer {...enhancerProps}>
              <RenderEnhancer Enhancer={endEnhancer} />
            </StyledEnhancer>
          )}
        </StyledContainerInput>
        {(info || error) && (
          <StyledMessageContainer>
            <>
              {
                error && <RenderEnhancer Enhancer={<ErrorIcon height={12} width={12} />} />
              }
              <StyledMessage size={size} error={!!error} disabled={props.disabled}>
                <RenderEnhancer Enhancer={error || info} />
              </StyledMessage>
            </>
          </StyledMessageContainer>
        )}
      </StyledContainer>
    )
  }
)
