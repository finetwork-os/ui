import * as React from 'react'

import { KIND, SIZE } from '../../types'
import {
  StyledChevron,
  StyledInputMenu,
  StyledInputMenuContainer,
  StyledMenu,
  StyledMenuButton,
  StyledMenuContainer,
  StyledMenuItem,
  StyledSelectContainer,
} from './styled'

import { Input } from '../Input'
import { Loading } from '../Loading'
import { Paragraph6 } from '../Typography'
import { SelectComponent } from './types'
import { StyledEnhancer } from '../Input/styled'
import { useMenuState } from 'reakit/Menu'

export const Select: SelectComponent = React.forwardRef(
  (
    {
      emptyText,
      disabled = false,
      searchable = true,
      options = [],
      keyValue = 'id',
      keyLabel = 'label',
      size = SIZE.medium,
      label,
      value,
      onInputChange,
      kind = KIND.primary,
      getOptionLabel,
      onSelect,
      isLoading,
      placeholder,
      optionsContainerProps = {},
      inputMenuProps = {},
      inputRef = React.useRef(),
      id,
      menuProps = {},
      ...props
    },
    ref
  ) => {
    const menu = useMenuState()
    const [filteredOptions, setFilteredOptions] = React.useState(options)
    const [inputText, setInputText] = React.useState(
      value ? value[keyLabel] : ''
    )
    const filterOptions = (inputValue: string) => {
      if (!inputValue || inputValue === '') {
        return options
      }
      return options.filter(
        (option: { [x: string]: any }) =>
          String(option[keyLabel])
            .toLowerCase()
            .includes(inputValue.trim().toLowerCase()) ||
          String(option[keyValue])
            .toLowerCase()
            .includes(inputValue.trim().toLowerCase())
      )
    }
    const handleInputChange:
      | React.ChangeEventHandler<HTMLInputElement>
      | undefined = (e) => {
      const inputValue = e.target.value
      setInputText(inputValue)
      if (onInputChange) {
        onInputChange(inputValue)
      } else {
        setFilteredOptions(filterOptions(inputValue))
      }
    }
    const listenToKeyDown = (e: KeyboardEvent) => {
      let isEsc
      if ('key' in e) {
        isEsc = e.key === 'Escape' || e.key === 'Esc'
      } else {
        isEsc = e.which === 27 || e.keyCode === 27
      }
      return isEsc && menu.hide()
    }

    React.useEffect(() => {
      if (value) {
        const options = filteredOptions.filter(
          (option: { [x: string]: any }) =>
            String(option[keyLabel])
              .toLowerCase()
              .includes(String(value[keyLabel]).trim().toLowerCase()) ||
            String(option[keyValue])
              .toLowerCase()
              .includes(String(value[keyValue]).trim().toLowerCase())
        )
        if (!options || options.length === 0) {
          return console.error(
            'Provided value is not found in options provided. Check prop value.'
          )
        }
        if (options.length > 1) {
          return console.error(
            'Provided value is found in more than one options. Please, provide unique options'
          )
        }
        if (!searchable) {
          setInputText(options[0][keyLabel])
        }
      }
      setFilteredOptions(options)
      if (
        searchable &&
        document.activeElement === inputRef?.current &&
        options.length > 0
      ) {
        menu.show()
      }
    }, [options])
    React.useEffect(() => {
      if (value) {
        setInputText(value[keyLabel])
      }
    }, [value])

    React.useEffect(() => {
      window.addEventListener('keydown', listenToKeyDown)
      return () => window.removeEventListener('keydown', listenToKeyDown)
    }, [])

    return (
      <StyledSelectContainer
        {...props}
        data-fi="select"
        ref={ref}
        searchable={searchable}
      >
        <StyledMenuButton
          onClick={menu.show}
          aria-expanded={menu.visible ? 'true' : 'false'}
          aria-controls={menu.baseId}
          aria-haspopup="menu"
        >
          {searchable ? (
            <Input
              autoComplete="off"
              ref={inputRef}
              placeholder={placeholder}
              kind={kind}
              size={size}
              endEnhancer={
                <>
                  {isLoading ? (
                    <Loading kind={kind} size={15} />
                  ) : (
                    <StyledChevron
                      rotate={menu.visible ? 'open' : 'close'}
                      kind={kind}
                    />
                  )}
                </>
              }
              id={id}
              label={label}
              value={inputText}
              onChange={handleInputChange}
              disabled={disabled}
            />
          ) : (
            <StyledInputMenuContainer
              {...inputMenuProps}
              size={size}
              open={menu.visible}
              disabled={disabled}
              kind={kind}
            >
              <StyledInputMenu
                size={size}
                value={value && value[keyLabel]}
                readOnly={true}
                tabIndex={menu.visible ? -1 : 0}
                placeholder={placeholder}
                onFocus={menu.show}
              />
              <StyledEnhancer>
                <StyledChevron
                  rotate={menu.visible ? 'open' : 'close'}
                  kind={kind}
                />
              </StyledEnhancer>
            </StyledInputMenuContainer>
          )}
        </StyledMenuButton>
        <StyledMenu {...menu} {...menuProps} unstable_autoFocusOnHide={false}>
          <StyledMenuContainer {...optionsContainerProps}>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option: { [x: string]: any }) => (
                <StyledMenuItem
                  {...menu}
                  key={option[keyValue]}
                  kind={kind}
                  type="button"
                  onClick={() => {
                    if (onSelect) {
                      onSelect(option)
                    }
                    if (searchable) {
                      setInputText(option[keyLabel])
                    }
                    menu.hide()
                  }}
                >
                  {getOptionLabel ? getOptionLabel(option) : option[keyLabel]}
                </StyledMenuItem>
              ))
            ) : (
              <Paragraph6
                css={{ color: '#aaa', paddingLeft: '1rem', fontWeight: 500 }}
              >
                {emptyText || 'No results'}
              </Paragraph6>
            )}
          </StyledMenuContainer>
        </StyledMenu>
      </StyledSelectContainer>
    )
  }
)
