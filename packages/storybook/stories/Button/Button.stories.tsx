import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button, ThemeProvider } from '@finetwork/ui'
import { lightTheme } from '../theme'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    kind: {
      defaultValue: 'primary',
      control: {
        options: ['primary', 'secondary', 'tertiary'],
        type: 'radio',
      },
    },
    size: {
      defaultValue: 'medium',
      control: {
        options: ['small', 'medium', 'large'],
        type: 'radio',
      },
    },
    shape: {
      defaultValue: 'default',
      control: {
        options: ['default', 'pill', 'round', 'circle', 'square'],
        type: 'radio',
      },
    },
    outline: {
      defaultValue: false,
      control: 'boolean',
    },
    isSelected: {
      defaultValue: false,
      control: 'boolean',
    },
    isLoading: {
      defaultValue: false,
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <ThemeProvider theme={lightTheme}>
    <Button {...args} />
  </ThemeProvider>
)

export const Playground = Template.bind({})
Playground.args = {
  children: 'Button',
}
