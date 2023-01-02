import * as React from 'react'
import { Checkbox } from '../Checkbox'
import {
  Arrow,
  Content,
  MainContainer,
  MultipleContainer,
  SearchContainer,
  SearchIcon,
  SearchInput,
  SelectContainer,
  StyledLabel,
  StyledOptionItem,
  StyledOptionMultiple,
  StyledOptionsGroup,
  StyledSelect,
  StyledTitle,
} from './styled'
import { SelectProps } from './types'

export const Select = React.forwardRef<HTMLElement, SelectProps>(
  (
    {
      kind,
      width,
      label,
      disabled,
      value,
      name,
      type,
      labelColor,
      textColor,
      hoverColor,
      id,
      labelSize,
      borderRadius,
      error,
      borderColor,
      checkColor,
      hoverOptionColor,
      hoverBackgroundOptionColor,
      chosenColor,
      search,
      options,
      withoutCheck,
      setValue,
      ...props
    },
    ref
  ): JSX.Element => {
    const [customStyle, setCustomStyle] = React.useState({
      select: {},
      label: {},
      hover: {},
      container: {},
      optionsContainer: {},
      options: {},
    })
    React.useEffect(() => {
      let css = {
        select: {},
        label: {},
        hover: {},
        container: {},
        optionsContainer: {},
        options: {},
      }

      if (hoverColor) {
        css = {
          ...css,
          container: {
            ...css.container,
            '&:hover': {
              outline: `2px solid ${hoverColor} !important`,
            },
          },
        }
      }

      if (labelColor) {
        css = {
          ...css,
          label: {
            ...css.label,
            color: `${labelColor} !important`,
          },
        }
      }

      if (borderColor) {
        css = {
          ...css,
          container: {
            ...css.container,
            outline: `1px solid ${borderColor} !important`,
            '&:hover': {
              outline: `2px solid ${borderColor} !important`,
            },
          },
        }
      }

      if (error) {
        css = {
          ...css,
          label: {
            ...css.label,
            color: '$error !important',
          },
          container: {
            ...css.container,
            outline: '1px solid $error !important',
            '&:hover': {
              outline: '2px solid $error !important',
            },
          },
        }
      }

      if (textColor) {
        css = {
          ...css,
          options: {
            ...css.options,
            color: textColor,
            '&:after': {
              boxShadow: `inset 14px 14px ${textColor} !important`,
            },
          },
        }
      }

      if (labelSize) {
        css = {
          ...css,
          label: {
            fontSize: labelSize,
          },
        }
      }

      if (width) {
        css = {
          ...css,
          container: {
            ...css.container,
            width: `${width}px !important`,
          },
        }
      }

      if (hoverOptionColor) {
        css = {
          ...css,
          options: {
            ...css.options,
            '&:hover': {
              color: `${hoverOptionColor} !important`,
            },
          },
        }
      }

      if (hoverBackgroundOptionColor) {
        css = {
          ...css,
          options: {
            ...css.options,
            '&:hover': {
              background: `${hoverBackgroundOptionColor} !important`,
            },
          },
        }
      }

      if (borderRadius) {
        css = {
          ...css,
          select: {
            ...css.select,
            borderRadius: borderRadius,
          },
          container: {
            ...css.container,
            borderRadius: borderRadius,
          },
          optionsContainer: {
            ...css.optionsContainer,
            borderRadius: borderRadius,
          },
        }
      }
      setCustomStyle(css)
    }, [])
    const [isOpen, setIsOpen] = React.useState<boolean>(false)
    const [chosenOption, setChosenOption] = React.useState<string | number>(
      value
    )
    const [chosenMultipleOptions, setChosenMultipleOptions] = React.useState<
      Array<string | number>
    >([])

    React.useEffect(() => {
      document.documentElement.style.overflow = isOpen ? 'hidden' : 'auto'
      if (search) document.getElementById('seachInput').focus()
    }, [isOpen])

    const [allPosibleOptions, setAllPosibleOptions] = React.useState(options)

    React.useEffect(() => {
      if (type === 'Multiple' || type === 'MultipleWithTitle') {
        if (chosenMultipleOptions !== undefined && setValue)
          setValue(chosenMultipleOptions)
      } else if (chosenOption !== undefined && setValue) setValue(chosenOption)
    }, [chosenOption, chosenMultipleOptions])

    function optionHasBeenChosen(option) {
      setChosenOption(option)
      setIsOpen(false)
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

    React.useEffect(() => {
      document.addEventListener('click', handleOutsideClick, true)
    }, [])

    const inputRef = React.useRef(null)
    const optionRef = React.useRef(null)
    const optionGroupRef = React.useRef(null)

    const handleOutsideClick = (e) => {
      if (
        !inputRef.current?.contains(e.target) &&
        !optionRef.current?.contains(e.target) &&
        !optionGroupRef.current?.contains(e.target)
      ) {
        setIsOpen(false)
      } else {
        if (inputRef.current?.contains(e.target)) {
          if (!disabled) setIsOpen(isOpen === true ? false : true)
        } else {
          if (!disabled) setIsOpen(true)
        }
      }
    }

    function selectLabelToMultipleOption() {
      if (chosenMultipleOptions.length <= 0) {
        return value ? value : 'Elige...'
      }
      var formattedArray = ''
      for (let i = 0; i < chosenMultipleOptions.length; i++) {
        if (i < chosenMultipleOptions.length - 1) {
          formattedArray += `${chosenMultipleOptions[i]}, `
        } else {
          formattedArray += chosenMultipleOptions[i]
        }
      }
      return formattedArray
    }

    function choseChosenOptionColor(option) {
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
    const [searchValue, setSearchValue] = React.useState<string>('')
    React.useEffect(() => {
      let optionsFound = []
      if (searchValue === '') {
        setAllPosibleOptions(options)
      } else {
        options.map((option, i) => {
          if (option.label.toLowerCase().includes(searchValue.toLowerCase()))
            optionsFound.push(option)
        })
        if (optionsFound.length <= 0) {
          setAllPosibleOptions([
            {
              value: 'No encontrado',
              label: 'No encontrado',
            },
          ])
        } else {
          setAllPosibleOptions(optionsFound)
        }
      }
    }, [searchValue])

    function addOptions() {
      if (type === 'StandardWithTitle')
        return (
          <StyledOptionsGroup>
            {allPosibleOptions.map((optionGroup, i) => (
              <>
                {optionGroup.title && (
                  <StyledTitle>{optionGroup.title}</StyledTitle>
                )}
                {optionGroup.options.map((option, i) => (
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
                    css={
                      (customStyle.options,
                      {
                        color: `${choseChosenOptionColor(option.label)}`,
                        '&:after': {
                          boxShadow: `inset 14px 14px ${choseChosenOptionColor(
                            option.label
                          )} !important`,
                        },
                      })
                    }
                    key={option.value}
                  >
                    {option.label}
                  </StyledOptionItem>
                ))}
              </>
            ))}
          </StyledOptionsGroup>
        )
      if (type === 'Multiple')
        return (
          <StyledOptionsGroup>
            {allPosibleOptions.map((option, i) => (
              <MultipleContainer
                chosen={chosenMultipleOptions?.includes(option.label)}
                onClick={() => multipleOptionHasBeenChosen(option.label)}
                onKeyDown={(e) =>
                  e.code === 'Enter' &&
                  multipleOptionHasBeenChosen(option.label)
                }
                kind={kind}
                tabIndex={0}
                key={option.value}
                ref={optionRef}
              >
                <Checkbox
                  checked={chosenMultipleOptions?.includes(option.label)}
                  readOnly
                  label={
                    <StyledOptionMultiple
                      css={
                        (customStyle.options,
                        {
                          color: `${choseChosenOptionColor(option.label)}`,
                          '&:after': {
                            boxShadow: `inset 14px 14px ${choseChosenOptionColor(
                              option.label
                            )} !important`,
                          },
                        })
                      }
                    >
                      {option.label}
                    </StyledOptionMultiple>
                  }
                />
              </MultipleContainer>
            ))}
          </StyledOptionsGroup>
        )
      if (type === 'MultipleWithTitle')
        return (
          <StyledOptionsGroup>
            {allPosibleOptions.map((optionGroup, i) => (
              <>
                {optionGroup.title && (
                  <StyledTitle>{optionGroup.title}</StyledTitle>
                )}
                {optionGroup.options.map((option, i) => (
                  <MultipleContainer
                    chosen={chosenOption === option.label ? true : false}
                    onClick={() => multipleOptionHasBeenChosen(option.label)}
                    onKeyDown={(e) =>
                      e.code === 'Enter' &&
                      multipleOptionHasBeenChosen(option.label)
                    }
                    kind={kind}
                    tabIndex={0}
                    key={option.value}
                    ref={optionRef}
                  >
                    <Checkbox
                      checked={chosenMultipleOptions?.includes(option.label)}
                      readOnly
                      label={
                        <StyledOptionMultiple
                          css={
                            (customStyle.options,
                            {
                              color: `${choseChosenOptionColor(option.label)}`,
                              '&:after': {
                                boxShadow: `inset 14px 14px ${choseChosenOptionColor(
                                  option.label
                                )} !important`,
                              },
                            })
                          }
                        >
                          {option.label}
                        </StyledOptionMultiple>
                      }
                    />
                  </MultipleContainer>
                ))}
              </>
            ))}
          </StyledOptionsGroup>
        )
      return (
        <StyledOptionsGroup>
          {allPosibleOptions.map((option, i) => (
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
              css={
                (customStyle.options,
                {
                  color: `${choseChosenOptionColor(option.label)}`,
                  '&:after': {
                    boxShadow: `inset 14px 14px ${choseChosenOptionColor(
                      option.label
                    )} !important`,
                  },
                })
              }
              key={option.value}
            >
              {option.label}
            </StyledOptionItem>
          ))}
        </StyledOptionsGroup>
      )
    }

    const Select = () => (
      <MainContainer
        onKeyDown={(e) => e.code === 'Escape' && setIsOpen(false)}
        isDisabled={disabled}
      >
        {label && (
          <StyledLabel
            htmlFor={id}
            isDisabled={disabled}
            css={customStyle.label}
          >
            {label}
          </StyledLabel>
        )}
        <SelectContainer
          isDisabled={disabled}
          kind={kind}
          search={search}
          css={customStyle.container}
        >
          <StyledSelect
            id={id}
            tabIndex={0}
            ref={inputRef}
            onClick={() => !disabled && setIsOpen(!isOpen)}
            onKeyDown={(e) => e.code === 'Enter' && setIsOpen(!isOpen)}
            isDisabled={disabled}
            css={customStyle.select}
            {...props}
          >
            <span>
              {type === 'Multiple' || type === 'MultipleWithTitle'
                ? selectLabelToMultipleOption()
                : chosenOption}
            </span>
            <Arrow isOpen={isOpen} />
          </StyledSelect>
          <Content
            ref={optionGroupRef}
            isOpen={isOpen}
            css={customStyle.optionsContainer}
          >
            {search && (
              <SearchContainer>
                <SearchIcon />
                <SearchInput
                  type="text"
                  placeholder="Buscar..."
                  id="seachInput"
                  value={searchValue}
                  onChange={({ target: { value } }) => {
                    setSearchValue(value)
                  }}
                />
              </SearchContainer>
            )}
            {addOptions()}
          </Content>
        </SelectContainer>
      </MainContainer>
    )
    return <Select />
  }
)
