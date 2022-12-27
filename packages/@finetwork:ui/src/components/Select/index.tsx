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
import {
  Arrow,
  Content,
  MainContainer,
  SelectContainer,
  StyledInputHidden,
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
      size,
      label,
      disabled,
      value,
      name,
      checkColor,
      checkSize,
      textSize,
      textColor,
      hoverColor,
      id,
      borderRadius,
      error,
      borderColor,
      multiple,
      options,
      ...props
    },
    ref
  ): JSX.Element => {
    const [customStyle, setCustomStyle] = React.useState({
      select: {},
      label: {},
      hover: {},
      container: {},
    })
    React.useEffect(() => {
      let css = {
        select: {},
        label: {},
        hover: {},
        container: {},
      }

      if (hoverColor) {
        css = {
          ...css,
          hover: {
            ...css.hover,
            '&:hover': {
              backgroundColor: `${hoverColor} !important`,
            },
          },
        }
      }

      if (checkColor) {
        css = {
          ...css,
          select: {
            ...css.select,
            '&:before': {
              boxShadow: `inset 14px 14px ${checkColor}`,
            },
          },
        }
      }

      if (borderColor) {
        css = {
          ...css,
          select: {
            ...css.select,
            borderColor: `${borderColor} !important`,
            '&:focus': {
              outline: `1px solid ${borderColor} !important`,
            },
          },
        }
      }

      if (textColor) {
        css = {
          ...css,
          label: {
            color: textColor,
          },
        }
      }

      if (textSize) {
        css = {
          ...css,
          label: {
            fontSize: textSize,
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
      document.getElementById(`option-${focusedOption}`).focus()
    }, [isOpen])

    function optionHasBeenChosen(option, focusedNumber) {
      setChosenOption(option)
      setFocusedOption(focusedNumber)
      setIsOpen(false)
    }

    // window.addEventListener('click', function (e) {
    //   if (document.getElementById('contentSelect').contains(e.target)) {
    //     return
    //   } else {
    //     setIsOpen(false)
    //   }
    // })

    // function changeFocus(e) {
    //   if (e.code === 'ArrowUp') {
    //     document.getElementById(`option-${focusedOption + 1}`)?.focus()
    //     setFocusedOption(focusedOption + 1)
    //   }
    //   if (e.code === 'ArrowDown') {
    //     document.getElementById(`option-${focusedOption - 1}`).focus()
    //     setFocusedOption(focusedOption - 1)
    //   }
    // }

    const inputRef = React.useRef()

    const Select = () => (
      <MainContainer
        /*size={size}*/
        ref={inputRef}
        onKeyDown={(e) => e.code === 'Escape' && setIsOpen(false)}
      >
        {label && (
          <StyledLabel
            htmlFor={id}
            size={size}
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
          onClick={() => setIsOpen(!isOpen)}
          css={customStyle.container}
          // onKeyDown={(e) =>
          //   e.code === 'ArrowUp' || e.code === 'ArrowUp' ? changeFocus(e) : ''
          // }
        >
          <StyledSelect
            id={id}
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
          {/* <StyledInputHidden /> */}
          <Content id="contentSelect" isOpen={isOpen}>
            <StyledOptionsGroup>
              {options.map((option, i) => (
                <StyledOptionItem
                  tabIndex={0}
                  id={`option-${i}`}
                  onClick={() => optionHasBeenChosen(option.label, i)}
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
          </Content>
        </SelectContainer>
      </MainContainer>
    )
    return <Select />
  }
)
