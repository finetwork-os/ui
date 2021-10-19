import { ComponentProps, FC } from 'react'

import { Root } from '@radix-ui/react-switch'
import { StyledSwitch } from './styled'

type SwitchVariants = ComponentProps<typeof StyledSwitch>
export type SwitchComponent = FC<ComponentProps<typeof Root> & SwitchVariants>
