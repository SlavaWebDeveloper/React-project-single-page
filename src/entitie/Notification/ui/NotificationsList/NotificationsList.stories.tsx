import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { NotificationsList } from './NotificationsList';

export default {
    title: 'entitie/NotificationsList',
    component: NotificationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof NotificationsList>;

const Template: ComponentStory<typeof NotificationsList> = (args) => <NotificationsList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({}),
];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Уведомление',
                    description: 'Поставь лайк',
                },
                {
                    id: '2',
                    title: 'Уведомление',
                    description: 'Поставь лайк',
                },
                {
                    id: '3',
                    title: 'Уведомление',
                    description: 'Поставь лайк',
                },
            ],
        },
    ],
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    StoreDecorator({}),
    ThemeDecorator(Theme.DARK),
];

Dark.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Уведомление',
                    description: 'Поставь лайк',
                },
                {
                    id: '2',
                    title: 'Уведомление',
                    description: 'Поставь лайк',
                },
                {
                    id: '3',
                    title: 'Уведомление',
                    description: 'Поставь лайк',
                },
            ],
        },
    ],
};
