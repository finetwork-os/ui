import { borderRadius } from 'polished'
import * as React from 'react'

import { StyledRoot, StyledRow, getAnimationColor } from './styled'

import { SkeletonComponent } from './types'

export const Skeleton: SkeletonComponent = ({
  rows,
  width,
  height,
  css = {},
  backgroundColor = '$secondary300',
  animationColor = '$secondary200',
  borderRadius = '5px',
  chart,
}) => {
  const stylesRow: any = {
    ...css,
    ...(rows && rows > 0
      ? {}
      : {
          width,
          height,
        }),
    backgroundImage: getAnimationColor(backgroundColor, animationColor),
    borderRadius: borderRadius,
  }
  if (rows && rows > 0) {
    return (
      <StyledRoot chart={chart} hasRows={true} css={{ width, height }}>
        {Array(rows)
          .fill('')
          .map((item, index) => (
            <StyledRow
              key={index}
              chart={chart}
              isFirstRow={index === 0}
              css={stylesRow}
            />
          ))}
      </StyledRoot>
    )
  }
  return <StyledRoot chart={chart} hasRows={false} css={stylesRow} />
}
