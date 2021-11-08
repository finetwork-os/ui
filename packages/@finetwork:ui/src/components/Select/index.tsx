import * as React from 'react'

import {
  BaseMenu,
  Item,
  StyledChevron,
  StyledCrossIcon,
  StyledSelectContainer,
} from './styled'
import { KIND, SIZE } from '../../types'

import { Input } from '../Input'
import { Loading } from '../Loading'
import { Paragraph3 } from '../Typography'
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
}) => {
  const items = React.useMemo(
    () => getItems(options, searchable ? inputValue : undefined),
    [options, inputValue, searchable]
  )
  if (!isOpen) return null
  if (items.length === 0)
    return <Item css={{ color: '#aaa', cursor: 'default' }}>{emptyText}</Item>
  return items.map((item, index) => {
    const itemProps = getItemProps({
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
      disabled = false,
      searchable = true,
      options = [],
      size = SIZE.medium,
      label,
      value,
      onInputChange,
      kind = KIND.primary,
      onSelect,
      isLoading,
      placeholder,
      menuContainerProps = {},
      inputRef = null,
      initialValue,
      id,
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

    const clear = React.useCallback(
      (selectedItem) => {
        reset()
        onSelect(selectedItem)
      },
      [selectedItem, reset, onSelect]
    )
    const onInputClick = React.useCallback(() => {
      if (selectedItem) {
        return clear(selectedItem)
      }
      return toggleMenu()
    }, [selectedItem, clear])
    const onInputChangeHandler = React.useCallback(
      (e) => {
        if (onInputChange) {
          onInputChange(e.target.value)
        }
      },
      [onInputChange, toggleMenu]
    )

    const Enhancer = React.useMemo(() => {
      if (selectedItem) {
        return <StyledCrossIcon kind={kind} />
      }
      if (isLoading) {
        return <Loading size={15} />
      }
      return <StyledChevron rotate={isOpen ? 'open' : 'close'} kind={kind} />
    }, [selectedItem, isOpen, kind, isLoading])

    const inputProps = {
      ...getInputProps({
        placeholder,
        ref: inputRef,
        label,
        size,
        onClick: openMenu,
        disabled,
        readOnly: !searchable,
        enhancerProps: {
          onClick: onInputClick,
          css: {
            cursor: 'pointer',
          },
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
          })}
        </BaseMenu>
      </StyledSelectContainer>
    )
  }
)
