import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quo modi, qui sunt quam tenetur, sed doloremque vitae officia corporis nihil impedit. Modi illo debitis odio magni sit dolores sunt.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quo modi, qui sunt quam tenetur, sed doloremque vitae officia corporis nihil impedit. Modi illo debitis odio magni sit dolores sunt.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
