import * as React from 'react'

import { ButtonComponent, ButtonProps, SHAPE } from './types'
import {
  ChildrenLoading,
  StyledButton,
  StyledEndEnhancer,
  StyledStartEnhancer,
} from './styled'
import { KIND, SIZE } from '../../types'

import { Loading } from '../Loading'
import { RenderEnhancer } from '../../utils'

export const Button: ButtonComponent = React.forwardRef(
  (
    {
      children,
      size = SIZE.medium,
      shape = SHAPE.default,
      kind = KIND.primary,
      isSelected = false,
      isLoading = false,
      loadingProps = {},
      disabled = false,
      startEnhancer,
      endEnhancer,
      outline = false,
      ...props
    },
    ref
  ) => {
    const sizeLoading =
      size === SIZE.large ? 30 : size === SIZE.medium ? 24 : 18
    const buttonProps: ButtonProps = {
      size,
      shape,
      kind,
      disabled,
      isDisabled: disabled,
      onClick: !isLoading && !disabled ? props.onClick : undefined,
      outline,
      ref,
      isLoading,
      isSelected,
      'aria-disabled': !!disabled,
      ...props,
    }
    return (
      <StyledButton {...buttonProps} data-fi="button">
        {isLoading ? (
          <>
            <ChildrenLoading>{children}</ChildrenLoading>
            <Loading
              size={sizeLoading}
              kind={kind}
              disabled={disabled}
              {...loadingProps}
            />
          </>
        ) : (
          <>
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
          </>
        )}
      </StyledButton>
    )
  }
)
