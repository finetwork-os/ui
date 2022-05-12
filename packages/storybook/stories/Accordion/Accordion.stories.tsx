import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  ThemeProvider,
} from '@finetwork/ui'
import { lightTheme } from '../theme'

export default {
  title: 'Accordion',
  component: Accordion,
  argTypes: {
    kind: {
      defaultValue: 'primary',
      control: {
        options: ['primary', 'secondary', 'tertiary'],
        type: 'radio',
      },
    },
    type: {
      defaultValue: 'multiple',
      control: {
        options: ['single', 'multiple'],
        type: 'radio',
      },
    },
  },
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = (args) => (
  <ThemeProvider theme={lightTheme}>
    <Accordion type="multiple">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARAI design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it unstyled?</AccordionTrigger>
        <AccordionContent>
          Yes. It's unstyled by default, giving you freedom over the look and
          feel. Yes. It's unstyled by default, giving you freedom over the look
          and feel. Yes. It's unstyled by default, giving you freedom over the
          look and feel. Yes. It's unstyled by default, giving you freedom over
          the look and feel. Yes. It's unstyled by default, giving you freedom
          over the look and feel.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can it be animated?</AccordionTrigger>
        <AccordionContent>
          Yes! You can animate the Accordion with CSS or JavaScript.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </ThemeProvider>
)

export const Playground = Template.bind({})
