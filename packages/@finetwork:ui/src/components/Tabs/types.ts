import { ComponentProps, ReactNode } from 'react'
import { KINDS } from '../../types'
import { StyledTabs } from './styled'

export type TabsComponentOwnProps = {
  id?: string
  defaultValue?: string
  type?: 'standard' | 'success' | 'warning' | 'error' | 'disabled'
  background?: string
  borderRadius?: string
  width?: string
  height?: string
}
export type TabsProps = ComponentProps<typeof StyledTabs> &
  TabsComponentOwnProps

export type TabsListComponentOwnProps = {
  direction?: 'horizontal' | 'vertical'
  ariaLabel?: string
  type?: 'standard' | 'success' | 'warning' | 'error' | 'disabled'
  width?: string
  height?: string
  selectedValue?: string
  setSelectedValue?: React.Dispatch<
    React.SetStateAction<string | (readonly string[] & string)>
  >
}
export type TabsListProps = ComponentProps<typeof StyledTabs> &
  TabsListComponentOwnProps

export type TabsTriggerComponentOwnProps = {
  id?: string
  value?: string
  width?: string
  height?: string
  type?: 'standard' | 'success' | 'warning' | 'error' | 'disabled'
  textColor?: string
  textSize?: string
  bold?: boolean
  disabled?: boolean
  selectedValue?: string
  setSelectedValue?: React.Dispatch<
    React.SetStateAction<string | (readonly string[] & string)>
  >
  startEnhancer?: ReactNode | string
  endEnhancer?: ReactNode | string
}
export type TabsTriggerProps = ComponentProps<typeof StyledTabs> &
  TabsTriggerComponentOwnProps

export type TabsContentComponentOwnProps = {
  id?: string
  value?: string
  width?: string
  height?: string
  selectedValue?: string
}
export type TabsContentProps = ComponentProps<typeof StyledTabs> &
  TabsContentComponentOwnProps
