import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AppButton } from './AppButton';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator';
import { Theme } from '../../contexts';

export default {
    title: 'shared/AppButton',
    component: AppButton,
} as ComponentMeta<typeof AppButton>;

const Template: ComponentStory<typeof AppButton> = (args) => <AppButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    variant: 'clear',
};

export const ClearDark = Template.bind({});
ClearDark.args = {
    children: 'Text',
    variant: 'clear',
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    variant: 'outline',
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    variant: 'outline',
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineL = Template.bind({});
OutlineL.args = {
    children: 'Text',
    variant: 'outline',
    size: 'L',
};

export const OutlineLDark = Template.bind({});
OutlineLDark.args = {
    children: 'Text',
    variant: 'outline',
    size: 'L',
};
OutlineLDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineXL = Template.bind({});
OutlineXL.args = {
    children: 'Text',
    variant: 'outline',
    size: 'XL',
};

export const OutlineXLDark = Template.bind({});
OutlineXLDark.args = {
    children: 'Text',
    variant: 'outline',
    size: 'XL',
};
OutlineXLDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Fill = Template.bind({});
Fill.args = {
    children: 'Text',
    variant: 'fill',
};

export const FillDark = Template.bind({});
FillDark.args = {
    children: 'Text',
    variant: 'fill',
};
FillDark.decorators = [ThemeDecorator(Theme.DARK)];

export const FillL = Template.bind({});
FillL.args = {
    children: 'Text',
    variant: 'fill',
    size: 'L',
};

export const FillLDark = Template.bind({});
FillLDark.args = {
    children: 'Text',
    variant: 'fill',
    size: 'L',
};
FillLDark.decorators = [ThemeDecorator(Theme.DARK)];

export const FillXL = Template.bind({});
FillXL.args = {
    children: 'Text',
    variant: 'fill',
    size: 'XL',
};

export const FillXLDark = Template.bind({});
FillXLDark.args = {
    children: 'Text',
    variant: 'fill',
    size: 'XL',
};
FillXLDark.decorators = [ThemeDecorator(Theme.DARK)];
