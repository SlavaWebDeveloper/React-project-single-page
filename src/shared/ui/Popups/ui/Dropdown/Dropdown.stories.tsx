import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Dropdown } from './Dropdown';
import { Button } from '../../../Button/Button';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const bottomLeftNormal = Template.bind({});
bottomLeftNormal.args = {
    direction: 'bottom left',
    trigger: <Button>Open</Button>,
    items: [
        { content: 'First' },
        { content: 'Second' },
        { content: 'Third' },
    ],
};
bottomLeftNormal.decorators = [
    StoreDecorator({}),
];

export const bottomRightNormal = Template.bind({});
bottomRightNormal.args = {
    direction: 'bottom right',
    trigger: <Button>Open</Button>,
    items: [
        { content: 'First' },
        { content: 'Second' },
        { content: 'Third' },
    ],
};
bottomRightNormal.decorators = [
    StoreDecorator({}),
];

export const topLeftNormal = Template.bind({});
topLeftNormal.args = {
    direction: 'top left',
    trigger: <Button>Open</Button>,
    items: [
        { content: 'First' },
        { content: 'Second' },
        { content: 'Third' },
    ],
};
topLeftNormal.decorators = [
    StoreDecorator({}),
];

export const topRightNormal = Template.bind({});
topRightNormal.args = {
    direction: 'top right',
    trigger: <Button>Open</Button>,
    items: [
        { content: 'First' },
        { content: 'Second' },
        { content: 'Third' },
    ],
};
topRightNormal.decorators = [
    StoreDecorator({}),
];

export const bottomLeftDark = Template.bind({});
bottomLeftDark.args = {
    direction: 'bottom left',
    trigger: <Button>Open</Button>,
    items: [
        { content: 'First' },
        { content: 'Second' },
        { content: 'Third' },
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
    items: [
        { content: 'First' },
        { content: 'Second' },
        { content: 'Third' },
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
    items: [
        { content: 'First' },
        { content: 'Second' },
        { content: 'Third' },
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
    items: [
        { content: 'First' },
        { content: 'Second' },
        { content: 'Third' },
    ],
};
topRightDark.decorators = [
    StoreDecorator({}),
    ThemeDecorator(Theme.DARK),
];
