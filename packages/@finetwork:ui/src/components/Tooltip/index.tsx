import * as React from 'react'
import { Container, Content, StyledTooltip, TooltipContainer } from './styled'
import { TooltipProps } from './types'

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      id,
      type,
      backgroundColor,
      colorText,
      width,
      height,
      position = 'top',
      borderRadius = '5px',
      disabled,
      arrow,
      interactive,
      maxWidth,
      gap,
      children,
      content,
      ...props
    },
    ref
  ) => {
    var arrowColor = '#6f6f6f'
    if (backgroundColor) arrowColor = backgroundColor
    if (type) {
      if (type === 'standard') arrowColor = 'rgb(244, 238, 255)'
      if (type === 'success') arrowColor = 'rgb(218, 252, 236)'
      if (type === 'warning') arrowColor = '#F7F4CD'
      if (type === 'error') arrowColor = '#F7CDCD'
      if (type === 'disabled') arrowColor = '#E9E9E9'
    }
    const [customStyle, setCustomStyle] = React.useState({
      tooltip: {},
      containerTooltip: {},
    })
    React.useEffect(() => {
      let css = {
        tooltip: {},
        containerTooltip: {},
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

      if (maxWidth) {
        css = {
          ...css,
          tooltip: {
            ...css.tooltip,
            maxWidth: maxWidth,
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

      if (arrow || interactive || gap) {
        if (position === 'top') {
          if (gap) {
            css = {
              ...css,
              containerTooltip: {
                ...css.containerTooltip,
                marginBottom: `${gap} !important`,
              },
            }
          }
          if (interactive) {
            css = {
              ...css,
              containerTooltip: {
                ...css.containerTooltip,
                marginBottom: '0 !important',
                paddingBottom: '0.5rem',
              },
            }
          }
          if (arrow) {
            css = {
              ...css,
              tooltip: {
                ...css.tooltip,
                '&:after': {
                  content: '',
                  position: 'absolute',
                  border: '10px solid transparent',
                  borderTopColor: arrowColor,
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                },
              },
            }
          }
        }
        if (position === 'right') {
          if (gap) {
            css = {
              ...css,
              containerTooltip: {
                ...css.containerTooltip,
                marginLeft: `${gap} !important`,
              },
            }
          }
          if (interactive) {
            css = {
              ...css,
              containerTooltip: {
                ...css.containerTooltip,
                marginLeft: '0',
                paddingLeft: '0.8rem',
              },
            }
          }
          if (arrow) {
            css = {
              ...css,
              tooltip: {
                ...css.tooltip,
                '&:after': {
                  content: '',
                  position: 'absolute',
                  border: '10px solid transparent',
                  borderRightColor: arrowColor,
                  right: '100%',
                  top: '50%',
                  transform: 'translateY(-50%)',
                },
              },
            }
          }
        }
        if (position === 'bottom') {
          if (gap) {
            css = {
              ...css,
              containerTooltip: {
                ...css.containerTooltip,
                marginTop: `${gap} !important`,
              },
            }
          }
          if (interactive) {
            css = {
              ...css,
              containerTooltip: {
                ...css.containerTooltip,
                marginTop: '0',
                paddingTop: '0.5rem',
              },
            }
          }
          if (arrow) {
            css = {
              ...css,
              tooltip: {
                ...css.tooltip,
                '&:after': {
                  content: '',
                  position: 'absolute',
                  border: '10px solid transparent',
                  borderBottomColor: arrowColor,
                  bottom: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                },
              },
            }
          }
        }
        if (position === 'left') {
          if (gap) {
            css = {
              ...css,
              containerTooltip: {
                ...css.containerTooltip,
                marginRight: `${gap} !important`,
              },
            }
          }
          if (interactive) {
            css = {
              ...css,
              containerTooltip: {
                ...css.containerTooltip,
                marginRight: '0',
                paddingRight: '0.8rem',
              },
            }
          }
          if (arrow) {
            css = {
              ...css,
              tooltip: {
                ...css.tooltip,
                '&:after': {
                  content: '',
                  position: 'absolute',
                  border: '10px solid transparent',
                  borderLeftColor: arrowColor,
                  left: '100%',
                  top: '50%',
                  transform: 'translateY(-50%)',
                },
              },
            }
          }
        }
      }

      setCustomStyle(css)
    }, [])

    const [show, setShow] = React.useState<boolean>(false)

    return (
      <Container>
        <Content
          id={id}
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          onTouchStart={() => setShow(true)}
          onTouchEnd={() => setShow(false)}
          {...props}
        >
          {children}
        </Content>
        <TooltipContainer
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          position={position}
          css={customStyle.containerTooltip}
        >
          <StyledTooltip
            show={show && !disabled}
            type={type}
            css={customStyle.tooltip}
          >
            {content}
          </StyledTooltip>
        </TooltipContainer>
      </Container>
    )
  }
)
