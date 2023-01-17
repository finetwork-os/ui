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
      errorMessage,
      borderColor,
      checkColor,
      hoverOptionColor,
      hoverBackgroundOptionColor,
      chosenColor,
      search,
      height,
      selectTitle,
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

      if (height) {
        css = {
          ...css,
          optionsContainer: {
            ...css.optionsContainer,
            height: `${height}`,
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
    const [isOpen, setIsOpen] = React.useState<boolean>(false)

    const [chosenOption, setChosenOption] = React.useState<string | number>(
      value
    )

    const [chosenMultipleOptions, setChosenMultipleOptions] = React.useState<
      Array<string | number>
    >([])

    const [searchValue, setSearchValue] = React.useState<string>('')

    const [isOverlay, setIsOverlay] = React.useState<boolean>(false)

    const [allPosibleOptions, setAllPosibleOptions] = React.useState(options)

    const { width: displayWidth } = useWindowSize()

    React.useEffect(() => {
      document.addEventListener('click', handleOutsideClick, true)
    }, [])

    React.useEffect(() => {
      if (displayWidth < mediaQuery.tablet && isOpen) {
        document.body.style.overflow = 'hidden'
        setIsOverlay(true)
      } else {
        document.body.style.overflow = 'auto'
        setIsOverlay(false)
      }
    }, [isOpen])

    React.useEffect(() => {
      if (type === 'Multiple' || type === 'MultipleWithTitle') {
        if (chosenMultipleOptions !== undefined && setValue)
          setValue(chosenMultipleOptions)
      } else if (chosenOption !== undefined && setValue) setValue(chosenOption)
    }, [chosenOption, chosenMultipleOptions])

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

    const inputRef = React.useRef(null)
    const optionRef = React.useRef(null)
    const optionGroupRef = React.useRef(null)

    function handleOutsideClick(e) {
      if (
        !inputRef.current?.contains(e.target) &&
        !optionRef.current?.contains(e.target) &&
        !optionGroupRef.current?.contains(e.target)
      ) {
        console.log('Hago click fuera')
        setIsOpen(false)
      } else {
        if (inputRef.current?.contains(e.target)) {
          if (!disabled) {
            setIsOpen(!isOpen)
          }
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
          isDisabled={disabled}
          kind={kind}
          search={search}
          css={customStyle.container}
        >
          <StyledSelect
            id={id}
            tabIndex={0}
            ref={inputRef}
            // onClick={() => !disabled && setIsOpen(!isOpen)}
            onKeyDown={(e) =>
              e.code === 'Enter' || (e.code === 'Space' && setIsOpen(!isOpen))
            }
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
                {selectTitle && (
                  <div style={{ width: '100%', marginBottom: '0.5rem' }}>
                    <MainTitle css={{ padding: '0.7rem 0 0.7rem 0' }}>
                      {selectTitle}
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
                      onChange={({ target: { value } }) => {
                        setSearchValue(value)
                      }}
                    />
                  </SearchContainer>
                )}
                <Options
                  type={type}
                  allPosibleOptions={allPosibleOptions}
                  optionRef={optionRef}
                  id={id}
                  chosenOption={chosenOption}
                  setChosenOption={setChosenOption}
                  setIsOpen={setIsOpen}
                  kind={kind}
                  withoutCheck={withoutCheck}
                  customStyle={customStyle}
                  chosenColor={chosenColor}
                  textColor={textColor}
                  chosenMultipleOptions={chosenMultipleOptions}
                  setChosenMultipleOptions={setChosenMultipleOptions}
                />
              </Content>
            </Overlay>
          ) : (
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
                    autoFocus
                    placeholder="Buscar..."
                    id="seachInput"
                    value={searchValue}
                    onChange={({ target: { value } }) => {
                      setSearchValue(value)
                    }}
                  />
                </SearchContainer>
              )}
              <Options
                type={type}
                allPosibleOptions={allPosibleOptions}
                optionRef={optionRef}
                id={id}
                chosenOption={chosenOption}
                setChosenOption={setChosenOption}
                setIsOpen={setIsOpen}
                kind={kind}
                withoutCheck={withoutCheck}
                customStyle={customStyle}
                chosenColor={chosenColor}
                textColor={textColor}
                chosenMultipleOptions={chosenMultipleOptions}
                setChosenMultipleOptions={setChosenMultipleOptions}
              />
            </Content>
          )}
        </SelectContainer>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </MainContainer>
    )
  }
)
