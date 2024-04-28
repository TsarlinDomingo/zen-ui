import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Box, BoxProps } from './Box'

const meta: Meta = {
  title: 'Atoms/Box',
  component: Box,
  argTypes: {
    cy: {
      name: 'cy',
      description: 'Sets the data-cy id used in Cypress testing',
      control: {
        type: 'text',
      },
    },
    children: {
      name: 'children',
      defaultValue: 'Tag',
      description: 'Collection of child elements of the component',
      control: {
        type: 'text',
      },
    },
    elevation: {
      name: 'elevation',
      defaultValue: 'none',
      description: 'Sets the type of box shadow on the container',
      control: {
        type: 'select',
        options: ['none', 'regular', 'large'],
      },
    },
    type: {
      name: 'type',
      defaultValue: 'neutral',
      description: 'Sets the type of the container',
      control: {
        type: 'select',
        options: ['neutral', 'accent', 'action', 'transparent'],
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Simple container used in `Card` component.',
      },
    },
  },
}

export default meta

const Template: Story<BoxProps> = (args) => <Box {...args}>Hello world</Box>

export const NeutralNone = Template.bind({})
NeutralNone.args = { elevation: 'none', type: 'neutral' }

export const NeutralRegular = Template.bind({})
NeutralRegular.args = { elevation: 'regular', type: 'neutral' }

export const NeutralLarge = Template.bind({})
NeutralLarge.args = { elevation: 'large', type: 'neutral' }

export const AccentNone = Template.bind({})
AccentNone.args = { elevation: 'none', type: 'accent' }

export const AccentRegular = Template.bind({})
AccentRegular.args = { elevation: 'regular', type: 'accent' }

export const AccentLarge = Template.bind({})
AccentLarge.args = { elevation: 'large', type: 'accent' }

export const ActionNone = Template.bind({})
ActionNone.args = { elevation: 'none', type: 'action' }

export const ActionRegular = Template.bind({})
ActionRegular.args = { elevation: 'regular', type: 'action' }

export const ActionLarge = Template.bind({})
ActionLarge.args = { elevation: 'large', type: 'action' }

export const TransparentNone = Template.bind({})
TransparentNone.args = { elevation: 'none', type: 'transparent' }

export const TransparentRegular = Template.bind({})
TransparentRegular.args = { elevation: 'regular', type: 'transparent' }

export const TransparentLarge = Template.bind({})
TransparentLarge.args = { elevation: 'large', type: 'transparent' }

export const PlaygroundBox = Template.bind({})
PlaygroundBox.args = { elevation: 'none', type: 'neutral' }
