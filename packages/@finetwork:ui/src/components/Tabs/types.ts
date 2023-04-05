import { ComponentProps, ReactNode } from 'react'
import { StyledTabs } from './styled'

export type TabsComponentOwnProps = {
  id?: string
  defaultValue: string
  type?: 'standard' | 'success' | 'warning' | 'error' | 'disabled'
  borderRadius?: string
  direction?: 'horizontal' | 'vertical'
  width?: string
  height?: string
}
export type TabsProps = ComponentProps<typeof StyledTabs> &
  TabsComponentOwnProps

export type TabsListComponentOwnProps = {
  direction?: 'horizontal' | 'vertical'
  type?: 'standard' | 'success' | 'warning' | 'error' | 'disabled'
  justifyContent?: 'start' | 'center' | 'end' | 'space-around' | 'space-between'
  borderBottomColor?: string
  gap?: string
  width?: string
  selectedValue?: string
  handleChange?: React.Dispatch<
    React.SetStateAction<string | (readonly string[] & string)>
  >
}
export type TabsListProps = ComponentProps<typeof StyledTabs> &
  TabsListComponentOwnProps

export type TabsTriggerComponentOwnProps = {
  value: string
  type?: 'standard' | 'success' | 'warning' | 'error' | 'disabled'
  textColor?: string
  textSize?: string
  bold?: boolean
  disabled?: boolean
  width?: string
  selectedValue?: string
  handleChange?: React.Dispatch<
    React.SetStateAction<string | (readonly string[] & string)>
  >
  startEnhancer?: ReactNode | string
  endEnhancer?: ReactNode | string
}
export type TabsTriggerProps = ComponentProps<typeof StyledTabs> &
  TabsTriggerComponentOwnProps

export type TabsContentComponentOwnProps = {
  value: string
  selectedValue?: string
}
export type TabsContentProps = ComponentProps<typeof StyledTabs> &
  TabsContentComponentOwnProps
