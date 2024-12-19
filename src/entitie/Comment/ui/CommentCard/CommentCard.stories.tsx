import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { CommentCard } from './CommentCard';

export default {
    title: 'entitie/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comment: {
        id: '1',
        text: 'text',
        user: { id: '1', username: 'username' },
    },
};

export const NormalLoading = Template.bind({});
NormalLoading.args = {
    comment: {
        id: '1',
        text: 'text',
        user: { id: '1', username: 'username' },
    },
    isLoading: true,
};

export const Dark = Template.bind({});
Dark.args = {
    comment: {
        id: '1',
        text: 'text',
        user: { id: '1', username: 'username' },
    },
};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const DarkLoading = Template.bind({});
DarkLoading.args = {
    comment: {
        id: '1',
        text: 'text',
        user: { id: '1', username: 'username' },
    },
    isLoading: true,
};
DarkLoading.decorators = [
    ThemeDecorator(Theme.DARK),
];
