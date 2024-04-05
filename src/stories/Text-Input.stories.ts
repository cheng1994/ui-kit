import type { Meta, StoryObj } from '@storybook/react';

import { TextInput } from '../lib/text-input/text-input';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Text Input',
  component: TextInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
        control: 'select',
        options: ['plain', 'outlined', 'soft', 'solid']
    }
  }
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
    variant: 'plain',
    label: 'Email Address',
    placeholder: 'Enter Email Address'
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Email Address',
    placeholder: 'Enter Email Address'
  },
};

export const Soft: Story = {
  args: {
    variant: 'soft',
    label: 'Email Address',
    placeholder: 'Enter Email Address'
  },
};

export const Solid: Story = {
  args: {
    variant: 'solid',
    label: 'Email Address',
    placeholder: 'Enter Email Address'
  },
};
