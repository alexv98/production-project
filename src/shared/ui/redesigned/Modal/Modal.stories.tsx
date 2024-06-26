import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/redesigned/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi illum laborum laudantium magni, natus quae? Animi impedit iure modi nesciunt vel voluptatum. Ad facilis hic magni nesciunt officia repellat.',
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi illum laborum laudantium magni, natus quae? Animi impedit iure modi nesciunt vel voluptatum. Ad facilis hic magni nesciunt officia repellat.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
