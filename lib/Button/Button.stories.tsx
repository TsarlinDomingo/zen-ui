import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const meta: Meta = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    cy: {
      name: 'cy',
      description: 'Sets the data-cy id used in Cypress testing',
      control: {
        type: 'text',
      },
      table: { category: 'Custom Props' },
    },
    disabled: {
      name: 'disabled',
      defaultValue: false,
      description: 'Whether the button is disabled or not',
      control: {
        type: 'boolean',
      },
      table: {
        category: 'HTML Props',
      },
    },
    onClick: {
      name: 'onClick',
      description: 'Event handler of the button',
      control: {
        disable: true,
      },
      table: {
        category: 'HTML Props',
      },
    },
    padding: {
      name: 'padding',
      description: 'Whether or not the button should have padding',
      defaultValue: true,
      control: {
        type: 'boolean',
      },
      table: {
        category: 'Custom Props',
      },
    },
    size: {
      name: 'size',
      defaultValue: 'regular',
      description: 'Sets the size of the button box including padding and border',
      control: {
        type: 'radio',
        options: ['regular', 'large'],
      },
      table: {
        category: 'Custom Props',
      },
    },
    text: {
      name: 'text',
      defaultValue: '',
      description: 'Sets the text displayed in the button.',
      control: 'text',
      table: { category: 'Custom Props' },
    },
    type: {
      name: 'type',
      description: 'Type of button',
      defaultValue: 'button',
      control: {
        type: 'select',
        options: ['submit', 'reset', 'button'],
      },
      table: {
        category: 'HTML Props',
      },
    },
    variant: {
      name: 'variant',
      description: 'Style of button',
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary', 'destructive'],
      },
      table: { category: 'Custom Props' },
    },
    ref: {
      name: 'ref',
      defaultValue: undefined,
      description: 'Reference of button instance',
      control: { disable: true },
      table: { category: 'HTML Props' },
    },
    icon: {
      name: 'icon',
      defaultValue: undefined,
      description: 'Icon name to display before `text` prop.',
      control: {
        type: 'select',
        options: [
          'bars',
          'chevron-down',
          'chevron-left',
          'chevron-right',
          'chevron-up',
          'circle-check',
          'circle-minus',
          'circle-plus',
          'circle-question',
          'circle-xmark',
          'close',
          'download',
          'print',
          'search',
          'image',
        ],
      },
      table: { category: 'Custom Props' },
    },
    tabIndex: {
      name: 'tabIndex',
      defaultValue: undefined,
      description: 'Sets the tab index of the button',
      control: {
        type: 'text',
      },
      table: {
        category: 'HTML Props',
      },
    },
    width: {
      name: 'width',
      description:
        'Sets the width of the button to be always 100% `full` or adjust to the content `auto`. Default behavior is handled with `regular`.',
      defaultValue: 'regular',
      control: {
        type: 'select',
        options: ['regular', 'full', 'auto'],
      },
      table: { category: 'Custom Props' },
    },
  },
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
    docs: {
      description: {
        component: 'Main button component',
      },
    },
  },
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const RegularPrimary = Template.bind({});
RegularPrimary.args = { text: 'primary', variant: 'primary', size: 'regular' };

export const RegularPrimaryWithIcon = Template.bind({});
RegularPrimaryWithIcon.args = {
  text: 'primary',
  variant: 'primary',
  icon: 'download',
};

export const RegularSecondary = Template.bind({});
RegularSecondary.args = {
  text: 'secondary',
  variant: 'secondary',
  size: 'regular',
};

export const RegularSecondaryWithIcon = Template.bind({});
RegularSecondaryWithIcon.args = {
  text: 'secondary',
  variant: 'secondary',
  icon: 'download',
};

export const RegularTertiary = Template.bind({});
RegularTertiary.args = {
  text: 'tertiary',
  variant: 'tertiary',
  size: 'regular',
};

