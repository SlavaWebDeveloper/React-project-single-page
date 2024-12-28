import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StarRating } from './StarRating';

export default {
    title: 'shared/StarRating',
    component: StarRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => <StarRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    size: 40,
    selectedStars: 0,
    onSelect: (starsCount) => console.log(`Selected: ${starsCount} stars`),
};
Normal.decorators = [
    StoreDecorator({}),
];

export const Selected = Template.bind({});
Selected.args = {
    size: 40,
    selectedStars: 3,
    onSelect: (starsCount) => console.log(`Selected: ${starsCount} stars`),
};
Selected.decorators = [
    StoreDecorator({}),
];

export const Dark = Template.bind({});
Dark.args = {
    size: 40,
    selectedStars: 0,
    onSelect: (starsCount) => console.log(`Selected: ${starsCount} stars`),
};
Dark.decorators = [
    StoreDecorator({}),
    ThemeDecorator(Theme.DARK),
];

export const Small = Template.bind({});
Small.args = {
    size: 20,
    selectedStars: 0,
    onSelect: (starsCount) => console.log(`Selected: ${starsCount} stars`),
};
Small.decorators = [
    StoreDecorator({}),
];
