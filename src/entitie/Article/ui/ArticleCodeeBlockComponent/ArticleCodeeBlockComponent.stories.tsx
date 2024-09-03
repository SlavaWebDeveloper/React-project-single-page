import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleCodeeBlockComponent } from './ArticleCodeeBlockComponent';

export default {
    title: 'shared/ArticleCodeeBlockComponent',
    component: ArticleCodeeBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleCodeeBlockComponent>;

const Template: ComponentStory<typeof ArticleCodeeBlockComponent> = (args) => <ArticleCodeeBlockComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
