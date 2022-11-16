import * as React from 'react'

import {
  Input,
  Label,
  Span,
  StyledRadioGroup,
  StyledRadioIndicator,
} from './styled'

import { RadioComponentProps, RadioGroupComponentProps } from './types'

export const RadioGroup = React.forwardRef<
  HTMLDivElement,
  RadioGroupComponentProps
>(({ children, direction, name }, ref) => {
  return (
    <StyledRadioGroup direction={direction} ref={ref}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return null
        return React.cloneElement(child, {
          ...child.props,
          name,
        })
      })}
    </StyledRadioGroup>
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
      ...props
    },
    ref
  ) => {
    const [customStyle, setCustomStyle] = React.useState({
      input: {},
      span: {},
    })

    function changeDotColor() {
      return { boxShadow: `inset 14px 14px ${dotColor}` }
    }
    function changeDotSize() {
      return { width: dotSize, height: dotSize }
    }

    React.useEffect(() => {
      let css = {
        input: {},
        span: {},
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

      if (dotHover) {
        css = {
          ...css,
          input: {
            ...css.input,
            '&:hover': {
              backgroundColor: dotHover,
            },
          },
        }
      }

      if (textColor) {
        css = {
          ...css,
          span: {
            color: textColor,
          },
        }
      }

      setCustomStyle(css)
    }, [])
    const Radio = () => (
      <Label size={size}>
        <Input
          ref={ref}
          type="radio"
          value={value}
          {...props}
          name={name}
          size={size}
          kind={kind}
          isDisabled={disabled}
          disabled={disabled}
          css={customStyle.input}
        />
        <Span css={customStyle.span}>{label}</Span>
      </Label>
    )
    return <Radio />
  }
)
