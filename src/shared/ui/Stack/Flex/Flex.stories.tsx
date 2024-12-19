import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
    children: (
        <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
        </>
    ),
};
Row.decorators = [
    StoreDecorator({}),
];

export const RowGap4 = Template.bind({});
RowGap4.args = {
    gap: '4',
    children: (
        <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
        </>
    ),
};
RowGap4.decorators = [
    StoreDecorator({}),
];

export const RowGap8 = Template.bind({});
RowGap8.args = {
    gap: '8',
    children: (
        <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
        </>
    ),
};
RowGap8.decorators = [
    StoreDecorator({}),
];

export const RowGap16 = Template.bind({});
RowGap16.args = {
    gap: '16',
    children: (
        <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
        </>
    ),
};
RowGap16.decorators = [
    StoreDecorator({}),
];

export const RowGap32 = Template.bind({});
RowGap32.args = {
    gap: '32',
    children: (
        <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
        </>
    ),
};
RowGap32.decorators = [
    StoreDecorator({}),
];

export const RowJustifyStart = Template.bind({});
RowJustifyStart.args = {
    justify: 'start',
    children: (
        <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
        </>
    ),
};
RowJustifyStart.decorators = [
    StoreDecorator({}),
];

export const RowJustifyCenter = Template.bind({});
RowJustifyCenter.args = {
    justify: 'center',
    children: (
        <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
        </>
    ),
};
RowJustifyCenter.decorators = [
    StoreDecorator({}),
];

export const RowJustifyEnd = Template.bind({});
RowJustifyEnd.args = {
    justify: 'end',
    children: (
        <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
        </>
    ),
};
RowJustifyEnd.decorators = [
    StoreDecorator({}),
];

export const RowJustifyBetween = Template.bind({});
RowJustifyBetween.args = {
    justify: 'between',
    children: (
        <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
        </>
    ),
};
RowJustifyBetween.decorators = [
    StoreDecorator({}),
];

export const Column = Template.bind({});
Column.args = {
    direction: 'column',
    children: (
        <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
        </>
    ),
};
Column.decorators = [
    StoreDecorator({}),
];

export const ColumnGap4 = Template.bind({});
ColumnGap4.args = {
    gap: '4',
    direction: 'column',
    children: (
        <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
        </>
    ),
};
ColumnGap4.decorators = [
    StoreDecorator({}),
];

export const ColumnGap8 = Template.bind({});
ColumnGap8.args = {
    gap: '8',
    direction: 'column',
    children: (
        <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
        </>
    ),
};
ColumnGap8.decorators = [
    StoreDecorator({}),
];

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
    gap: '16',
    direction: 'column',
    children: (
        <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
        </>
    ),
};
ColumnGap16.decorators = [
    StoreDecorator({}),
];

export const ColumnGap32 = Template.bind({});
ColumnGap32.args = {
    gap: '32',
    direction: 'column',
    children: (
        <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
        </>
    ),
};
ColumnGap32.decorators = [
    StoreDecorator({}),
];

export const ColumnAlignStart = Template.bind({});
ColumnAlignStart.args = {
    direction: 'column',
    align: 'start',
    children: (
        <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
        </>
    ),
};
ColumnAlignStart.decorators = [
    StoreDecorator({}),
];

export const ColumnAlignCenter = Template.bind({});
ColumnAlignCenter.args = {
    direction: 'column',
    align: 'center',
    children: (
        <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
        </>
    ),
};
ColumnAlignCenter.decorators = [
    StoreDecorator({}),
];

export const ColumnAlignEnd = Template.bind({});
ColumnAlignEnd.args = {
    direction: 'column',
    align: 'end',
    children: (
        <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
        </>
    ),
};
ColumnAlignEnd.decorators = [
    StoreDecorator({}),
];
