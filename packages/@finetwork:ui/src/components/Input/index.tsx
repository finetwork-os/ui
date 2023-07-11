import * as React from 'react'

import {
  IconsContainer,
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
import { InputComponent, InputPasswordComponent } from './types'

import {
  RenderEnhancer,
  formatPhoneNumber,
  removeFormatPhoneNumber,
} from '../../utils'
import { CloseIcon, ErrorIcon, EyeClosedIcon, EyeOpenIcon } from '../icons'

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
  ({ size, kind, handleClear, isError, ...props }, ref) => {
    const { isFocused, focusInput, handleBlur } = useFocus()
    const [visiblePassword, setVisiblePassword] = React.useState(false)

    function chooseIconToShow() {
      const { value } = props
      if (!handleClear) {
        if (isError) {
          return (
            <StyledEnhancer isAnotherEnhancer>
              <RenderEnhancer Enhancer={<ErrorIcon height={15} width={15} />} />
            </StyledEnhancer>
          )
        }
        return null
      } else {
        if (!isFocused) {
          if (isError) {
            return (
              <StyledEnhancer isAnotherEnhancer>
                <RenderEnhancer
                  Enhancer={<ErrorIcon height={15} width={15} />}
                />
              </StyledEnhancer>
            )
          }
        } else {
          if (value !== undefined && value !== null && value !== '')
            return (
              <button type="button" onClick={handleClear} tabIndex={-1}>
                <StyledEnhancer isAnotherEnhancer>
                  <RenderEnhancer
                    Enhancer={<CloseIcon height={15} width={15} />}
                  />
                </StyledEnhancer>
              </button>
            )

          if (isError)
            return (
              <StyledEnhancer isAnotherEnhancer>
                <RenderEnhancer
                  Enhancer={<ErrorIcon height={15} width={15} />}
                />
              </StyledEnhancer>
            )
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
          onBlur={() => handleBlur(ref)}
        />
        <IconsContainer>
          {chooseIconToShow()}
          <StyledEyeButton
            onClick={() => {
              setVisiblePassword(!visiblePassword)
              if (ref === null || typeof ref === 'function') return
              ref.current.focus()
            }}
            type="button"
          >
            <RenderEnhancer
              Enhancer={visiblePassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
            />
          </StyledEyeButton>
        </IconsContainer>
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
      isError,
      errorMessage,
      info,
      type = 'text',
      success,
      id,
      labelProps = {},
      enhancerProps = {},
      handleChange,
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
        if (isError) {
          return (
            <StyledEnhancer {...enhancerProps}>
              <RenderEnhancer Enhancer={<ErrorIcon height={15} width={15} />} />
            </StyledEnhancer>
          )
        }
        if (success) {
          return (
            <StyledEnhancer {...enhancerProps}>
              <RenderEnhancer
                Enhancer={<StyledSuccessIcon height={15} width={15} />}
              />
            </StyledEnhancer>
          )
        }
        return null
      } else {
        if (!isFocused) {
          if (isError) {
            return (
              <StyledEnhancer {...enhancerProps}>
                <RenderEnhancer
                  Enhancer={<ErrorIcon height={15} width={15} />}
                />
              </StyledEnhancer>
            )
          }
          if (success) {
            return (
              <StyledEnhancer {...enhancerProps}>
                <RenderEnhancer
                  Enhancer={<StyledSuccessIcon height={15} width={15} />}
                />
              </StyledEnhancer>
            )
          }
        } else {
          if (value !== undefined && value !== null && value !== '')
            return (
              <button type="button" onClick={handleClear} tabIndex={-1}>
                <StyledEnhancer {...enhancerProps}>
                  <RenderEnhancer
                    Enhancer={<CloseIcon height={15} width={15} />}
                  />
                </StyledEnhancer>
              </button>
            )

          if (isError)
            return (
              <StyledEnhancer {...enhancerProps}>
                <RenderEnhancer
                  Enhancer={<ErrorIcon height={15} width={15} />}
                />
              </StyledEnhancer>
            )
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
            isError={isError}
            handleClear={handleClear}
          />
        )
      } else if (type === 'tel') {
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
            onFocus={focusInput}
            onBlur={() => handleBlur(ref)}
            startEnhancer={!!startEnhancer}
            onChange={(e) =>
              !isNaN(Number(removeFormatPhoneNumber(e.target.value))) &&
              handleChange(removeFormatPhoneNumber(e.target.value))
            }
            type={type}
            isDisabled={props.disabled}
            value={formatPhoneNumber(props?.value?.toString())}
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
            onFocus={focusInput}
            onBlur={() => handleBlur(ref)}
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
            error={!!isError}
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
          error={!!isError}
          disabled={props.disabled}
          success={success}
        >
          {startEnhancer && (
            <StyledEnhancer {...enhancerProps} isStartEnhancer>
              <RenderEnhancer Enhancer={startEnhancer} />
            </StyledEnhancer>
          )}
          {getTypeInput()}
          {type !== 'password' && (chooseIconToShow() || endEnhancer) && (
            <IconsContainer>
              {chooseIconToShow()}
              {endEnhancer && (
                <StyledEnhancer {...enhancerProps}>
                  <RenderEnhancer Enhancer={endEnhancer} />
                </StyledEnhancer>
              )}
            </IconsContainer>
          )}
        </StyledContainerInput>
        {(info || (isError && errorMessage)) && (
          <StyledMessageContainer>
            <>
              {isError && (
                <RenderEnhancer
                  Enhancer={<ErrorIcon height={12} width={12} />}
                />
              )}
              <StyledMessage
                size={size}
                error={!!isError}
                disabled={props.disabled}
              >
                <RenderEnhancer Enhancer={errorMessage || info} />
              </StyledMessage>
            </>
          </StyledMessageContainer>
        )}
      </StyledContainer>
    )
  }
)
