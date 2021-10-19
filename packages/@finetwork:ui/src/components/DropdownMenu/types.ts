import { ComponentProps, FC } from 'react'

import { Root } from '@radix-ui/react-dropdown-menu'
import { StyledContent } from './styled'

type DropdownMenuContentProps = ComponentProps<typeof StyledContent> & {
  withArrow?: boolean
}
type DropdownMenuProps = ComponentProps<typeof Root>

export type DropdownMenuContentComponent = FC<DropdownMenuContentProps>
export type DropdownMenuComponent = FC<DropdownMenuProps>
