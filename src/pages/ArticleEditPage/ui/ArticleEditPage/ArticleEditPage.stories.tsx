import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ArticleEditPage } from './ArticleEditPage';

export default {
    title: 'shared/ArticleEditPage',
    component: ArticleEditPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => <ArticleEditPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({}),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    StoreDecorator({}),
    ThemeDecorator(Theme.DARK),
];
