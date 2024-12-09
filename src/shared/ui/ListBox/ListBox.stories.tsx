import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const topLeftNormal = Template.bind({});
topLeftNormal.args = {
    direction: 'top left',
    value: '123',
    items: [
        { content: '123', value: '123' },
        { content: '1234567', value: '1234567' },
    ],
};
topLeftNormal.decorators = [
    StoreDecorator({}),
];

export const topRightNormal = Template.bind({});
topRightNormal.args = {
    direction: 'top right',
    value: '123',
    items: [
        { content: '123', value: '123' },
        { content: '1234567', value: '1234567' },
    ],
};
topRightNormal.decorators = [
    StoreDecorator({}),
];

export const bottomLeftNormal = Template.bind({});
bottomLeftNormal.args = {
    direction: 'bottom left',
    value: '123',
    items: [
        { content: '123', value: '123' },
        { content: '1234567', value: '1234567' },
    ],
};
bottomLeftNormal.decorators = [
    StoreDecorator({}),
];

export const bottomRightNormal = Template.bind({});
bottomRightNormal.args = {
    direction: 'bottom right',
    value: '123',
    items: [
        { content: '123', value: '123' },
        { content: '1234567', value: '1234567' },
    ],
};
bottomRightNormal.decorators = [
    StoreDecorator({}),
];

export const topLeftDark = Template.bind({});
topLeftDark.args = {
    direction: 'top left',
    value: '123',
    items: [
        { content: '123', value: '123' },
        { content: '1234567', value: '1234567' },
    ],
};
topLeftDark.decorators = [
    StoreDecorator({}),
    ThemeDecorator(Theme.DARK),

];

export const topRightDark = Template.bind({});
topRightDark.args = {
    direction: 'top right',
    value: '123',
    items: [
        { content: '123', value: '123' },
        { content: '1234567', value: '1234567' },
    ],
};
topRightDark.decorators = [
    StoreDecorator({}),
    ThemeDecorator(Theme.DARK),

];

export const bottomLeftDark = Template.bind({});
bottomLeftDark.args = {
    direction: 'bottom left',
    value: '123',
    items: [
        { content: '123', value: '123' },
        { content: '1234567', value: '1234567' },
    ],
};
bottomLeftDark.decorators = [
    StoreDecorator({}),
    ThemeDecorator(Theme.DARK),

];

export const bottomRightDark = Template.bind({});
bottomRightDark.args = {
    direction: 'bottom right',
    value: '123',
    items: [
        { content: '123', value: '123' },
        { content: '1234567', value: '1234567' },
    ],
};
bottomRightDark.decorators = [
    StoreDecorator({}),
    ThemeDecorator(Theme.DARK),

];
