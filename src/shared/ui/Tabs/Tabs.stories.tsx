import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Tabs } from './Tabs';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    tabs: [
        {
            value: 'tab 1',
            content: 'content 1',
        },
        {
            value: 'tab 2',
            content: 'content 2',
        },
        {
            value: 'tab 3',
            content: 'content 3',
        },
    ],
    value: 'tab 2',
    onTabClick: action('onTabClick'),
};
Normal.decorators = [
    StoreDecorator({}),
];

export const Dark = Template.bind({});
Dark.args = {
    tabs: [
        {
            value: 'tab 1',
            content: 'content 1',
        },
        {
            value: 'tab 2',
            content: 'content 2',
        },
        {
            value: 'tab 3',
            content: 'content 3',
        },
    ],
    value: 'tab 2',
    onTabClick: action('onTabClick'),
};
Dark.decorators = [
    StoreDecorator({}),
    ThemeDecorator(Theme.DARK),
];
