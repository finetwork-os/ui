import { spin } from '@finetwork:ui/src/animations'
import * as React from 'react'
import { StyledSpinner } from './styled'
import { LoadingComponent } from './types'

export const Loading: LoadingComponent = ({
  size = 24,
  speed = 1,
  color = '#fff',
  thickness = 2,
}) => {
  const [styles, setStyles] = React.useState({})

  React.useEffect(() => {
    let css = {}

    if (size)
      css = {
        ...css,
        width: size,
        height: size,
      }

    if (speed) {
      css = {
        ...css,
        animation: `${spin} ${speed}s linear infinite`,
      }
    }

    if (color || thickness) {
      css = {
        ...css,
        border: `${thickness}px solid ${color}`,
        borderLeftColor: 'transparent',
      }
    }

    setStyles(css)
  }, [])
  return <StyledSpinner css={styles}></StyledSpinner>
}
