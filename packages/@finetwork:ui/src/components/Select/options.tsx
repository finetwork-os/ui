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
import { TypeOptions, TypeSelect } from './types'
import { KINDS } from '@finetwork:ui/src/types'

type OptionsProps = {
  type: TypeSelect
  allPosibleOptions: TypeOptions
  optionRef: React.MutableRefObject<HTMLLIElement | HTMLDivElement>
  id: string
  labelChosenOption: string | number
  setValueChosenOption: (option: string | number) => void
  setValueChosenMultipleOptions: (option: string | number) => void
  setIsOpen: (isOpen: boolean) => void
  kind?: KINDS
  value?: string | number
  defaultChecked?: string | number
  scrollbarColor?: string
  withoutCheck?: boolean
  customStyle: {
    select: {}
    label: {}
    hover: {}
    container: {}
    optionsContainer: {}
    optionsGroup: {}
    options: {}
  }
  selectedOptionColor: string
  optionTextColor?: string
  labelChosenMultipleOptions: (string | number)[]
  setLabelChosenOption: (option: string | number) => void
  setLabelChosenMultipleOptions: (option: string | number) => void
}

export const Options: React.FC<OptionsProps> = ({
  type,
  allPosibleOptions,
  optionRef,
  id,
  labelChosenOption,
  setValueChosenOption,
  setValueChosenMultipleOptions,
  setIsOpen,
  kind,
  scrollbarColor,
  withoutCheck,
  customStyle,
  selectedOptionColor,
  optionTextColor,
  labelChosenMultipleOptions,
  setLabelChosenOption,
  setLabelChosenMultipleOptions,
}) => {
  function optionHasBeenChosen(option) {
    setLabelChosenOption(option.label)
    setValueChosenOption(option.value)
    setIsOpen(false)
  }

  function chosenOptionColor(option) {
    if (labelChosenOption === option) {
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

  function multipleOptionHasBeenChosen(option) {
    setLabelChosenMultipleOptions(option.label)
    setValueChosenMultipleOptions(option.value)
  }

  if (type === 'StandardWithTitle')
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
                    onClick={() => optionHasBeenChosen(option)}
                    kind={kind}
                    withoutCheck={withoutCheck}
                    onKeyDown={(e) =>
                      e.code === 'Enter' && optionHasBeenChosen(option)
                    }
                    chosen={labelChosenOption === option.label ? true : false}
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
                  </StyledOptionItem>
                )}
              </>
            ))}
          </div>
        ))}
      </StyledOptionsGroup>
    )
  if (type === 'Multiple')
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
                chosen={labelChosenMultipleOptions?.includes(option.label)}
                onClick={() => multipleOptionHasBeenChosen(option)}
                onKeyDown={(e) =>
                  e.code === 'Enter' && multipleOptionHasBeenChosen(option)
                }
                kind={kind}
                tabIndex={0}
                ref={optionRef as React.MutableRefObject<HTMLDivElement>}
              >
                <Checkbox
                  checked={labelChosenMultipleOptions?.includes(option.label)}
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
      </StyledOptionsGroup>
    )
  if (type === 'MultipleWithTitle')
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
                    chosen={labelChosenOption === option.label ? true : false}
                    onClick={() => multipleOptionHasBeenChosen(option)}
                    onKeyDown={(e) =>
                      e.code === 'Enter' && multipleOptionHasBeenChosen(option)
                    }
                    kind={kind}
                    tabIndex={0}
                    ref={optionRef as React.MutableRefObject<HTMLDivElement>}
                  >
                    <Checkbox
                      checked={labelChosenMultipleOptions?.includes(
                        option.label
                      )}
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
              onClick={() => optionHasBeenChosen(option)}
              kind={kind}
              withoutCheck={withoutCheck}
              onKeyDown={(e) =>
                e.code === 'Enter' && optionHasBeenChosen(option)
              }
              chosen={labelChosenOption === option.label ? true : false}
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
            </StyledOptionItem>
          )}
        </div>
      ))}
    </StyledOptionsGroup>
  )
}
