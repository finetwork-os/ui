import * as React from 'react'

import {
  StyledContainer,
  StyledContainerInput,
  StyledEnhancer,
  StyledLabel,
  StyledMessage,
  StyledSuccessIcon,
  StyledTextarea,
} from './styled'

import { RenderEnhancer } from '../../utils'
import { TextareaComponent } from './types'

export const Textarea: TextareaComponent = React.forwardRef(
  (
    {
      size,
      kind,
      label,
      rows = 4,
      inputContainerProps = {},
      containerProps = {},
      css,
      error,
      info,
      success,
      id,
      labelProps = {},
      ...props
    },
    ref
  ) => {
    React.useEffect(() => {
      if (label && !id) {
        console.warn(
          'Input id is undefined, you should put id if you are using label'
        )
      }
    }, [])
    return (
      <StyledContainer data-fi="input" {...containerProps}>
        {label && (
          <StyledLabel
            htmlFor={id}
            size={size}
            error={!!error}
            disabled={props.disabled}
            font={props.font}
            {...labelProps}
          >
            {label}
          </StyledLabel>
        )}
        <StyledContainerInput
          {...inputContainerProps}
          size={size}
          kind={kind}
          error={!!error}
          disabled={props.disabled}
          success={success}
        >
          <StyledTextarea
            {...props}
            size={size}
            ref={ref}
            id={id}
            rows={rows}
            isDisabled={props.disabled}
          />
          {success && !error && (
            <StyledEnhancer success={success}>
              <RenderEnhancer Enhancer={<StyledSuccessIcon />} />
            </StyledEnhancer>
          )}
        </StyledContainerInput>
        {(info || error) && (
          <StyledMessage size={size} error={!!error} disabled={props.disabled}>
            <RenderEnhancer Enhancer={error || info} />
          </StyledMessage>
        )}
      </StyledContainer>
    )
  }
)
