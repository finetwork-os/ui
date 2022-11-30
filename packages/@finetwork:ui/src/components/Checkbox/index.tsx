import * as React from 'react'
import {
  CheckboxContainer,
  StyledInput,
  StyledInputContainer,
  StyledLabel,
} from './styled'

import { CheckboxProps } from './types'

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
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
      checked,
      ...props
    },
    ref
  ) => {
    const [customStyle, setCustomStyle] = React.useState({
      input: {},
      label: {},
      hover: {},
    })
    const [animation, setAnimation] = React.useState<{
      status: 'showed' | 'closed' | 'hidden'
      hasBeenClicked: boolean
    }>({ status: 'hidden', hasBeenClicked: false })

    React.useEffect(() => {
      let css = {
        input: {},
        label: {},
        hover: {},
      }

      if (hoverColor) {
        css = {
          ...css,
          hover: {
            ...css.hover,
            '&:hover': {
              backgroundColor: `${hoverColor} !important`,
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

    React.useEffect(() => {
      if (checked)
        return setAnimation({ status: 'showed', hasBeenClicked: true })
      if (!checked && !animation.hasBeenClicked)
        return setAnimation({ status: 'hidden', hasBeenClicked: false })
      return setAnimation({ status: 'closed', hasBeenClicked: true })
    }, [checked])
    const Checkbox = () => (
      <CheckboxContainer size={size}>
        <StyledInputContainer
          error={error}
          kind={kind}
          isDisabled={disabled}
          css={customStyle.hover}
        >
          <StyledInput
            ref={ref}
            type="checkbox"
            id={id}
            value={value}
            name={name}
            checkSize={checkSize}
            size={size}
            kind={kind}
            isDisabled={disabled}
            disabled={disabled}
            error={error}
            animation={animation.status}
            css={customStyle.input}
            {...props}
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
    return <Checkbox />
  }
)
