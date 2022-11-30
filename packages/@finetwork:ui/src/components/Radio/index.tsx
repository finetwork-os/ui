import * as React from 'react'

import {
  StyledInput,
  StyledInputContainer,
  StyledRadioContainer,
  StyledContainer,
  StyledRadioGroupContainer,
  StyledText,
  StyledTitle,
  StyledErrorText,
} from './styled'

import { RadioComponentProps, RadioGroupComponentProps } from './types'
import { RenderEnhancer } from '../../utils'

export const RadioGroup = React.forwardRef<
  HTMLDivElement,
  RadioGroupComponentProps
>(({ children, direction, name, title, error }, ref) => {
  return (
    <StyledContainer>
      {title && (
        <>
          {typeof title === 'string' && <StyledTitle>{title}</StyledTitle>}
          {React.isValidElement(title) && <RenderEnhancer Enhancer={title} />}
        </>
      )}

      <StyledRadioGroupContainer direction={direction} ref={ref}>
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return null
          if (name) {
            return React.cloneElement(child, {
              ...child.props,
              name,
            })
          }
          return React.cloneElement(child, {
            ...child.props,
          })
        })}
      </StyledRadioGroupContainer>
      <StyledErrorText>{error}</StyledErrorText>
    </StyledContainer>
  )
})

export const Radio = React.forwardRef<HTMLInputElement, RadioComponentProps>(
  (
    {
      kind,
      size,
      label,
      disabled,
      value,
      name,
      dotColor,
      dotSize,
      textColor,
      dotHover,
      borderColor,
      id,
      checked,
      ...props
    },
    ref
  ) => {
    const [customStyle, setCustomStyle] = React.useState({
      inputContainer: {},
      input: {},
      text: {},
    })

    const [animation, setAnimation] = React.useState<{
      status: 'showed' | 'closed' | 'hidden'
      hasBeenClicked: boolean
    }>({ status: 'hidden', hasBeenClicked: false })

    function changeDotColor() {
      return { boxShadow: `inset 14px 14px ${dotColor}` }
    }
    function changeDotSize() {
      return { width: dotSize, height: dotSize }
    }

    React.useEffect(() => {
      let css = {
        inputContainer: {},
        input: {},
        text: {},
      }
      if (dotColor && dotSize) {
        css = {
          ...css,
          input: {
            '&:before': {
              ...changeDotColor(),
              ...changeDotSize(),
            },
          },
        }
      }
      if (dotColor && !dotSize) {
        css = {
          ...css,
          input: {
            '&:before': {
              ...changeDotColor(),
            },
          },
        }
      }
      if (dotSize && !dotColor) {
        css = {
          ...css,
          input: {
            '&:before': {
              ...changeDotSize(),
            },
          },
        }
      }
      if (borderColor) {
        css = {
          ...css,
          input: {
            ...css.input,
            borderColor,
          },
        }
      }

      if (dotHover) {
        css = {
          ...css,
          inputContainer: {
            '&:hover': {
              backgroundColor: dotHover,
            },
          },
        }
      }

      if (textColor) {
        css = {
          ...css,
          text: {
            color: textColor,
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

    const Radio = () => (
      <StyledRadioContainer size={size} isDisabled={disabled}>
        <StyledInputContainer
          kind={kind}
          size={size}
          isDisabled={disabled}
          css={customStyle.inputContainer}
        >
          <StyledInput
            css={customStyle.input}
            disabled={disabled}
            id={id}
            isDisabled={disabled}
            kind={kind}
            name={name}
            ref={ref}
            size={size}
            type="radio"
            value={value}
            animation={animation}
            {...props}
          />
        </StyledInputContainer>
        <StyledText
          css={customStyle.text}
          size={size}
          htmlFor={id}
          isDisabled={disabled}
        >
          {label}
        </StyledText>
      </StyledRadioContainer>
    )
    return <Radio />
  }
)
