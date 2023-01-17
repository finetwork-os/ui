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

type OptionsProps = {
  type: 'Standard' | 'StandardWithTitle' | 'Multiple' | 'MultipleWithTitle'
  allPosibleOptions:
    | Array<{ value: string | number; label: string | number }>
    | Array<{
        title: string | number
        options: Array<{ value: string | number; label: string | number }>
      }>
  optionRef: React.MutableRefObject<any>
  id: string
  chosenOption: string | number
  setChosenOption: React.Dispatch<React.SetStateAction<string | number>>
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  kind?: 'primary' | 'secondary' | 'tertiary'
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
  chosenColor: boolean
  textColor?: string
  chosenMultipleOptions: (string | number)[]
  setChosenMultipleOptions: React.Dispatch<
    React.SetStateAction<(string | number)[]>
  >
}

export const Options: React.FC<OptionsProps> = ({
  type,
  allPosibleOptions,
  optionRef,
  id,
  chosenOption,
  setChosenOption,
  setIsOpen,
  kind,
  withoutCheck,
  customStyle,
  chosenColor,
  textColor,
  chosenMultipleOptions,
  setChosenMultipleOptions,
}) => {
  function optionHasBeenChosen(option) {
    setChosenOption(option)
    setIsOpen(false)
  }

  function chosenOptionColor(option) {
    if (chosenOption === option) {
      if (chosenColor) return chosenColor
      if (kind) {
        if (kind === 'secondary') return '$colors$secondary'
        if (kind === 'tertiary') return '$colors$tertiary'
      }
      return '$colors$primary'
    }
    if (textColor) return textColor
    return 'black'
  }

  function multipleOptionHasBeenChosen(option) {
    if (chosenMultipleOptions?.includes(option)) {
      chosenMultipleOptions.splice(chosenMultipleOptions.indexOf(option), 1)

      setChosenMultipleOptions((chosenMultipleOptions) => [
        ...chosenMultipleOptions,
      ])
    } else {
      setChosenMultipleOptions((chosenMultipleOptions) => [
        ...chosenMultipleOptions,
        option,
      ])
    }
  }

  if (type === 'StandardWithTitle')
    return (
      <StyledOptionsGroup css={customStyle.optionsGroup}>
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
                    ref={optionRef}
                    onClick={() => optionHasBeenChosen(option.label)}
                    kind={kind}
                    withoutCheck={withoutCheck}
                    onKeyDown={(e) =>
                      e.code === 'Enter' && optionHasBeenChosen(option.label)
                    }
                    chosen={chosenOption === option.label ? true : false}
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
      <StyledOptionsGroup css={customStyle.optionsGroup}>
        {allPosibleOptions.map((option, i) => (
          <div key={`${id}_optionMultiple_${option.value}`}>
            {option.label === 'No encontrado' ? (
              <NotFoundMessage>No encontrado</NotFoundMessage>
            ) : (
              <MultipleContainer
                key={`${id}_optionMultiple_${option.value}`}
                chosen={chosenMultipleOptions?.includes(option.label)}
                onClick={() => multipleOptionHasBeenChosen(option.label)}
                onKeyDown={(e) =>
                  e.code === 'Enter' &&
                  multipleOptionHasBeenChosen(option.label)
                }
                kind={kind}
                tabIndex={0}
                ref={optionRef}
              >
                <Checkbox
                  checked={chosenMultipleOptions?.includes(option.label)}
                  readOnly
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
      <StyledOptionsGroup css={customStyle.optionsGroup}>
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
                    chosen={chosenOption === option.label ? true : false}
                    onClick={() => multipleOptionHasBeenChosen(option.label)}
                    onKeyDown={(e) =>
                      e.code === 'Enter' &&
                      multipleOptionHasBeenChosen(option.label)
                    }
                    kind={kind}
                    tabIndex={0}
                    ref={optionRef}
                  >
                    <Checkbox
                      checked={chosenMultipleOptions?.includes(option.label)}
                      readOnly
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
    <StyledOptionsGroup css={customStyle.optionsGroup}>
      {allPosibleOptions.map((option, i) => (
        <div key={`${id}_option_${option.value}`}>
          {option.label === 'No encontrado' ? (
            <NotFoundMessage>No encontrado</NotFoundMessage>
          ) : (
            <StyledOptionItem
              tabIndex={0}
              ref={optionRef}
              onClick={() => optionHasBeenChosen(option.label)}
              kind={kind}
              withoutCheck={withoutCheck}
              onKeyDown={(e) =>
                e.code === 'Enter' && optionHasBeenChosen(option.label)
              }
              chosen={chosenOption === option.label ? true : false}
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
