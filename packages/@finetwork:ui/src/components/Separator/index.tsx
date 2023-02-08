import * as React from 'react'
import { StyledSeparator } from './styled'
import { SeparatorProps } from './types'

export const Separator = React.forwardRef<HTMLHRElement, SeparatorProps>(
  (
    {
      id,
      kind,
      orientation = 'horizontal',
      color,
      width,
      height,
      type = 'solid',
      align = 'center',
      borderRadius,
      borderWidth,
      ...props
    },
    ref
  ) => {
    const [customStyle, setCustomStyle] = React.useState({
      hr: {},
    })
    React.useEffect(() => {
      let css = {
        hr: {},
      }

      if (color) {
        css = {
          ...css,
          hr: {
            ...css.hr,
            borderColor: `${color} !important`,
          },
        }
      }

      if (width) {
        css = {
          ...css,
          hr: {
            ...css.hr,
            width: `${
              orientation === 'horizontal' ? width : height
            } !important`,
          },
        }
      }

      if (height) {
        css = {
          ...css,
          hr: {
            ...css.hr,
            height: `${
              orientation === 'horizontal' ? height : width
            } !important`,
          },
        }
      }

      if (borderWidth) {
        css = {
          ...css,
          hr: {
            ...css.hr,
            borderWidth: `${borderWidth}`,
          },
        }
      }

      if (borderRadius) {
        css = {
          ...css,
          hr: {
            ...css.hr,
            borderRadius: `${borderRadius} !important`,
          },
        }
      }

      setCustomStyle(css)
    }, [])
    return (
      <StyledSeparator
        type={type}
        kind={kind}
        orientation={orientation}
        align={align}
        css={customStyle.hr}
        {...props}
      />
    )
  }
)
