import * as React from 'react'

import { ButtonComponent, ButtonProps } from './types'
import {
  ChildrenLoading,
  StyledButton,
  StyledEndEnhancer,
  StyledStartEnhancer,
} from './styled'

import { Loading } from '../Loading'
import { RenderEnhancer } from '../../utils'
import { SIZE } from '../../types'

export const Button: ButtonComponent = React.forwardRef(
  (
    {
      children,
      size,
      shape,
      kind,
      isSelected,
      isLoading,
      loadingProps = {},
      disabled,
      startEnhancer,
      endEnhancer,
      outline,
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
            <Loading />
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
