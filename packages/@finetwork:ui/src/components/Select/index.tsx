// import * as SelectPrimitive from '@radix-ui/react-select'
// import * as React from 'react'
// import {
//   StyledContent,
//   StyledItem,
//   StyledItemIndicator,
//   StyledLabel,
//   StyledScrollDownButton,
//   StyledScrollUpButton,
//   StyledSeparator,
//   StyledTrigger,
//   StyledViewport,
// } from './styled'
// import { RenderEnhancer } from '../../utils'
// import { KIND, SIZE } from '../../types'
// import { CheckIcon, ChevronDownIcon } from '../icons'
// import {
//   SelectComponent,
//   SelectContentComponent,
//   SelectItemIndicatorComponent,
//   SelectTriggerComponent,
// } from './types'

// const sizeIcon = {
//   [SIZE.small]: 15,
//   [SIZE.medium]: 18,
//   [SIZE.large]: 21,
// }

// export const SelectValue = SelectPrimitive.Value
// export const SelectGroup = SelectPrimitive.Group
// export const SelectItem = StyledItem
// export const SelectItemText = SelectPrimitive.ItemText
// export const SelectLabel = StyledLabel
// export const SelectSeparator = StyledSeparator

// export const Select: SelectComponent = ({
//   children,
//   kind = KIND.primary,
//   size = SIZE.medium,
//   contentProps,
//   triggerProps,
//   ...props
// }) => (
//   <SelectPrimitive.Root {...props}>
//     <SelectTrigger {...triggerProps} kind={kind} size={size} data-fi="select">
//       <SelectValue />
//     </SelectTrigger>
//     <SelectContent {...contentProps} kind={kind} size={size}>
//       {children}
//     </SelectContent>
//   </SelectPrimitive.Root>
// )
// export const SelectTrigger: SelectTriggerComponent = React.forwardRef(
//   ({ children, kind, size, ...props }, ref) => (
//     <StyledTrigger {...props} kind={kind} size={size} ref={ref}>
//       {children}
//       <SelectPrimitive.Icon>
//         <ChevronDownIcon width={sizeIcon[size]} height={sizeIcon[size]} />
//       </SelectPrimitive.Icon>
//     </StyledTrigger>
//   )
// )
// export const SelectItemIndicator: SelectItemIndicatorComponent =
//   React.forwardRef(
//     ({ Icon = CheckIcon, size = SIZE.medium }, ref): JSX.Element => {
//       return (
//         <StyledItemIndicator ref={ref}>
//           <RenderEnhancer
//             Enhancer={<Icon width={sizeIcon[size]} height={sizeIcon[size]} />}
//           />
//         </StyledItemIndicator>
//       )
//     }
//   )
// export const SelectContent: SelectContentComponent = React.forwardRef(
//   ({ children, kind, size, ...props }, ref) => {
//     return (
//       <StyledContent {...props} kind={kind} ref={ref}>
//         <StyledScrollUpButton>
//           <ChevronDownIcon width={sizeIcon[size]} height={sizeIcon[size]} />
//         </StyledScrollUpButton>
//         <StyledViewport>{children}</StyledViewport>
//         <StyledScrollDownButton>
//           <ChevronDownIcon width={sizeIcon[size]} height={sizeIcon[size]} />
//         </StyledScrollDownButton>
//       </StyledContent>
//     )
//   }
// )
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
  StyledOptionsGroup,
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
      borderColor,
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
    })
    React.useEffect(() => {
      let css = {
        select: {},
        label: {},
        hover: {},
        container: {},
        optionsContainer: {},
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
          container: {
            ...css.container,
            color: textColor,
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
    const [focusedOption, setFocusedOption] = React.useState<number>(0)

    React.useEffect(() => {
      document.documentElement.style.overflow = isOpen ? 'hidden' : 'auto'
      // document.getElementById(`option-${focusedOption}`).focus()
    }, [isOpen])

    React.useEffect(() => {
      if (chosenOption !== undefined && setValue) setValue(chosenOption)
    }, [chosenOption])

    function optionHasBeenChosen(option, focusedNumber) {
      setChosenOption(option)
      setFocusedOption(focusedNumber)
      //setIsOpen(false)
    }

    React.useEffect(() => {
      document.addEventListener('click', handleOutsideClick, true)
    }, [])

    const inputRef = React.useRef(null)
    const optionRef = React.useRef(null)
    const optionGroupRef = React.useRef(null)

    const handleOutsideClick = (e) => {
      if (
        !inputRef.current.contains(e.target) &&
        !optionRef.current.contains(e.target) &&
        !optionGroupRef.current.contains(e.target)
      ) {
        setIsOpen(false)
      } else {
        if (!disabled) setIsOpen(true)
      }
    }

    function searchOption(e) {}

    function addOptions() {
      if (type === 'StandardWithTitle')
        return (
          <StyledOptionsGroup>
            {options.map((optionGroup, i) => (
              <>
                {optionGroup.title && <span>{optionGroup.title}</span>}
                {optionGroup.options.map((option, i) => (
                  <StyledOptionItem
                    tabIndex={0}
                    id={`option-${i}`}
                    ref={optionRef}
                    onClick={() => optionHasBeenChosen(option.label, i)}
                    kind={kind}
                    withoutCheck={withoutCheck}
                    onKeyDown={(e) =>
                      e.code === 'Enter' && optionHasBeenChosen(option.label, i)
                    }
                    chosen={chosenOption === option.label ? true : false}
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
            {options.map((option, i) => (
              <MultipleContainer
                chosen={chosenOption === option.label ? true : false}
                ref={optionRef}
              >
                <Checkbox />
                <StyledOptionItem
                  tabIndex={0}
                  id={`option-${i}`}
                  onClick={() => optionHasBeenChosen(option.label, i)}
                  kind={kind}
                  withoutCheck={withoutCheck}
                  onKeyDown={(e) =>
                    e.code === 'Enter' && optionHasBeenChosen(option.label, i)
                  }
                  key={option.value}
                >
                  {option.label}
                </StyledOptionItem>
              </MultipleContainer>
            ))}
          </StyledOptionsGroup>
        )
      if (type === 'MultipleWithTitle')
        return (
          <StyledOptionsGroup>
            {options.map((optionGroup, i) => (
              <>
                {optionGroup.title && <span>{optionGroup.title}</span>}
                {optionGroup.options.map((option, i) => (
                  <MultipleContainer
                    chosen={chosenOption === option.label ? true : false}
                    ref={optionRef}
                  >
                    <Checkbox />
                    <StyledOptionItem
                      tabIndex={0}
                      id={`option-${i}`}
                      onClick={() => optionHasBeenChosen(option.label, i)}
                      kind={kind}
                      withoutCheck={withoutCheck}
                      onKeyDown={(e) =>
                        e.code === 'Enter' &&
                        optionHasBeenChosen(option.label, i)
                      }
                      chosen={chosenOption === option.label ? true : false}
                      key={option.value}
                    >
                      {option.label}
                    </StyledOptionItem>
                  </MultipleContainer>
                ))}
              </>
            ))}
          </StyledOptionsGroup>
        )
      return (
        <StyledOptionsGroup>
          {options.map((option, i) => (
            <StyledOptionItem
              tabIndex={0}
              id={`option-${i}`}
              ref={optionRef}
              onClick={() => optionHasBeenChosen(option.label, i)}
              kind={kind}
              withoutCheck={withoutCheck}
              onKeyDown={(e) =>
                e.code === 'Enter' && optionHasBeenChosen(option.label, i)
              }
              chosen={chosenOption === option.label ? true : false}
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
          // error={error}
          // kind={kind}
          isDisabled={disabled}
          kind={kind}
          search={search}
          css={customStyle.container}
          // onKeyDown={(e) =>
          //   e.code === 'ArrowUp' || e.code === 'ArrowUp' ? changeFocus(e) : ''
          // }
        >
          <StyledSelect
            id={id}
            tabIndex={0}
            ref={inputRef}
            onKeyDown={(e) => e.code === 'Enter' && setIsOpen(!isOpen)}
            // value={value}
            // name={name}
            // checkSize={checkSize}
            // size={size}
            // kind={kind}
            isDisabled={disabled}
            // disabled={disabled}
            // error={error}
            css={customStyle.select}
            {...props}
          >
            <span>{chosenOption}</span>
            <Arrow isOpen={isOpen} />
          </StyledSelect>
          <Content
            id="contentSelect"
            ref={optionGroupRef}
            isOpen={isOpen}
            css={customStyle.optionsContainer}
          >
            {search && (
              <SearchContainer onClick={() => setIsOpen(true)}>
                <SearchIcon />
                <SearchInput
                  type="text"
                  placeholder="Buscar..."
                  onChange={(e) => searchOption(e)}
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
