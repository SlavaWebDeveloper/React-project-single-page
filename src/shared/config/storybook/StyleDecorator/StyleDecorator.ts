// eslint-disable-next-line slava-plugin/layer-imports
import '@/app/styles/index.scss';
import { Story } from '@storybook/react';

export const StyleDecorator = (story: ()=> Story) => story();
