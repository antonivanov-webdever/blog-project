import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/contexts';
import AboutPageAsync from './AboutPage.async';

export default {
    title: 'pages/AboutPage',
    component: AboutPageAsync,
} as ComponentMeta<typeof AboutPageAsync>;

const Template:
  ComponentStory<typeof AboutPageAsync> = (args) => <AboutPageAsync {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
