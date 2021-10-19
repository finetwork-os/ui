import * as React from 'react'

import { StyledRoot, StyledRow, getAnimationColor } from './styled'

import { SkeletonComponent } from './types'

export const Skeleton: SkeletonComponent = ({
  rows,
  width,
  height,
  css = {},
  backgroundColor = 'rgb(238, 238, 238)',
  animationColor = 'rgb(246, 246, 246)',
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
  }
  if (rows && rows > 0) {
    return (
      <StyledRoot hasRows={true} css={{ width, height }}>
        {Array(rows)
          .fill('')
          .map((item, index) => (
            <StyledRow key={index} isFirstRow={index === 0} css={stylesRow} />
          ))}
      </StyledRoot>
    )
  }
  return <StyledRoot hasRows={false} css={stylesRow} />
}
