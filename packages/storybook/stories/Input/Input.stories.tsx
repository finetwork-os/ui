import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Input, ThemeProvider } from '@finetwork/ui'
import { lightTheme } from '../theme'

export default {
  title: 'Input',
  component: Input,
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
    isDisabled: {
      defaultValue: false,
      control: 'boolean',
    },
    success: {
      defaultValue: false,
      control: 'boolean',
    },
    error: {
      defaultValue: undefined,
      control: 'text',
    },
    label: {
      defaultValue: 'Label',
      control: 'text',
    },
    info: {
      defaultValue: undefined,
      control: 'text',
    },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => (
  <ThemeProvider theme={lightTheme}>
    <Input {...args} />
  </ThemeProvider>
)

export const Playground = Template.bind({})
