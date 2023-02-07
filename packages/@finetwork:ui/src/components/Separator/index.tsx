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
            width: `${width} !important`,
          },
        }
      }

      if (height) {
        css = {
          ...css,
          hr: {
            ...css.hr,
            borderWidth: `${height}`,
          },
        }
      }

      if (borderRadius) {
        css = {
          ...css,
          hr: {
            ...css.hr,
            borderRadius: `${borderRadius}`,
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
