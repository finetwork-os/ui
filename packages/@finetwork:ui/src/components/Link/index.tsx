import * as React from 'react'

import { StyledEndEnhancer, StyledLink, StyledStartEnhancer } from './styled'

import { LinkComponent } from './types'
import { RenderEnhancer } from '../../utils'
import { SIZE } from '../../types'

export const Link: LinkComponent = React.forwardRef(
  (
    {
      children,
      kind = 'linkText',
      disabled = false,
      size = SIZE.medium,
      textTransform,
      startEnhancer,
      endEnhancer,
      onClick,
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
