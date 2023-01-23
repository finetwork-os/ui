import { useWindowSize } from '@finetwork:ui/src/hooks/useWindowSize'
import { mediaQuery } from '@finetwork:ui/src/types'
import * as React from 'react'
import { Separator } from '../Separator'
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
import { DOMEvent, SelectProps, SelectState } from './types'

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
      optionsGroup: {},
      options: {},
    })
    const [
      {
        isOpen,
        chosenOption,
        chosenMultipleOptions,
        searchValue,
        isOverlay,
        allPosibleOptions,
      },
      updateState,
    ] = React.useReducer(
      (prev: SelectState, next: Partial<SelectState>) => {
        return { ...prev, ...next }
      },
      {
        isOpen: false,
        chosenOption: value,
        chosenMultipleOptions: [],
        searchValue: '',
        isOverlay: false,
        allPosibleOptions: options,
      }
    )

    const inputRef = React.useRef<HTMLDivElement>(null)
    const optionRef = React.useRef<HTMLLIElement>(null)
    const optionGroupRef = React.useRef<HTMLDivElement>(null)
    const searchInputRef = React.useRef<HTMLInputElement>(null)

    const { width: displayWidth } = useWindowSize()

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
          container: {
            ...css.container,
            '&:hover': {
              outline: `2px solid ${hoverBorderColor} !important`,
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
      if (optionContainerHeight) {
        css = {
          ...css,
          optionsContainer: {
            ...css.optionsContainer,
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
    }, [])

    React.useEffect(() => {
      document.addEventListener('click', handleOutsideClick, true)
    }, [])

    React.useEffect(() => {
      if (displayWidth < mediaQuery.tablet && isOpen) {
        document.body.style.overflow = 'hidden'
        return updateState({ isOverlay: true })
      }
      document.body.style.overflow = 'auto'
      return updateState({ isOverlay: false })
    }, [isOpen])

    React.useEffect(() => {
      if (type === 'Multiple' || type === 'MultipleWithTitle') {
        if (chosenMultipleOptions !== undefined && setValue)
          return setValue(chosenMultipleOptions)
      }

      if (chosenOption !== undefined && setValue) return setValue(chosenOption)
    }, [chosenOption, chosenMultipleOptions])

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
              value: 'No encontrado',
              label: 'No encontrado',
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
    }, [search, isOpen])

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

    function setChosenMultipleOptions(option: string | number) {
      if (chosenMultipleOptions.find((_option) => option === _option)) {
        return updateState({
          chosenMultipleOptions: [...chosenMultipleOptions].filter(
            (_option) => _option !== option
          ),
        })
      }
      return updateState({
        chosenMultipleOptions: [...chosenMultipleOptions, option],
      })
    }

    function setIsOpen(isOpen: boolean) {
      updateState({ isOpen })
    }

    function setChoseOption(option: string | number) {
      updateState({ chosenOption: option })
    }

    function handleChangeInputValue(e: React.ChangeEvent<HTMLInputElement>) {
      updateState({ searchValue: e.target.value })
    }

    function getSelectWidth() {
      const selectWidth = document.getElementById(`container-${id}`)
      return selectWidth?.clientWidth
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
        <SelectContainer
          id={`container-${id}`}
          isDisabled={disabled}
          kind={kind}
          search={search}
          css={customStyle.container}
        >
          <StyledSelect
            id={id}
            tabIndex={0}
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
            css={customStyle.select}
            {...props}
          >
            <ShowChosenOptions>
              {type === 'Multiple' || type === 'MultipleWithTitle'
                ? selectLabelToMultipleOption()
                : chosenOption}
            </ShowChosenOptions>
            <Arrow isOpen={isOpen} />
          </StyledSelect>
          {displayWidth < mediaQuery.tablet ? (
            <Overlay isMobile={isOverlay}>
              <Content
                ref={optionGroupRef}
                isOpen={isOpen}
                css={customStyle.optionsContainer}
              >
                {optionContainerTitle && (
                  <div style={{ width: '100%', marginBottom: '0.5rem' }}>
                    <MainTitle css={{ padding: '0.7rem 0 0.7rem 0' }}>
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
                      placeholder="Buscar..."
                      id="seachInput"
                      value={searchValue}
                      ref={searchInputRef}
                      onChange={handleChangeInputValue}
                    />
                  </SearchContainer>
                )}
                <Options
                  type={type}
                  allPosibleOptions={allPosibleOptions}
                  optionRef={optionRef}
                  id={id}
                  chosenOption={chosenOption}
                  setChosenOption={setChoseOption}
                  setIsOpen={(isOpen: boolean) => updateState({ isOpen })}
                  kind={kind}
                  withoutCheck={withoutCheck}
                  customStyle={customStyle}
                  selectedOptionColor={selectedOptionColor}
                  optionTextColor={optionTextColor}
                  chosenMultipleOptions={chosenMultipleOptions}
                  setChosenMultipleOptions={setChosenMultipleOptions}
                />
              </Content>
            </Overlay>
          ) : (
            <Content
              ref={optionGroupRef}
              isOpen={isOpen}
              css={{
                ...customStyle.optionsContainer,
                width: `${getSelectWidth()}px !important`,
              }}
            >
              {search && (
                <SearchContainer>
                  <SearchIcon />
                  <SearchInput
                    type="text"
                    autoFocus
                    placeholder="Buscar..."
                    id="seachInput"
                    value={searchValue}
                    onChange={handleChangeInputValue}
                    ref={searchInputRef}
                  />
                </SearchContainer>
              )}
              <Options
                type={type}
                allPosibleOptions={allPosibleOptions}
                optionRef={optionRef}
                id={id}
                chosenOption={chosenOption}
                setChosenOption={setChoseOption}
                setIsOpen={(isOpen: boolean) => updateState({ isOpen })}
                kind={kind}
                withoutCheck={withoutCheck}
                customStyle={customStyle}
                selectedOptionColor={selectedOptionColor}
                optionTextColor={optionTextColor}
                chosenMultipleOptions={chosenMultipleOptions}
                setChosenMultipleOptions={setChosenMultipleOptions}
              />
            </Content>
          )}
        </SelectContainer>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </MainContainer>
    )
  }
)
