import * as React from 'react'

import {
  BaseMenu,
  Item,
  StyledChevron,
  StyledCrossIcon,
  StyledSelectContainer,
} from './styled'

import { Input } from '../Input'
import { Loading } from '../Loading'
import { SelectComponent } from './types'
import { matchSorter } from 'match-sorter'
import { useCombobox } from 'downshift'

const itemToString = (i) => (i ? i.label : '')

const getItems = (allItems, filter) => {
  return filter
    ? matchSorter(allItems, filter, {
        keys: ['label'],
      })
    : allItems
}

const renderItems = ({
  options = [],
  inputValue = '',
  getItemProps,
  selectedItem,
  kind,
  highlightedIndex,
  isOpen,
  searchable,
  emptyText,
  itemProps: nativeItemProps,
}) => {
  const items = React.useMemo(
    () => getItems(options, searchable ? inputValue : undefined),
    [options, inputValue, searchable]
  )
  if (!isOpen) return null
  if (items.length === 0)
    return (
      <Item
        css={{
          color: '#aaa',
          cursor: 'default',
          ...(nativeItemProps?.css ?? {}),
        }}
      >
        {emptyText}
      </Item>
    )
  return items.map((item, index) => {
    const itemProps = getItemProps({
      ...nativeItemProps,
      item,
      index,
      key: index,
      isSelected: selectedItem === item,
      isActive: highlightedIndex === index,
      kind: kind,
    } as any)
    return <Item {...itemProps}>{item.label}</Item>
  })
}

export const Select: SelectComponent = React.forwardRef(
  (
    {
      emptyText = 'No records found',
      disabled,
      searchable = true,
      writable = true,
      clearable = true,
      options = [],
      size,
      label,
      value,
      onInputChange,
      kind,
      onSelect,
      isLoading,
      placeholder,
      menuContainerProps = {},
      inputRef = React.useRef(),
      initialValue,
      id,
      onClear,
      inputProps: nativeInputProps = {},
      itemProps = {},
      ...props
    },
    ref
  ) => {
    const {
      getInputProps,
      getComboboxProps,
      getMenuProps,
      getItemProps,
      isOpen,
      toggleMenu,
      reset,
      selectedItem,
      inputValue,
      highlightedIndex,
      openMenu,
    } = useCombobox({
      items: options,
      itemToString,
      onSelectedItemChange: ({ selectedItem }) => onSelect(selectedItem),
      selectedItem: value,
    })

    const clear = React.useCallback(() => {
      reset()
      onSelect(null)
      if (onClear) onClear()
    }, [selectedItem, reset, onSelect])
    const onEnhancerClick = React.useCallback(() => {
      if (selectedItem && clearable) {
        return clear()
      }
      inputRef?.current?.focus()
      return openMenu()
    }, [selectedItem, clear, clearable])
    const onInputChangeHandler = React.useCallback(
      (e) => {
        if (onInputChange) {
          onInputChange(e.target.value)
        }
      },
      [onInputChange, toggleMenu]
    )

    const Enhancer = React.useMemo(() => {
      if (selectedItem && clearable) {
        return <StyledCrossIcon kind={kind} />
      }
      if (isLoading) {
        return <Loading size={15} />
      }
      return <StyledChevron rotate={isOpen ? 'open' : 'close'} kind={kind} />
    }, [selectedItem, isOpen, kind, isLoading, clearable])

    const inputProps = {
      ...getInputProps({
        ...nativeInputProps,
        placeholder,
        ref: inputRef,
        id: label,
        label,
        size,
        onClick: openMenu,
        disabled,
        readOnly: !searchable && !writable,
        enhancerProps: {
          onClick: onEnhancerClick,
          css: {
            cursor: 'pointer',
          },
        },
        css: {
          ...(nativeInputProps?.css ?? {}),
          ...(searchable || writable ? {} : { cursor: 'pointer' }),
        },
        kind,
        endEnhancer: Enhancer,
        onChange: onInputChangeHandler,
      } as any),
    }
    const menuProps = getMenuProps({
      open: isOpen && options.length > 0,
      ...menuContainerProps,
    } as any)

    return (
      <StyledSelectContainer {...getComboboxProps({ ref, ...props })}>
        <Input {...inputProps} />
        <BaseMenu {...menuProps}>
          {renderItems({
            options,
            inputValue,
            getItemProps,
            selectedItem,
            kind,
            highlightedIndex,
            isOpen,
            searchable,
            emptyText,
            itemProps,
          })}
        </BaseMenu>
      </StyledSelectContainer>
    )
  }
)
