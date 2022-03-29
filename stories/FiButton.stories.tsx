import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '@finetwork/ui'
import { ButtonComponent } from '@finetwork:ui/src/components/Button/types'
import { ThemeProvider } from '@finetwork/ui'
import { Pencil2Icon } from './src/assets/Pencil2Icon'

import { theme } from './theme'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/FiButton',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<ButtonComponent>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<ButtonComponent> = (args) => (
  <ThemeProvider theme={theme}>
    <Button {...args} />
  </ThemeProvider>
)

// KIND
export const Primary = Template.bind({})
Primary.args = {
  kind: 'primary',
  children: 'Primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  kind: 'secondary',
  children: 'Secondary',
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  kind: 'tertiary',
  children: 'Tertiary',
}

// FONT
export const DeafultFont = Template.bind({})
DeafultFont.args = {
  children: 'Default (Primary)',
}

export const PrimaryFont = Template.bind({})
PrimaryFont.args = {
  font: 'primary',
  children: 'Primary',
}

export const SecondaryFont = Template.bind({})
SecondaryFont.args = {
  font: 'secondary',
  children: 'Secondary',
}

// VARIANT
export const DefaultVariant = Template.bind({})
DefaultVariant.args = {
  outline: false,
  children: 'Default',
}

export const OutlineVariant = Template.bind({})
OutlineVariant.args = {
  outline: true,
  children: 'Outline',
}

// SIZE
export const Small = Template.bind({})
Small.args = {
  size: 'small',
  children: 'Small',
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
  children: 'Medium',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  children: 'Large',
}

// SHAPES
export const DefaultShape = Template.bind({})
DefaultShape.args = {
  children: 'Default',
}

export const PillShape = Template.bind({})
PillShape.args = {
  shape: 'pill',
  children: 'Pill',
}

export const RoundShape = Template.bind({})
RoundShape.args = {
  shape: 'round',
  children: 'Round',
}

export const CircleShape = Template.bind({})
CircleShape.args = {
  shape: 'circle',
  children: 'Circle',
}

export const SquareShape = Template.bind({})
SquareShape.args = {
  shape: 'square',
  children: 'Square',
}

// IsLoading
export const Loading = Template.bind({})
Loading.args = {
  isLoading: true,
  children: 'Loading',
}

// IsSelected
export const Selected = Template.bind({})
Selected.args = {
  isSelected: true,
  children: 'Selected',
}

// Enhancer
export const StartEnhancer = Template.bind({})
StartEnhancer.args = {
  children: 'Editar',
  startEnhancer: Pencil2Icon,
}

export const EndEnhancer = Template.bind({})
EndEnhancer.args = {
  children: 'Editar',
  endEnhancer: Pencil2Icon,
}

// Overrides
export const Overrides = Template.bind({})
Overrides.args = {
  children: 'Editar',
  css: {
    backgroundColor: 'aliceblue',
    color: 'blue',
    borderColor: 'blue',
    '&:hover': {
      backgroundColor: 'aqua',
      color: 'green',
      borderColor: 'aquamarine',
    },
  },
}
