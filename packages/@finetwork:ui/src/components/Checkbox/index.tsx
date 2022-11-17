import { forwardRef, useEffect, useState } from 'react'

import {
  CheckboxContainer,
  StyledInput,
  StyledInputContainer,
  StyledLabel,
} from './styled'

import { CheckboxComponentProps } from './types'

export const CheckboxNew = forwardRef<HTMLInputElement, CheckboxComponentProps>(
  (
    {
      kind,
      size,
      label,
      disabled,
      value,
      name,
      checkColor,
      checkSize,
      textSize,
      textColor,
      hoverColor,
      id,
      borderRadius,
      error,
      borderColor,
      ...props
    },
    ref
  ) => {
    const [customStyle, setCustomStyle] = useState({
      input: {},
      label: {},
    })
    useEffect(() => {
      let css = {
        input: {},
        label: {},
      }

      if (hoverColor) {
        css = {
          ...css,
          input: {
            ...css.input,
            '&:hover': {
              backgroundColor: `${hoverColor}`,
            },
          },
        }
      }

      if (checkColor) {
        css = {
          ...css,
          input: {
            ...css.input,
            '&:before': {
              boxShadow: `inset 14px 14px ${checkColor}`,
            },
          },
        }
      }

      if (borderColor) {
        css = {
          ...css,
          input: {
            ...css.input,
            borderColor: borderColor,
            '&:focus': {
              outline: `1px solid ${borderColor}`,
            },
          },
        }
      }

      if (textColor) {
        css = {
          ...css,
          label: {
            color: textColor,
          },
        }
      }

      if (textSize) {
        css = {
          ...css,
          label: {
            fontSize: textSize,
          },
        }
      }

      if (borderRadius) {
        css = {
          ...css,
          input: {
            ...css.input,
            borderRadius: borderRadius,
          },
        }
      }

      setCustomStyle(css)
    }, [])
    const CheckboxNew = () => (
      <CheckboxContainer size={size}>
        <StyledInputContainer>
          <StyledInput
            ref={ref}
            type="checkbox"
            id={id}
            value={value}
            {...props}
            name={name}
            checkSize={checkSize}
            size={size}
            kind={kind}
            isDisabled={disabled}
            disabled={disabled}
            error={error}
            css={customStyle.input}
          />
        </StyledInputContainer>

        {label && (
          <StyledLabel
            htmlFor={id}
            size={size}
            isDisabled={disabled}
            css={customStyle.label}
          >
            {label}
          </StyledLabel>
        )}
      </CheckboxContainer>
    )
    return <CheckboxNew />
  }
)
