import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NotificationItem } from './NotificationItem';

export default {
    title: 'entitie/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;
const item = {
    id: '1',
    title: 'Уведомление',
    description: 'Поставь лайк',
};
export const Normal = Template.bind({});
Normal.args = {
    item,
};

export const Dark = Template.bind({});
Dark.args = {
    item,
};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const Link = Template.bind({});
Link.args = {
    item: {
        ...item,
        href: 'https://google.com',
    },
};
