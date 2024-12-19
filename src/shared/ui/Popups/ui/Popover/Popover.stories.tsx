import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button } from '../../../Button/Button';
import { Popover } from './Popover';

export default {
    title: 'shared/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const bottomLeftNormal = Template.bind({});
bottomLeftNormal.args = {
    direction: 'bottom left',
    trigger: <Button>Open</Button>,
    children: [
        <div key="1">First</div>,
        <div key="2">Second</div>,
        <div key="3">Third</div>,
    ],
};
bottomLeftNormal.decorators = [
    StoreDecorator({}),
];

export const bottomRightNormal = Template.bind({});
bottomRightNormal.args = {
    direction: 'bottom right',
    trigger: <Button>Open</Button>,
    children: [
        <div key="1">First</div>,
        <div key="2">Second</div>,
        <div key="3">Third</div>,
    ],
};
bottomRightNormal.decorators = [
    StoreDecorator({}),
];

export const topLeftNormal = Template.bind({});
topLeftNormal.args = {
    direction: 'top left',
    trigger: <Button>Open</Button>,
    children: [
        <div key="1">First</div>,
        <div key="2">Second</div>,
        <div key="3">Third</div>,
    ],
};
topLeftNormal.decorators = [
    StoreDecorator({}),
];

export const topRightNormal = Template.bind({});
topRightNormal.args = {
    direction: 'top right',
    trigger: <Button>Open</Button>,
    children: [
        <div key="1">First</div>,
        <div key="2">Second</div>,
        <div key="3">Third</div>,
    ],
};
topRightNormal.decorators = [
    StoreDecorator({}),
];

export const bottomLeftDark = Template.bind({});
bottomLeftDark.args = {
    direction: 'bottom left',
    trigger: <Button>Open</Button>,
    children: [
        <div key="1">First</div>,
        <div key="2">Second</div>,
        <div key="3">Third</div>,
    ],
};
bottomLeftDark.decorators = [
    StoreDecorator({}),
    ThemeDecorator(Theme.DARK),
];

export const bottomRightDark = Template.bind({});
bottomRightDark.args = {
    direction: 'bottom right',
    trigger: <Button>Open</Button>,
    children: [
        <div key="1">First</div>,
        <div key="2">Second</div>,
        <div key="3">Third</div>,
    ],
};
bottomRightDark.decorators = [
    StoreDecorator({}),
    ThemeDecorator(Theme.DARK),
];

export const topLeftDark = Template.bind({});
topLeftDark.args = {
    direction: 'top left',
    trigger: <Button>Open</Button>,
    children: [
        <div key="1">First</div>,
        <div key="2">Second</div>,
        <div key="3">Third</div>,
    ],
};
topLeftDark.decorators = [
    StoreDecorator({}),
    ThemeDecorator(Theme.DARK),
];

export const topRightDark = Template.bind({});
topRightDark.args = {
    direction: 'top right',
    trigger: <Button>Open</Button>,
    children: [
        <div key="1">First</div>,
        <div key="2">Second</div>,
        <div key="3">Third</div>,
    ],
};
topRightDark.decorators = [
    StoreDecorator({}),
    ThemeDecorator(Theme.DARK),
];
