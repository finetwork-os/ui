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
import { OptionsProps, Value } from './types'
import { Radio, RadioGroup } from '../Radio'

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
  radio,
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
        tabIndex={-1}
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
              <div key={`${id}_optionWithTitle_${option.value}`}>
                {option.label === 'No encontrado' ? (
                  <NotFoundMessage>No encontrado</NotFoundMessage>
                ) : (
                  <StyledOptionItem
                    tabIndex={option.disabled ? -1 : 0}
                    ref={optionRef as React.MutableRefObject<HTMLLIElement>}
                    onClick={() =>
                      !option.disabled && optionHasBeenChosen(option)
                    }
                    kind={kind}
                    withoutCheck={withoutCheck}
                    isDisabled={option.disabled}
                    onKeyDown={(e) =>
                      e.code === 'Enter' &&
                      !option.disabled &&
                      optionHasBeenChosen(option)
                    }
                    chosen={
                      !Array.isArray(value) &&
                      option.value === value.value &&
                      !option.disabled
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
              </div>
            ))}
          </div>
        ))}
      </StyledOptionsGroup>
    )
  if (isMultiple && !grouping)
    return (
      <StyledOptionsGroup
        tabIndex={-1}
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
                  !option.disabled
                }
                onClick={() =>
                  !option.disabled && multipleOptionHasBeenChosen(option)
                }
                onKeyDown={(e) =>
                  e.code === 'Enter' &&
                  !option.disabled &&
                  multipleOptionHasBeenChosen(option)
                }
                isDisabled={option.disabled}
                kind={kind}
                tabIndex={option.disabled ? -1 : 0}
                ref={optionRef as React.MutableRefObject<HTMLDivElement>}
              >
                <Checkbox
                  tabIndex={-1}
                  checked={
                    Array.isArray(value) &&
                    value?.includes(option) &&
                    !option.disabled
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
        tabIndex={-1}
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
              <div key={`${id}_optionMultipleWithTitle_${option.value}`}>
                {option.label === 'No encontrado' ? (
                  <NotFoundMessage>No encontrado</NotFoundMessage>
                ) : (
                  <MultipleContainer
                    chosen={
                      Array.isArray(value) &&
                      value?.includes(option) &&
                      !option.disabled
                    }
                    onClick={() =>
                      !option.disabled && multipleOptionHasBeenChosen(option)
                    }
                    onKeyDown={(e) =>
                      e.code === 'Enter' &&
                      !option.disabled &&
                      multipleOptionHasBeenChosen(option)
                    }
                    isDisabled={option.disabled}
                    kind={kind}
                    tabIndex={option.disabled ? -1 : 0}
                    ref={optionRef as React.MutableRefObject<HTMLDivElement>}
                  >
                    <Checkbox
                      tabIndex={-1}
                      checked={
                        Array.isArray(value) &&
                        value?.includes(option) &&
                        !option.disabled
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
              </div>
            ))}
          </div>
        ))}
      </StyledOptionsGroup>
    )
  if (radio)
    return (
      <StyledOptionsGroup
        tabIndex={-1}
        css={{
          ...customStyle.optionsGroup,
          '& div div div label': {
            width: '100%',
          },
          '& div div div': {
            marginLeft: '0px',
            gap: '0',
            '&:hover': {
              background: '$secondary100',
              cursor: 'pointer',
              '& label li': {
                color: '$primary',
              },
            },
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: `hsl(${scrollbarColor}, 60%) !important`,
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: `hsl(${scrollbarColor}) !important`,
          },
        }}
        kind={kind}
      >
        <RadioGroup direction="vertical" name="select-radio">
          {allPosibleOptions.map((option, i) => (
            <Radio
              tabIndex={-1}
              onClick={() => !option.disabled && optionHasBeenChosen(option)}
              value={`${id}_option_value_${option.value}`}
              key={`${id}_option_radio_${option.value}`}
              id={`${id}_option_id_${option.value}`}
              onChange={() => {}}
              checked={
                !Array.isArray(value) &&
                option.value === value.value &&
                !option.disabled
              }
              label={
                option.label === 'No encontrado' ? (
                  <NotFoundMessage>No encontrado</NotFoundMessage>
                ) : (
                  <StyledOptionItem
                    tabIndex={option.disabled ? -1 : 0}
                    ref={optionRef as React.MutableRefObject<HTMLLIElement>}
                    kind={kind}
                    withoutCheck
                    onKeyDown={(e) =>
                      e.code === 'Enter' &&
                      !option.disabled &&
                      optionHasBeenChosen(option)
                    }
                    chosen={
                      !Array.isArray(value) &&
                      option.value === value.value &&
                      !option.disabled
                    }
                    isDisabled={option.disabled}
                    css={{
                      ...customStyle.options,
                      color: `${chosenOptionColor(option.value)}`,
                      marginTop: 0,
                      marginBottom: 0,
                      '&:after': {
                        boxShadow: `inset 14px 14px ${chosenOptionColor(
                          option.value
                        )} !important`,
                      },
                    }}
                  >
                    {option.label}
                  </StyledOptionItem>
                )
              }
            />
          ))}
        </RadioGroup>
      </StyledOptionsGroup>
    )
  return (
    <StyledOptionsGroup
      tabIndex={-1}
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
              tabIndex={option.disabled ? -1 : 0}
              ref={optionRef as React.MutableRefObject<HTMLLIElement>}
              onClick={() => !option.disabled && optionHasBeenChosen(option)}
              kind={kind}
              withoutCheck={withoutCheck}
              onKeyDown={(e) =>
                e.code === 'Enter' &&
                !option.disabled &&
                optionHasBeenChosen(option)
              }
              chosen={
                !Array.isArray(value) &&
                option.value === value.value &&
                !option.disabled
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
