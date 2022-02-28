import * as SelectPrimitive from '@radix-ui/react-select'
import * as React from 'react'

// import {
//   BaseMenu,
//   Item,
//   StyledChevron,
//   StyledCrossIcon,
//   StyledSelect,
//   StyledSelectContainer,
// } from './styled'

import { Input } from '../Input'
import { Loading } from '../Loading'
import { SelectComponent } from './types'
import { matchSorter } from 'match-sorter'
import { useCombobox } from 'downshift'
import {
  StyledContent,
  StyledItem,
  StyledItemIndicator,
  StyledLabel,
  StyledScrollDownButton,
  StyledScrollUpButton,
  StyledSelect,
  StyledSeparator,
  StyledTrigger,
  StyledViewport,
} from './styled'

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
    const sharedProps = {
      index,
      key: item.id,
    }
    const itemProps = getItemProps({
      ...(item.disabled
        ? { isDisabled: true, ...sharedProps }
        : {
            ...nativeItemProps,
            ...sharedProps,
            item,
            isSelected: selectedItem === item,
            isActive: highlightedIndex === index,
            kind: kind,
          }),
    } as any)
    return <Item {...itemProps}>{item.label}</Item>
  })
}

export const Select = SelectPrimitive.Root
export const SelectTrigger = StyledTrigger
export const SelectValue = SelectPrimitive.Value
export const SelectIcon = SelectPrimitive.Icon
export const SelectContent = StyledContent
export const SelectViewport = StyledViewport
export const SelectGroup = SelectPrimitive.Group
export const SelectItem = StyledItem
export const SelectItemText = SelectPrimitive.ItemText
export const SelectItemIndicator = StyledItemIndicator
export const SelectLabel = StyledLabel
export const SelectSeparator = StyledSeparator
export const SelectScrollUpButton = StyledScrollUpButton
export const SelectScrollDownButton = StyledScrollDownButton
