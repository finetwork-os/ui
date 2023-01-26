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
      defaultValue,
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
      scrollbarColor,
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
        labelChosenOption,
        labelChosenMultipleOptions,
        valueChosenOption,
        valueChosenMultipleOptions,
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
        labelChosenOption: defaultValue.label,
        labelChosenMultipleOptions: [],
        valueChosenOption: defaultValue.value,
        valueChosenMultipleOptions: [],
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
        if (labelChosenMultipleOptions !== undefined && setValue) {
          return setValue(valueChosenMultipleOptions)
        }
      }
      if (labelChosenOption !== undefined && setValue) {
        return setValue(valueChosenOption)
      }
    }, [labelChosenOption, labelChosenMultipleOptions])

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

    React.useEffect(() => {
      updateState({
        allPosibleOptions: options,
      })
    }, [options])

    // React.useEffect(() => {
    //   updateState({
    //     labelChosenOption: defaultValue.label,
    //     valueChosenOption: defaultValue.value,
    //   })
    // }, [defaultValue])

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
      if (labelChosenMultipleOptions.length <= 0) {
        return defaultValue ? defaultValue.label : 'Elige...'
      }

      var formattedArray = ''
      for (let i = 0; i < labelChosenMultipleOptions.length; i++) {
        if (i < labelChosenMultipleOptions.length - 1) {
          formattedArray += `${labelChosenMultipleOptions[i]}, `
        } else {
          formattedArray += labelChosenMultipleOptions[i]
        }
      }
      return formattedArray
    }

    function setLabelChosenMultipleOptions(option: string | number) {
      if (labelChosenMultipleOptions.find((_option) => option === _option)) {
        return updateState({
          labelChosenMultipleOptions: [...labelChosenMultipleOptions].filter(
            (_option) => _option !== option
          ),
        })
      }
      return updateState({
        labelChosenMultipleOptions: [...labelChosenMultipleOptions, option],
      })
    }

    function setIsOpen(isOpen: boolean) {
      updateState({ isOpen })
    }

    function setLabelChosenOption(option: string | number) {
      updateState({ labelChosenOption: option })
    }

    function setValueChosenOption(option: string | number) {
      updateState({ valueChosenOption: option })
    }

    function setValueChosenMultipleOptions(option: string | number) {
      if (valueChosenMultipleOptions.find((_option) => option === _option)) {
        return updateState({
          valueChosenMultipleOptions: [...valueChosenMultipleOptions].filter(
            (_option) => _option !== option
          ),
        })
      }
      return updateState({
        valueChosenMultipleOptions: [...valueChosenMultipleOptions, option],
      })
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
                : labelChosenOption}
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
                  labelChosenOption={labelChosenOption}
                  setLabelChosenOption={setLabelChosenOption}
                  setValueChosenOption={setValueChosenOption}
                  setValueChosenMultipleOptions={setValueChosenMultipleOptions}
                  setIsOpen={(isOpen: boolean) => updateState({ isOpen })}
                  kind={kind}
                  scrollbarColor={scrollbarColor}
                  withoutCheck={withoutCheck}
                  customStyle={customStyle}
                  selectedOptionColor={selectedOptionColor}
                  optionTextColor={optionTextColor}
                  labelChosenMultipleOptions={labelChosenMultipleOptions}
                  setLabelChosenMultipleOptions={setLabelChosenMultipleOptions}
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
                labelChosenOption={labelChosenOption}
                setLabelChosenOption={setLabelChosenOption}
                setValueChosenOption={setValueChosenOption}
                setValueChosenMultipleOptions={setValueChosenMultipleOptions}
                setIsOpen={(isOpen: boolean) => updateState({ isOpen })}
                kind={kind}
                scrollbarColor={scrollbarColor}
                withoutCheck={withoutCheck}
                customStyle={customStyle}
                selectedOptionColor={selectedOptionColor}
                optionTextColor={optionTextColor}
                labelChosenMultipleOptions={labelChosenMultipleOptions}
                setLabelChosenMultipleOptions={setLabelChosenMultipleOptions}
              />
            </Content>
          )}
        </SelectContainer>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </MainContainer>
    )
  }
)
