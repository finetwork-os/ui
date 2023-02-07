import { Checkbox } from '../Checkbox'
import * as React from 'react'
import {
  MultipleContainer,
  NotFoundMessage,
  StyledOptionItem,
  StyledOptionMultiple,
  StyledOptionsGroup,
  StyledTitle,
} from './styled'
import { OptionsProps, TypeOptions, Value } from './types'

export const Options: React.FC<OptionsProps> = ({
  allPosibleOptions,
  optionRef,
  id,
  onChange,
  setIsOpen,
  kind,
  scrollbarColor,
  withoutCheck,
  customStyle,
  selectedOptionColor,
  optionTextColor,
  value,
  isMultiple,
  grouping,
}) => {
  function optionHasBeenChosen(option) {
    if (!Array.isArray(value)) {
      onChange({ value: option.value, label: option.label })
      return setIsOpen(false)
    }

    onChange([...value, option])
  }

  function chosenOptionColor(option: string) {
    if (Array.isArray(value)) return
    if (value.value === option) {
      if (selectedOptionColor) return selectedOptionColor
      if (kind) {
        if (kind === 'secondary') return '$colors$secondary'
        if (kind === 'tertiary') return '$colors$tertiary'
      }
      return '$colors$primary'
    }
    if (optionTextColor) return optionTextColor
    return 'black'
  }

  function multipleOptionHasBeenChosen(option: Value) {
    if (Array.isArray(value))
      if (value.some((value) => option === value)) {
        onChange([...value, option].filter((value) => option !== value))
      } else {
        onChange([...value, option])
      }
  }

  if (!isMultiple && grouping)
    return (
      <StyledOptionsGroup
        css={{
          ...customStyle.optionsGroup,
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: `hsl(${scrollbarColor}, 60%) !important`,
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: `hsl(${scrollbarColor}) !important`,
          },
        }}
        kind={kind}
      >
        {allPosibleOptions.map((optionGroup, i) => (
          <div
            key={`${id}_optionWithTitle_${optionGroup.title}_${optionGroup.options.value}`}
          >
            {optionGroup.title && (
              <StyledTitle>{optionGroup.title}</StyledTitle>
            )}
            {optionGroup.options.map((option, i) => (
              <>
                {option.label === 'No encontrado' ? (
                  <NotFoundMessage key={`${id}_optionWithTitle_Not-Found_${i}`}>
                    No encontrado
                  </NotFoundMessage>
                ) : (
                  <StyledOptionItem
                    key={`${id}_optionWithTitle_${option.value}`}
                    tabIndex={0}
                    ref={optionRef as React.MutableRefObject<HTMLLIElement>}
                    onClick={() =>
                      option.disabled !== true && optionHasBeenChosen(option)
                    }
                    kind={kind}
                    withoutCheck={withoutCheck}
                    isDisabled={option.disabled}
                    onKeyDown={(e) =>
                      e.code === 'Enter' &&
                      option.disabled !== true &&
                      optionHasBeenChosen(option)
                    }
                    chosen={
                      !Array.isArray(value) &&
                      option.value === value.value &&
                      option.disabled !== true
                    }
                    css={{
                      ...customStyle.options,
                      color: `${chosenOptionColor(option.value)}`,
                      '&:after': {
                        boxShadow: `inset 14px 14px ${chosenOptionColor(
                          option.value
                        )} !important`,
                      },
                    }}
                  >
                    {option.label}
                  </StyledOptionItem>
                )}
              </>
            ))}
          </div>
        ))}
      </StyledOptionsGroup>
    )
  if (isMultiple && !grouping)
    return (
      <StyledOptionsGroup
        css={{
          ...customStyle.optionsGroup,
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: `hsl(${scrollbarColor}, 60%) !important`,
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: `hsl(${scrollbarColor}) !important`,
          },
        }}
        kind={kind}
      >
        {allPosibleOptions.map((option, i) => (
          <div key={`${id}_optionMultiple_${option.value}`}>
            {option.label === 'No encontrado' ? (
              <NotFoundMessage>No encontrado</NotFoundMessage>
            ) : (
              <MultipleContainer
                key={`${id}_optionMultiple_${option.value}`}
                chosen={
                  Array.isArray(value) &&
                  value?.includes(option) &&
                  option.disabled !== true
                }
                onClick={() =>
                  option.disabled !== true &&
                  multipleOptionHasBeenChosen(option)
                }
                onKeyDown={(e) =>
                  e.code === 'Enter' &&
                  option.disabled !== true &&
                  multipleOptionHasBeenChosen(option)
                }
                isDisabled={option.disabled}
                kind={kind}
                tabIndex={0}
                ref={optionRef as React.MutableRefObject<HTMLDivElement>}
              >
                <Checkbox
                  checked={
                    Array.isArray(value) &&
                    value?.includes(option) &&
                    option.disabled !== true
                  }
                  readOnly
                  align="center"
                  isDisabled={option.disabled}
                  label={
                    <StyledOptionMultiple
                      css={{
                        ...customStyle.options,
                        color: `${chosenOptionColor(option.label)}`,
                        '&:after': {
                          boxShadow: `inset 14px 14px ${chosenOptionColor(
                            option.label
                          )} !important`,
                        },
                      }}
                    >
                      {option.label}
                    </StyledOptionMultiple>
                  }
                />
              </MultipleContainer>
            )}
          </div>
        ))}
      </StyledOptionsGroup>
    )
  if (isMultiple && grouping)
    return (
      <StyledOptionsGroup
        css={{
          ...customStyle.optionsGroup,
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: `hsl(${scrollbarColor}, 60%) !important`,
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: `hsl(${scrollbarColor}) !important`,
          },
        }}
        kind={kind}
      >
        {allPosibleOptions.map((optionGroup, i) => (
          <div
            key={`${id}_optionMultipleWithTitle_${optionGroup.title}_${optionGroup.options.value}`}
          >
            {optionGroup.title && (
              <StyledTitle>{optionGroup.title}</StyledTitle>
            )}
            {optionGroup.options.map((option, i) => (
              <>
                {option.label === 'No encontrado' ? (
                  <NotFoundMessage
                    key={`${id}_optionMultipleWithTitle_Not-Found_${i}`}
                  >
                    No encontrado
                  </NotFoundMessage>
                ) : (
                  <MultipleContainer
                    key={`${id}_optionMultipleWithTitle_${option.value}`}
                    chosen={
                      Array.isArray(value) &&
                      value?.includes(option) &&
                      option.disabled !== true
                    }
                    onClick={() =>
                      option.disabled !== true &&
                      multipleOptionHasBeenChosen(option)
                    }
                    onKeyDown={(e) =>
                      e.code === 'Enter' &&
                      option.disabled !== true &&
                      multipleOptionHasBeenChosen(option)
                    }
                    isDisabled={option.disabled}
                    kind={kind}
                    tabIndex={0}
                    ref={optionRef as React.MutableRefObject<HTMLDivElement>}
                  >
                    <Checkbox
                      checked={
                        Array.isArray(value) &&
                        value?.includes(option) &&
                        option.disabled !== true
                      }
                      readOnly
                      align="center"
                      label={
                        <StyledOptionMultiple
                          css={{
                            ...customStyle.options,
                            color: `${chosenOptionColor(option.label)}`,
                            '&:after': {
                              boxShadow: `inset 14px 14px ${chosenOptionColor(
                                option.label
                              )} !important`,
                            },
                          }}
                        >
                          {option.label}
                        </StyledOptionMultiple>
                      }
                    />
                  </MultipleContainer>
                )}
              </>
            ))}
          </div>
        ))}
      </StyledOptionsGroup>
    )

  return (
    <StyledOptionsGroup
      css={{
        ...customStyle.optionsGroup,
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: `hsl(${scrollbarColor}, 60%) !important`,
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: `hsl(${scrollbarColor}) !important`,
        },
      }}
      kind={kind}
    >
      {allPosibleOptions.map((option, i) => (
        <div key={`${id}_option_${option.value}`}>
          {option.label === 'No encontrado' ? (
            <NotFoundMessage>No encontrado</NotFoundMessage>
          ) : (
            <StyledOptionItem
              tabIndex={0}
              ref={optionRef as React.MutableRefObject<HTMLLIElement>}
              onClick={() =>
                option.disabled !== true && optionHasBeenChosen(option)
              }
              kind={kind}
              withoutCheck={withoutCheck}
              onKeyDown={(e) =>
                e.code === 'Enter' &&
                option.disabled !== true &&
                optionHasBeenChosen(option)
              }
              chosen={
                !Array.isArray(value) &&
                option.value === value.value &&
                option.disabled !== true
              }
              isDisabled={option.disabled}
              css={{
                ...customStyle.options,
                color: `${chosenOptionColor(option.value)}`,
                '&:after': {
                  boxShadow: `inset 14px 14px ${chosenOptionColor(
                    option.value
                  )} !important`,
                },
              }}
            >
              {option.label}
            </StyledOptionItem>
          )}
        </div>
      ))}
    </StyledOptionsGroup>
  )
}
