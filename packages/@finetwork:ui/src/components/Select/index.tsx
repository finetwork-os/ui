import { useWindowSize } from '@finetwork:ui/src/hooks/useWindowSize'
import { mediaQuery } from '@finetwork:ui/src/types'
import * as React from 'react'
import { Separator } from '../Separator'
import { Paragraph4 } from '../Typography'
import { Options } from './options'
import {
  Arrow,
  Content,
  ErrorMessage,
  MainContainer,
  MainTitle,
  Overlay,
  SearchContainer,
  SearchIcon,
  SearchInput,
  SelectContainer,
  ShowChosenOptions,
  StyledLabel,
  StyledSelect,
} from './styled'
import { DOMEvent, SelectProps, SelectState, TypeOption } from './types'

export const Select = React.forwardRef<HTMLElement, SelectProps>(
  (
    {
      kind,
      width,
      label,
      disabled,
      value,
      name,
      labelColor,
      optionTextColor,
      hoverBorderColor,
      id,
      labelSize,
      borderRadius,
      error,
      borderColor,
      checkColor,
      hoverOptionTextColor,
      hoverBackgroundOptionColor,
      selectedOptionColor,
      search,
      optionContainerHeight,
      optionContainerTitle,
      options,
      withoutCheck,
      scrollbarColor,
      onChange,
      grouping,
      radio,
      notFoundText,
      searchText,
      backgroundColor,
      bottomSheet,
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
      optionsGroup: {},
      options: {},
    })

    const [{ isOpen, searchValue, isOverlay, allPosibleOptions }, updateState] =
      React.useReducer(
        (prev: SelectState, next: Partial<SelectState>) => {
          return { ...prev, ...next }
        },
        {
          isOpen: false,
          searchValue: '',
          isOverlay: false,
          allPosibleOptions: options,
        }
      )

    const defaultValue = React.useMemo(() => {
      if (Array.isArray(value)) {
        return value[0]
      }
      return value
    }, [])

    const isMultiple = React.useMemo(() => {
      return Array.isArray(value)
    }, [])
    const inputRef = React.useRef<HTMLDivElement>(null)
    const optionRef = React.useRef<HTMLLIElement>(null)
    const optionGroupRef = React.useRef<HTMLDivElement>(null)
    const searchInputRef = React.useRef<HTMLInputElement>(null)

    const { width: displayWidth } = useWindowSize()

    function isTypeOption(option: any): option is TypeOption {
      return (option as TypeOption).label !== undefined
    }

    React.useEffect(() => {
      let css = {
        select: {},
        label: {},
        hover: {},
        container: {},
        optionsContainer: {},
        optionsGroup: {},
        options: {},
      }

      if (hoverBorderColor) {
        css = {
          ...css,
          select: {
            ...css.select,
            '&:focus': {
              boxShadow: `0 0 0 2px #fff, 0 0 0 4px ${hoverBorderColor} !important`,
            },
          },
          container: {
            ...css.container,
            '&:hover': {
              boxShadow: `0 0 0 2px #fff, 0 0 0 4px ${hoverBorderColor} !important`,
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
          select: {
            ...css.select,
            outline: '1px solid $error !important',
            '&:focus': {
              boxShadow: '0 0 0 2px #fff, 0 0 0 4px $colors$error !important',
            },
          },
          container: {
            ...css.container,
            '&:hover': {
              boxShadow: '0 0 0 2px #fff, 0 0 0 4px $colors$error !important',
            },
          },
        }
      }
      if (optionTextColor) {
        css = {
          ...css,
          options: {
            ...css.options,
            color: optionTextColor,
            '&:after': {
              boxShadow: `inset 14px 14px ${optionTextColor} !important`,
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
            width: `${width} !important`,
          },
        }
      }
      if (hoverOptionTextColor) {
        css = {
          ...css,
          options: {
            ...css.options,
            '&:hover': {
              color: `${hoverOptionTextColor} !important`,
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
      if (backgroundColor) {
        css = {
          ...css,
          select: {
            ...css.select,
            backgroundColor: backgroundColor,
          },
          optionsContainer: {
            ...css.optionsContainer,
            backgroundColor: `${backgroundColor} !important`,
          },
        }
      }
      if (optionContainerHeight) {
        css = {
          ...css,
          container: {
            ...css.container,
            height: `${optionContainerHeight}`,
          },
          select: {
            ...css.select,
            height: `${optionContainerHeight}`,
          },
          optionsGroup: {
            maxHeight: 'none !important',
            height: '100%',
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
    }, [
      width,
      borderRadius,
      optionContainerHeight,
      hoverBackgroundOptionColor,
      hoverOptionTextColor,
      labelSize,
      optionTextColor,
      error,
      borderColor,
      labelColor,
      hoverBorderColor,
      backgroundColor,
    ])

    React.useEffect(() => {
      document.addEventListener('click', handleOutsideClick, true)

      return () => {
        document.removeEventListener('click', handleOutsideClick)
      }
    }, [])

    React.useEffect(() => {
      if (
        (displayWidth < mediaQuery.tablet && isOpen) ||
        (isOpen && bottomSheet)
      ) {
        document.body.style.overflow = 'hidden'
        return updateState({ isOverlay: true })
      }
      document.body.style.overflow = 'auto'
      return updateState({ isOverlay: false })
    }, [isOpen])

    React.useEffect(() => {
      if (searchValue === '') {
        return updateState({ allPosibleOptions: options })
      }

      const optionsFound = options
        .map((option) => {
          if (option.label.toLowerCase().includes(searchValue.toLowerCase()))
            return option
        })
        .filter((option) => typeof option !== 'undefined')

      if (optionsFound.length <= 0) {
        return updateState({
          allPosibleOptions: [
            {
              value: 'not-found',
              label: notFoundText,
            },
          ],
        })
      }

      return updateState({
        allPosibleOptions: optionsFound,
      })
    }, [searchValue])

    React.useEffect(() => {
      if (isOpen && search) searchInputRef.current.focus()

      if (!isOpen && search) updateState({ searchValue: '' })
    }, [search, isOpen])

    React.useEffect(() => {
      if (options.length === 1) {
        const option = options[0] as TypeOption
        if (options[0]) onChange({ value: option.value, label: option.label })
      }

      updateState({
        allPosibleOptions: options,
      })
    }, [options])

    function handleOutsideClick(e: DOMEvent<HTMLInputElement>) {
      if (
        !inputRef.current?.contains(e.target) &&
        !optionRef.current?.contains(e.target) &&
        !optionGroupRef.current?.contains(e.target)
      ) {
        return updateState({ isOpen: false })
      }
    }

    function selectLabelToMultipleOption() {
      if (!Array.isArray(value)) return

      if (value.length <= 1) return `${defaultValue.label}`

      let formattedArray = ''
      for (let i = 0; i < value.length; i++) {
        if (value[i].value === defaultValue.value) {
          formattedArray = formattedArray
        } else if (i < value.length - 1) {
          formattedArray += `${value[i].label}, `
        } else {
          formattedArray += value[i].label
        }
      }
      return formattedArray
    }

    function setIsOpen(isOpen: boolean) {
      updateState({ isOpen })
    }

    function handleChangeInputValue(e: React.ChangeEvent<HTMLInputElement>) {
      updateState({ searchValue: e.target.value })
    }

    function getSelectWidth() {
      const selectWidth = document.getElementById(`container-${id}`)
      return selectWidth?.clientWidth
    }

    function mustBeShownOverlay() {
      if (bottomSheet !== undefined) {
        if (bottomSheet) return true
        return false
      }
      if (displayWidth < mediaQuery.tablet) return true
      return false
    }

    return (
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
        {options.length === 1 && isTypeOption(options[0]) ? (
          <Paragraph4 css={{ fontWeight: 'bold' }}>
            {options[0].label}
          </Paragraph4>
        ) : (
          <SelectContainer
            id={`container-${id}`}
            isDisabled={disabled}
            kind={kind}
            search={search}
            css={customStyle.container}
          >
            <StyledSelect
              tabIndex={disabled ? -1 : 0}
              id={id}
              ref={inputRef}
              onKeyDown={(e) => {
                if (e.code === 'Enter' || e.code === 'Space') {
                  setIsOpen(!isOpen)
                }
              }}
              onClick={() => {
                if (!disabled) setIsOpen(!isOpen)
              }}
              isDisabled={disabled}
              kind={kind}
              css={customStyle.select}
              {...props}
            >
              <ShowChosenOptions>
                {isMultiple
                  ? selectLabelToMultipleOption()
                  : !Array.isArray(value) && value.label}
              </ShowChosenOptions>
              <Arrow isOpen={isOpen} />
            </StyledSelect>
            {mustBeShownOverlay() ? (
              <Overlay isMobile={isOverlay}>
                <Content
                  ref={optionGroupRef}
                  isOpen={isOpen}
                  bottomSheet={bottomSheet}
                  css={customStyle.optionsContainer}
                >
                  {optionContainerTitle && (
                    <div style={{ width: '100%', marginBottom: '0.5rem' }}>
                      <MainTitle css={{ padding: '0.7rem 0' }}>
                        {optionContainerTitle}
                      </MainTitle>
                      <Separator />
                    </div>
                  )}
                  {search && (
                    <SearchContainer>
                      <SearchIcon />
                      <SearchInput
                        type="text"
                        autoFocus
                        placeholder={searchText}
                        id="seachInput"
                        value={searchValue}
                        ref={searchInputRef}
                        onChange={handleChangeInputValue}
                      />
                    </SearchContainer>
                  )}
                  <Options
                    allPosibleOptions={allPosibleOptions}
                    optionRef={optionRef}
                    id={id}
                    onChange={onChange}
                    setIsOpen={(isOpen: boolean) => updateState({ isOpen })}
                    kind={kind}
                    scrollbarColor={scrollbarColor}
                    withoutCheck={withoutCheck}
                    customStyle={customStyle}
                    selectedOptionColor={selectedOptionColor}
                    optionTextColor={optionTextColor}
                    value={value}
                    isMultiple={isMultiple}
                    grouping={grouping}
                    radio={radio}
                  />
                </Content>
              </Overlay>
            ) : (
              <Content
                ref={optionGroupRef}
                isOpen={isOpen}
                bottomSheet={bottomSheet}
                css={{
                  ...customStyle.optionsContainer,
                  width: `${getSelectWidth()}px !important`,
                }}
              >
                {optionContainerTitle && (
                  <div style={{ width: '100%', marginBottom: '0.2rem' }}>
                    <MainTitle css={{ padding: '0.5rem 0' }}>
                      {optionContainerTitle}
                    </MainTitle>
                    <Separator />
                  </div>
                )}
                {search && (
                  <SearchContainer>
                    <SearchIcon />
                    <SearchInput
                      type="text"
                      autoFocus
                      placeholder={searchText}
                      id="seachInput"
                      value={searchValue}
                      onChange={handleChangeInputValue}
                      ref={searchInputRef}
                    />
                  </SearchContainer>
                )}
                <Options
                  allPosibleOptions={allPosibleOptions}
                  optionRef={optionRef}
                  id={id}
                  onChange={onChange}
                  setIsOpen={(isOpen: boolean) => updateState({ isOpen })}
                  kind={kind}
                  scrollbarColor={scrollbarColor}
                  withoutCheck={withoutCheck}
                  customStyle={customStyle}
                  selectedOptionColor={selectedOptionColor}
                  optionTextColor={optionTextColor}
                  value={value}
                  isMultiple={isMultiple}
                  grouping={grouping}
                  radio={radio}
                />
              </Content>
            )}
          </SelectContainer>
        )}

        {error && <ErrorMessage>{error}</ErrorMessage>}
      </MainContainer>
    )
  }
)
