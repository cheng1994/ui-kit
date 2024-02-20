import { Meta, StoryObj } from "@storybook/react";
import { Card } from "../lib/card/Card";

const meta = {
    title: 'Components/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    render: (args: any) => (<Card {...args}>
        <div className="pb-4 text-lg font-bold">Luffy</div>
        <div>Monkey D. Luffy, also known as "Straw Hat Luffy" and commonly as "Straw Hat", is the founder and captain of the increasingly infamous and powerful Straw Hat Pirates, as well as the most powerful of its top fighters.
            He desires to find the legendary treasure left behind by the late Gol D. Roger and thereby become the Pirate King, which would help facilitate an unknown dream of his that he has told only to Shanks, his brothers, and crew.
            He believes that being the Pirate King means having the most freedom in the world.
        </div>
    </Card>)
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Small: Story = {
    args: {
        size: 'sm',
        width: 'sm'
    },
}

export const Medium: Story = {
    args: {
        size: 'md',
        width: 'md'
    }
}

export const Large: Story = {
    args: {
        size: 'lg',
        width: 'lg'
    }
}

export const NoPadding: Story = {
    args: {
        noPadding: true
    }
}