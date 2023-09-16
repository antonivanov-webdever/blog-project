import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/contexts';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid deleniti dignissimos et, facere ipsam iusto non optio reiciendis suscipit voluptatum.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid deleniti dignissimos et, facere ipsam iusto non optio reiciendis suscipit voluptatum.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