export const RegularTertiaryWithIcon = Template.bind({});
RegularTertiaryWithIcon.args = {
  text: 'tertiary',
  variant: 'tertiary',
  icon: 'download',
};

export const RegularDestructive = Template.bind({});
RegularDestructive.args = {
  text: 'destructive',
  variant: 'destructive',
  size: 'regular',
};

export const RegularDestructiveWithIcon = Template.bind({});
RegularDestructiveWithIcon.args = {
  text: 'destructive',
  variant: 'destructive',
  icon: 'download',
};

export const LargePrimary = Template.bind({});
LargePrimary.args = { text: 'primary', variant: 'primary', size: 'large' };

export const LargePrimaryWithIcon = Template.bind({});
LargePrimaryWithIcon.args = {
  text: 'primary',
  variant: 'primary',
  icon: 'download',
  size: 'large',
};

export const LargeSecondary = Template.bind({});
LargeSecondary.args = {
  text: 'secondary',
  variant: 'secondary',
  size: 'large',
};

export const LargeSecondaryWithIcon = Template.bind({});
LargeSecondaryWithIcon.args = {
  text: 'secondary',
  variant: 'primary',
  icon: 'download',
  size: 'large',
};

export const RegularButton = Template.bind({});
RegularButton.args = {
  text: 'regular',
  width: 'regular',
};
RegularButton.parameters = {
  docs: {
    description: {
      story: 'Button that will render `auto` on large and medium screens and `full` on small screens.',
    },
  },
};

export const FullButton = Template.bind({});
FullButton.args = {
  text: 'full',
  width: 'full',
};
FullButton.parameters = {
  docs: {
    description: {
      story: 'Button that will always render fill its parent container.',
    },
  },
};

export const AutoButton = Template.bind({});
AutoButton.args = {
  text: 'auto',
  width: 'auto',
};
AutoButton.parameters = {
  docs: {
    description: {
      story: 'Button that will always adapt its width to the content.',
    },
  },
};

export const LongTextButton = Template.bind({});
LongTextButton.args = {
  text: 'Reaaaaaaaaaaaaaaaaaaaaaaally looooooooooong text',
  variant: 'secondary',
};
LongTextButton.parameters = {
  docs: {
    description: {
      story: 'Button displaying a really long text.',
    },
  },
  viewport: {
    defaultViewport: 'nexus6p',
  },
};

export const PlaygroundButton = Template.bind({});
PlaygroundButton.args = {
  disabled: false,
  size: 'regular',
  text: 'Change my props',
  variant: 'primary',
};

const TabTemplate: Story<ButtonProps> = (args) => {
  return (
    <div>
      <Button
        {...args}
        text="tabIndex = 1"
        tabIndex={1}
      />
      <Button
        {...args}
        text="tabIndex = -1"
        tabIndex={-1}
      />
      <Button
        {...args}
        text="tabIndex = 3"
        tabIndex={3}
      />
      <Button
        {...args}
        text="tabIndex = -1"
        tabIndex={-1}
      />
      <Button
        {...args}
        text="tabIndex = 2"
        tabIndex={2}
      />
      <Button
        {...args}
        text="tabIndex = 4"
        tabIndex={4}
      />
    </div>
  );
};

export const TabIndex = TabTemplate.bind({});

const SmallContainerTemplate: Story<ButtonProps> = (args) => {
  return (
    <div className="w-1/5 bg-red-1">
      <Button
        {...args}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <br />
      <Button
        {...args}
        text="Small button"
      />
      <br />
      <Button
        {...args}
        text="Small button"
      />
      <br />
      <Button
        {...args}
        text="Small button"
      />
      <br />
      <Button
        {...args}
        text="Small button"
      />
      <br />
      <Button
        {...args}
        text="Small button"
      />
      <br />
      <Button
        {...args}
        text="Small button"
      />
      <br />
      <Button
        {...args}
        text="Small button"
      />
    </div>
  );
};

export const BigButtonSmallContainer = SmallContainerTemplate.bind({});
