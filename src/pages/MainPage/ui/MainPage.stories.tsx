import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/contexts';
import MainPageAsync from './MainPage.async';

export default {
    title: 'pages/MainPage',
    component: MainPageAsync,
} as ComponentMeta<typeof MainPageAsync>;

const Template:
  ComponentStory<typeof MainPageAsync> = (args) => <MainPageAsync {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
