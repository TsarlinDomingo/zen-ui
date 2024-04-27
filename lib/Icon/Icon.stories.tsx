import { Meta, Story } from '@storybook/react';
import { Icon, IconProps } from './Icon';

const meta: Meta = {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    name: {
      name: 'name',
      defaultValue: 'bars',
      description: 'Name of the icon',
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
          'ellipsis-h',
          'ellipsis-v',
          'print',
          'search',
          'image',
        ],
      },
    },
    size: {
      name: 'size',
      defaultValue: 'regular',
      description: 'Size of the icon',
      control: { type: 'radio', options: ['regular', 'large', 'xlarge'] },
    },
    variant: {
      name: 'variant',
      defaultValue: 'regular',
      description: 'Color of the icon',
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'tertiary',
          'destructive',
          'action',
          'success',
          'error',
          'accent',
          'accent-dark',
        ],
      },
    },
  },
};

export default meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Bars = Template.bind({});
Bars.args = { name: 'bars', size: 'regular' };
export const BarsLarge = Template.bind({});
BarsLarge.args = { name: 'bars', size: 'large' };

export const ChevronDownIcon = Template.bind({});
ChevronDownIcon.args = { name: 'chevron-down', size: 'regular' };
export const ChevronDownIconLarge = Template.bind({});
ChevronDownIconLarge.args = { name: 'chevron-down', size: 'large' };

export const ChevronLeftIcon = Template.bind({});
ChevronLeftIcon.args = { name: 'chevron-left', size: 'regular' };
export const ChevronLeftIconLarge = Template.bind({});
ChevronLeftIconLarge.args = { name: 'chevron-left', size: 'large' };

export const ChevronRightIcon = Template.bind({});
ChevronRightIcon.args = { name: 'chevron-right', size: 'regular' };
export const ChevronRightIconLarge = Template.bind({});
ChevronRightIconLarge.args = { name: 'chevron-right', size: 'large' };

export const ChevronUpIcon = Template.bind({});
ChevronUpIcon.args = { name: 'chevron-up', size: 'regular' };
export const ChevronUpIconLarge = Template.bind({});
ChevronUpIconLarge.args = { name: 'chevron-up', size: 'large' };

export const CheckIcon = Template.bind({});
CheckIcon.args = { name: 'check', size: 'regular' };
export const CheckIconLarge = Template.bind({});
CheckIconLarge.args = { name: 'check', size: 'large' };

export const CircleCheckIcon = Template.bind({});
CircleCheckIcon.args = { name: 'circle-check', size: 'regular' };
export const CircleCheckIconLarge = Template.bind({});
CircleCheckIconLarge.args = { name: 'circle-check', size: 'large' };

export const CircleMinusIcon = Template.bind({});
CircleMinusIcon.args = { name: 'circle-minus', size: 'regular' };
export const CircleMinusIconLarge = Template.bind({});
CircleMinusIconLarge.args = { name: 'circle-minus', size: 'large' };

export const CirclePlusIcon = Template.bind({});
CirclePlusIcon.args = { name: 'circle-plus', size: 'regular' };
export const CirclePlusIconLarge = Template.bind({});
CirclePlusIconLarge.args = { name: 'circle-plus', size: 'large' };

export const CircleQuestionIcon = Template.bind({});
CircleQuestionIcon.args = { name: 'circle-question', size: 'regular' };
export const CircleQuestionIconLarge = Template.bind({});
CircleQuestionIconLarge.args = { name: 'circle-question', size: 'large' };

export const CircleXmarkIcon = Template.bind({});
CircleXmarkIcon.args = { name: 'circle-xmark', size: 'regular' };
export const CircleXmarkIconLarge = Template.bind({});
CircleXmarkIconLarge.args = { name: 'circle-xmark', size: 'large' };

export const CloseIcon = Template.bind({});
CloseIcon.args = { name: 'close', size: 'regular' };
export const CloseIconLarge = Template.bind({});
CloseIconLarge.args = { name: 'close', size: 'large' };

export const DownloadIcon = Template.bind({});
DownloadIcon.args = { name: 'download', size: 'regular' };
export const DownloadIconLarge = Template.bind({});
DownloadIconLarge.args = { name: 'download', size: 'large' };

export const EllipsisH = Template.bind({});
EllipsisH.args = { name: 'ellipsis-h', size: 'regular' };
export const EllipsisHLarge = Template.bind({});
EllipsisHLarge.args = { name: 'ellipsis-h', size: 'large' };

export const EllipsisV = Template.bind({});
EllipsisV.args = { name: 'ellipsis-v', size: 'regular' };
export const EllipsisVLarge = Template.bind({});
EllipsisVLarge.args = { name: 'ellipsis-v', size: 'large' };

export const PrintIcon = Template.bind({});
PrintIcon.args = { name: 'print', size: 'regular' };
export const PrintIconLarge = Template.bind({});
PrintIconLarge.args = { name: 'print', size: 'large' };

export const SearchIcon = Template.bind({});
SearchIcon.args = { name: 'search', size: 'regular' };
export const SearchIconLarge = Template.bind({});
SearchIconLarge.args = { name: 'search', size: 'large' };

export const ImageIcon = Template.bind({});
ImageIcon.args = { name: 'image', size: 'regular' };
export const ImageIconLarge = Template.bind({});
ImageIconLarge.args = { name: 'image', size: 'large' };

export const Calendar = Template.bind({});
Calendar.args = { name: 'calendar', size: 'regular' };
export const CalendarLarge = Template.bind({});
CalendarLarge.args = { name: 'calendar', size: 'large' };

export const PlaygroundIcon = Template.bind({});
PlaygroundIcon.args = {
  name: 'search',
  size: 'regular',
};
