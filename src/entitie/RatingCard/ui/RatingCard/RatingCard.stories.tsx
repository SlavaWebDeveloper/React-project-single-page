import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RatingCard } from './RatingCard';

export default {
    title: 'entitie/RatingCard',
    component: RatingCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    title: 'Оцените статью',
};
Normal.decorators = [

    StoreDecorator({}),
];

export const WithFeedbackNormal = Template.bind({});
WithFeedbackNormal.args = {
    rate: 4,
};
WithFeedbackNormal.decorators = [
    StoreDecorator({}),
];

export const Dark = Template.bind({});
Dark.args = {
    title: 'Оцените статью',
};
Dark.decorators = [
    StoreDecorator({}),
    ThemeDecorator(Theme.DARK),
];

export const WithFeedbackDark = Template.bind({});
WithFeedbackDark.args = {
    rate: 4,
};
WithFeedbackDark.decorators = [
    StoreDecorator({}),
    ThemeDecorator(Theme.DARK),
];
