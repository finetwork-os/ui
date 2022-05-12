import * as React from 'react'

import { StyledEndEnhancer, StyledLink, StyledStartEnhancer } from './styled'

import { LinkComponent } from './types'
import { RenderEnhancer } from '../../utils'

export const Link: LinkComponent = React.forwardRef(
  (
    {
      children,
      kind,
      disabled,
      size,
      textTransform,
      startEnhancer,
      endEnhancer,
      onClick,
      animation,
      ...props
    },
    ref
  ) => {
    return (
      <StyledLink
        {...props}
        ref={ref}
        kind={kind}
        size={size}
        data-fi="link"
        disabled={disabled}
        animation={animation}
        textTransform={textTransform}
        startEnhancer={!!startEnhancer}
        endEnhancer={!!endEnhancer}
        onClick={!disabled ? onClick : undefined}
      >
        {startEnhancer && (
          <StyledStartEnhancer>
            <RenderEnhancer Enhancer={startEnhancer} />
          </StyledStartEnhancer>
        )}
        {children}
        {endEnhancer && (
          <StyledEndEnhancer>
            <RenderEnhancer Enhancer={endEnhancer} />
          </StyledEndEnhancer>
        )}
      </StyledLink>
    )
  }
)
