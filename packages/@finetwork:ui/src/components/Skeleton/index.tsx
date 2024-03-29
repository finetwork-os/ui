import * as React from 'react'

import {
  StyledRoot,
  StyledElement,
  getAnimationColor,
  StyledInnerCircle,
  StyledOuterCircle,
  StyledGroup,
  StyledChildrenContainer,
} from './styled'

import { SkeletonComponent } from './types'

export const Skeleton: SkeletonComponent = ({
  width,
  height,
  kind = 'primary',
  backgroundColor = 'rgb(238, 238, 238)',
  animationColor = 'rgb(246, 246, 246)',
  borderRadius = '5px',
  children,
  chart,
  group,
  align = 'start',
  ...props
}) => {
  const [styles, setStyles] = React.useState({
    chart: {},
  })

  const cssStyles: any = {
    width,
    height,
    backgroundImage: getAnimationColor(kind, backgroundColor, animationColor),
    borderRadius: borderRadius,
  }

  React.useEffect(() => {
    let css = { ...styles }
    if (chart) {
      css = {
        ...css,
        chart: {
          background: chart?.backgroundInnerCircle
            ? chart?.backgroundInnerCircle
            : '#fff',
        },
      }
    }
    setStyles(css)
  }, [chart])

  if (group) {
    return (
      <StyledGroup
        direction={group.direction}
        align={align}
        css={{ gap: group.gap }}
        {...props}
      >
        {Array(group.repeat)
          .fill('')
          .map((_, index) => {
            if (!chart) {
              return (
                <StyledElement
                  key={index}
                  isChildren={children ? true : false}
                  css={cssStyles}
                >
                  {children}
                </StyledElement>
              )
            }

            return (
              <StyledOuterCircle
                key={index}
                size={chart?.size ? chart.size : 'medium'}
                css={{
                  backgroundImage: getAnimationColor(
                    kind,
                    backgroundColor,
                    animationColor
                  ),
                }}
              >
                <StyledInnerCircle
                  size={chart?.size ? chart.size : 'medium'}
                  css={{ ...styles.chart }}
                />
              </StyledOuterCircle>
            )
          })}
      </StyledGroup>
    )
  }

  if (chart) {
    return (
      <StyledOuterCircle
        size={chart?.size ? chart.size : 'medium'}
        css={{ ...cssStyles, borderRadius: '50%' }}
        {...props}
      >
        <StyledInnerCircle
          size={chart?.size ? chart.size : 'medium'}
          css={{
            ...styles.chart,
          }}
        >
          {children && (
            <StyledChildrenContainer
              css={{
                backgroundImage: getAnimationColor(
                  kind,
                  backgroundColor,
                  animationColor
                ),
              }}
            >
              {children}
            </StyledChildrenContainer>
          )}
        </StyledInnerCircle>
      </StyledOuterCircle>
    )
  }

  return (
    <StyledRoot align={align} {...props}>
      <StyledElement isChildren={children ? true : false} css={cssStyles}>
        {children}
      </StyledElement>
    </StyledRoot>
  )
}
