import * as React from 'react'
import {
  CustomRangeContainer,
  IndividualRange,
  InnerRail,
  OriginalInputs,
  Rail,
  RangeContainer,
  StyledInput,
  ThumbValue,
} from './styled'

import { RangeProps } from './types'

export const Range = React.forwardRef<HTMLInputElement, RangeProps>(
  (
    {
      kind,
      label,
      disabled,
      value,
      name,
      dotColor,
      dotSize,
      textColor,
      dotHover,
      borderColor,
      id,
      multiple,
      min,
      max,
      step = 1,
      currentMinValue = min,
      currentMaxValue = max,
      setValue,
      ...props
    },
    ref
  ) => {
    const [customStyle, setCustomStyle] = React.useState({
      inputContainer: {},
      input: {},
      rail: {},
    })

    // function changeDotColor() {
    //   return { boxShadow: `inset 14px 14px ${dotColor}` }
    // }
    // function changeDotSize() {
    //   return { width: dotSize, height: dotSize }
    // }

    React.useEffect(() => {
      let css = {
        inputContainer: {},
        input: {},
        rail: {},
      }

      //   if (dotColor && dotSize) {
      //     css = {
      //       ...css,
      //       input: {
      //         '&:before': {
      //           ...changeDotColor(),
      //           ...changeDotSize(),
      //         },
      //       },
      //     }
      //   }
      //   if (dotColor && !dotSize) {
      //     css = {
      //       ...css,
      //       input: {
      //         '&:before': {
      //           ...changeDotColor(),
      //         },
      //       },
      //     }
      //   }
      //   if (dotSize && !dotColor) {
      //     css = {
      //       ...css,
      //       input: {
      //         '&:before': {
      //           ...changeDotSize(),
      //         },
      //       },
      //     }
      //   }
      //   if (borderColor) {
      //     css = {
      //       ...css,
      //       input: {
      //         ...css.input,
      //         borderColor,
      //       },
      //     }
      //   }

      //   if (dotHover) {
      //     css = {
      //       ...css,
      //       inputContainer: {
      //         '&:hover': {
      //           backgroundColor: dotHover,
      //         },
      //       },
      //     }
      //   }

      //   if (textColor) {
      //     css = {
      //       ...css,
      //       text: {
      //         color: textColor,
      //       },
      //     }
      //   }

      setCustomStyle(css)
    }, [])

    const [minValue, setMinValue] = React.useState<number>(currentMinValue)
    const [maxValue, setMaxValue] = React.useState<number>(currentMaxValue)

    React.useEffect(() => {
      setMinValue(currentMinValue)
      setMaxValue(currentMaxValue)
    }, [currentMinValue, currentMaxValue])

    React.useEffect(() => {
      if (setValue) setValue({ min: minValue, max: maxValue })
    }, [minValue, maxValue])

    const handleMinChange = (e) => {
      e.preventDefault()
      const value = parseFloat(e.target.value)
      const newMinVal = Math.min(value, maxValue - step)
      setMinValue(newMinVal)
    }
    const handleMaxChange = (e) => {
      e.preventDefault()
      const value = parseFloat(e.target.value)
      const newMaxVal = Math.max(value, minValue + step)
      setMaxValue(newMaxVal)
    }
    const minPos = ((minValue - min) / (max - min)) * 100
    const maxPos = ((maxValue - min) / (max - min)) * 100
    console.log(maxPos)
    const Range = () => (
      <RangeContainer>
        {multiple ? (
          <>
            <OriginalInputs>
              <StyledInput
                type="range"
                value={minValue}
                min={min}
                max={max}
                step={step}
                onChange={(e) => handleMinChange(e)}
              />
              <StyledInput
                type="range"
                value={maxValue}
                min={min}
                max={max}
                step={step}
                onChange={(e) => handleMaxChange(e)}
              />
            </OriginalInputs>
            <CustomRangeContainer>
              <ThumbValue css={{ left: '2%' }}>{minValue}</ThumbValue>
              <Rail>
                <InnerRail
                  css={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
                />
              </Rail>
              <ThumbValue css={{ left: '96%' }}>{maxValue}</ThumbValue>
            </CustomRangeContainer>
          </>
        ) : (
          <IndividualRange
            type="range"
            value={maxValue}
            min={min}
            max={max}
            onChange={(e) => handleMaxChange(e)}
          />
        )}
      </RangeContainer>
    )
    return <Range />
  }
)
