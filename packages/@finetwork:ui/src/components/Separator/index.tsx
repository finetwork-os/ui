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
        if (orientation === 'vertical') {
          css = {
            ...css,
            hr: {
              ...css.hr,
              borderWidth: `${width} !important`,
            },
          }
        } else {
          css = {
            ...css,
            hr: {
              ...css.hr,
              width: `${width} !important`,
            },
          }
        }
      }

      if (height) {
        if (orientation === 'vertical') {
          css = {
            ...css,
            hr: {
              ...css.hr,
              height: `${height} !important`,
            },
          }
        } else {
          css = {
            ...css,
            hr: {
              ...css.hr,
              borderWidth: `${height} !important`,
            },
          }
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
