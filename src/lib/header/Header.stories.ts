import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';


const meta = {
  title: 'Example/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
    docs: {
      source: {type: 'code'}
    }
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
    children: {
      logo: 'Logo',
      nav: `<div>Test</div>`
    }
  },
};

export const LoggedOut: Story = {
  args: {
    children: {
      logo: 'Logo',
      nav: `<div>Test</div>`
    }
  },
};
