import * as React from 'react'
import { Container, Content, StyledTooltip, TooltipContainer } from './styled'
import { TooltipProps } from './types'
import { useWindowSize } from '@finetwork:ui/src/hooks/useWindowSize'

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      id,
      idContent,
      contentWidth,
      contentHeight,
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
      align = 'center',
      children,
      content,
      ...props
    },
    ref
  ) => {
    const [show, setShow] = React.useState<boolean>(false)
    const [autoPosition, setAutoPosition] = React.useState<
      'top' | 'right' | 'bottom' | 'left'
    >(position)
    const [tooltipHeight, setTootipHeight] = React.useState(0)
    const [customStyle, setCustomStyle] = React.useState({
      tooltip: {},
      containerTooltip: {},
    })

    const size = useWindowSize()

    function arrowColor() {
      if (backgroundColor) return backgroundColor
      if (type) {
        if (type === 'standard') return 'rgb(244, 238, 255)'
        if (type === 'success') return 'rgb(218, 252, 236)'
        if (type === 'warning') return '#F7F4CD'
        if (type === 'error') return '#F7CDCD'
        if (type === 'disabled') return '#E9E9E9'
      }
      return '#6f6f6f'
    }

    function getDistances(el) {
      var rect = el?.getBoundingClientRect()
      return {
        bottom: window.innerHeight - rect.bottom,
        height: rect.height,
        left: rect.left,
        right: window.innerWidth - rect.right,
        top: rect.top,
        width: rect.width,
      }
    }

    React.useEffect(() => {
      if (!show) return setTootipHeight(0)
      return setTootipHeight(document.getElementById(idContent)?.offsetHeight)
    }, [show])

    React.useEffect(() => {
      if (!tooltipHeight) return
      if (!id) return

      const contentWidth = width + 25
      const contentHeight = tooltipHeight
      const parentRect = getDistances(document?.getElementById(id))

      console.log(contentWidth, contentHeight)

      if (position === 'right') {
        if (parentRect.right >= contentWidth) return setAutoPosition('right')
        if (parentRect.left >= contentWidth) return setAutoPosition('left')
        if (parentRect.top >= contentHeight) return setAutoPosition('top')
        if (parentRect.bottom >= contentHeight) return setAutoPosition('bottom')
      }

      if (position === 'left') {
        if (parentRect.left >= contentWidth) return setAutoPosition('left')
        if (parentRect.right >= contentWidth) return setAutoPosition('right')
        if (parentRect.top >= contentHeight) return setAutoPosition('top')
        if (parentRect.bottom >= contentHeight) return setAutoPosition('bottom')
      }

      if (position === 'top') {
        if (parentRect.top >= contentHeight) return setAutoPosition('top')
        if (parentRect.bottom >= contentHeight) return setAutoPosition('bottom')
        if (parentRect.left >= contentWidth) return setAutoPosition('left')
        if (parentRect.right >= contentWidth) return setAutoPosition('right')
      }

      if (parentRect.bottom >= contentHeight) return setAutoPosition('bottom')
      if (parentRect.top >= contentHeight) return setAutoPosition('top')
      if (parentRect.left >= contentWidth) return setAutoPosition('left')
      if (parentRect.right >= contentWidth) return setAutoPosition('right')
    }, [size, position, idContent, tooltipHeight])

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
            width: `${width}px`,
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

      if (contentWidth) {
        css = {
          ...css,
          containerTooltip: {
            ...css.containerTooltip,
            width: `${contentWidth}px`,
          },
        }
      }

      if (arrow || interactive || gap) {
        if (autoPosition === 'top') {
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
                  borderTopColor: arrowColor(),
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                },
              },
            }
          }
        }
        if (autoPosition === 'right') {
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
                  borderRightColor: arrowColor(),
                  right: '100%',
                  top: '50%',
                  transform: 'translateY(-50%)',
                },
              },
            }
          }
        }
        if (autoPosition === 'bottom') {
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
                  borderBottomColor: arrowColor(),
                  bottom: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                },
              },
            }
          }
        }
        if (autoPosition === 'left') {
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
                  borderLeftColor: arrowColor(),
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
    }, [
      arrow,
      interactive,
      gap,
      contentWidth,
      borderRadius,
      maxWidth,
      height,
      width,
      colorText,
      backgroundColor,
    ])

    return (
      <Container align={align}>
        <Content
          id={id}
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          onTouchStart={() => setShow(true)}
          onTouchEnd={() => setShow(false)}
          {...props}
        >
          {children}
          <TooltipContainer
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            position={autoPosition}
            css={customStyle.containerTooltip}
          >
            <StyledTooltip
              id={idContent}
              show={show && !disabled}
              type={type}
              css={customStyle.tooltip}
            >
              {content}
            </StyledTooltip>
          </TooltipContainer>
        </Content>
      </Container>
    )
  }
)
