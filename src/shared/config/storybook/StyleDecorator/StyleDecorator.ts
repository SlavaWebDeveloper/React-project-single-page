import { Story } from '@storybook/react';
import '@/app/styles/index.scss';
import React from 'react';

export const StyleDecorator = (story: ()=> Story) => story();
