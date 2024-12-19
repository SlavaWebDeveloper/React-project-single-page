import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from '@/entitie/Currency';
import { Country } from '@/entitie/Country';
import avatar from '@/shared/assets/tests/storybook.jpg';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entitie/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

const data = {
    first: 'Вячеслав',
    username: 'admin',
    age: 24,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Moscow',
    avatar,
};

export const Normal = Template.bind({});
Normal.args = {
    data,
};

export const WithError = Template.bind({});
WithError.args = {
    error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

export const Dark = Template.bind({});
Dark.args = {
    data,
};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const WithErrorDark = Template.bind({});
WithErrorDark.args = {
    error: 'true',
};
WithErrorDark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const LoadingDark = Template.bind({});
LoadingDark.args = {
    isLoading: true,
};
LoadingDark.decorators = [
    ThemeDecorator(Theme.DARK),
];
