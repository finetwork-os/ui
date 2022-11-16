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
    { kind, size, label, disabled, value, name, dotColor, dotSize, ...props },
    ref
  ) => {
    const [customStyle, setCustomStyle] = React.useState({})

    function changeDotColor() {
      return { boxShadow: `inset 14px 14px ${dotColor}` }
    }
    function changeDotSize() {
      return { width: dotSize, height: dotSize }
    }

    React.useEffect(() => {
      let css = {}

      if (dotColor && dotSize) {
        css = {
          '&:before': {
            ...changeDotColor(),
            ...changeDotSize(),
          },
        }
      }
      if (dotColor && !dotSize) {
        css = {
          '&:before': {
            ...changeDotColor(),
          },
        }
      }

      if (dotSize && !dotColor) {
        css = {
          '&:before': {
            ...changeDotSize(),
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
          css={customStyle}
        />
        <Span>{label}</Span>
      </Label>
    )
    return <Radio />
  }
)
