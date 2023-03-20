import * as React from 'react'
import { Container, StyledTooltip } from './styled'
import { TooltipProps } from './types'

// export const Tooltip: TooltipComponent = ({
//   children,
//   delayDuration = 200,
//   ...props
// }) => (
//   <Root delayDuration={delayDuration} {...props}>
//     {children}
//   </Root>
// )
// export const TooltipTrigger = Trigger
// export const TooltipContent: TooltipContentComponent = ({
//   children,
//   withArrow = false,
//   side = 'top',
//   ...props
// }) => (
//   <StyledContent side={side} data-fi="tooltip" {...props}>
//     {children}
//     {withArrow && <StyledTooltipArrow />}
//   </StyledContent>
// )

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      id,
      kind,
      type = 'standard',
      backgroundColor,
      colorText,
      width,
      height,
      position = 'top',
      borderRadius = '5px',
      disabled,
      arrow,
      children,
      content,
      ...props
    },
    ref
  ) => {
    var arrowColor = ''
    if (type) {
      if (type === 'standard') arrowColor = 'rgb(244, 238, 255)'
      if (type === 'success') arrowColor = 'rgb(218, 252, 236)'
      if (type === 'warning') arrowColor = '#F7F4CD'
      if (type === 'error') arrowColor = '#F7CDCD'
      if (type === 'disabled') arrowColor = '#E9E9E9'
    }
    if (kind) {
      if (kind === 'primary') arrowColor = '$primary100'
      if (kind === 'secondary') arrowColor = '$secondary100'
      if (kind === 'tertiary') arrowColor = '$tertiary100'
    }
    if (backgroundColor) arrowColor = backgroundColor
    const [customStyle, setCustomStyle] = React.useState({
      tooltip: {},
    })
    React.useEffect(() => {
      let css = {
        tooltip: {},
      }

      if (backgroundColor) {
        css = {
          ...css,
          tooltip: {
            ...css.tooltip,
            backgroundColor: backgroundColor,
          },
        }
      }
      if (colorText) {
        css = {
          ...css,
          tooltip: {
            ...css.tooltip,
            color: colorText,
          },
        }
      }

      if (width) {
        css = {
          ...css,
          tooltip: {
            ...css.tooltip,
            width: width,
          },
        }
      }

      if (height) {
        css = {
          ...css,
          tooltip: {
            ...css.tooltip,
            height: height,
          },
        }
      }

      if (borderRadius) {
        css = {
          ...css,
          tooltip: {
            ...css.tooltip,
            borderRadius: borderRadius,
          },
        }
      }

      if (arrow) {
        if (position === 'top') {
          css = {
            ...css,
            tooltip: {
              ...css.tooltip,
              '&:after': {
                content: '',
                position: 'absolute',
                border: '10px solid transparent',
                borderTopColor: arrowColor,
                inset: 'auto auto -20px auto',
                transform: '50%',
              },
            },
          }
        }
        if (position === 'right') {
          css = {
            ...css,
            tooltip: {
              ...css.tooltip,
              '&:after': {
                content: '',
                position: 'absolute',
                border: '10px solid transparent',
                borderRightColor: arrowColor,
                inset: 'auto auto auto -20px',
              },
            },
          }
        }
        if (position === 'bottom') {
          css = {
            ...css,
            tooltip: {
              ...css.tooltip,
              '&:after': {
                content: '',
                position: 'absolute',
                border: '10px solid transparent',
                borderBottomColor: arrowColor,
                inset: '-20px auto auto auto',
              },
            },
          }
        }
        if (position === 'left') {
          css = {
            ...css,
            tooltip: {
              ...css.tooltip,
              '&:after': {
                content: '',
                position: 'absolute',
                border: '10px solid transparent',
                borderLeftColor: arrowColor,
                inset: 'auto -20px auto auto',
              },
            },
          }
        }
      }

      setCustomStyle(css)
    }, [])

    const [show, setShow] = React.useState<boolean>(false)

    return (
      <div>
        <Container
          id={id}
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          {...props}
        >
          {show && !disabled && (
            <StyledTooltip
              kind={kind}
              type={type}
              position={position}
              css={customStyle.tooltip}
            >
              {content}
            </StyledTooltip>
          )}
          {children}
        </Container>
      </div>
    )
  }
)
