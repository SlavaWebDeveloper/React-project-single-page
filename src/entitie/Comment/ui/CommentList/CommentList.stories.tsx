import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { CommentList } from './CommentList';

export default {
    title: 'entitie/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'text',
            user: { id: '1', username: 'username' },
        },
        {
            id: '2',
            text: 'text 2',
            user: { id: '1', username: 'username 2' },
        },
    ],
};

export const NormalLoading = Template.bind({});
NormalLoading.args = {
    comments: [],
    isLoading: true,
};

export const Dark = Template.bind({});
Dark.args = {
    comments: [
        {
            id: '1',
            text: 'text',
            user: { id: '1', username: 'username' },
        },
        {
            id: '2',
            text: 'text 2',
            user: { id: '1', username: 'username 2' },
        },
    ],
};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const DarkLoading = Template.bind({});
DarkLoading.args = {
    comments: [],
    isLoading: true,
};
DarkLoading.decorators = [
    ThemeDecorator(Theme.DARK),
];
