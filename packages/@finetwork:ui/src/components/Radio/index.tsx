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

import { RadioGroupComponentProps, RadioProps } from './types'
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

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
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
      ...props
    },
    ref
  ) => {
    const [customStyle, setCustomStyle] = React.useState({
      inputContainer: {},
      input: {},
      text: {},
    })

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
