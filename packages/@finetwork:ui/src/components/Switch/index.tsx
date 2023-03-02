import * as React from 'react'
import { Ring } from '@uiball/loaders'

import {
  StyledInput,
  StyledLoadingContainer,
  StyledSlider,
  StyledSwitch,
} from './styled'

import { SwitchComponent } from './types'

export const Switch = React.forwardRef<HTMLInputElement, SwitchComponent>(
  (
    {
      size = 'medium',
      id,
      isLoading,
      checked,
      loadingColor = '#fff',
      loadingSpeed = 2,
      kind = 'primary',
      type,
      handleChange,
    },
    ref
  ) => {
    const [isFirstChecked, setIsFirstChecked] = React.useState(true)
    const loadingSize = size === 'large' ? 21 : 16

    return (
      <div>
        <StyledInput
          checked={
            checked !== null || checked !== undefined ? checked : undefined
          }
          kind={kind}
          switchType={type ? type : undefined}
          type={'checkbox'}
          id={id}
          size={size}
          isFirstChecked={isFirstChecked}
          onChange={(e) => {
            if (isFirstChecked) setIsFirstChecked(false)
            if (handleChange && !isLoading) {
              handleChange(e.target.checked)
            }
          }}
        />
        <StyledSwitch htmlFor={id} size={size} type={type ? type : undefined}>
          {isLoading ? (
            <StyledLoadingContainer>
              <Ring
                size={loadingSize}
                lineWeight={5}
                speed={loadingSpeed}
                color={loadingColor}
              />
            </StyledLoadingContainer>
          ) : (
            <StyledSlider size={size}></StyledSlider>
          )}
        </StyledSwitch>
      </div>
    )
  }
)
