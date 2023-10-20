import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';

export default {
  title: 'features/editableProfileCardHeader/EditableProfileCardHeader',
  component: EditableProfileCardHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof EditableProfileCardHeader>;

const Template: ComponentStory<typeof EditableProfileCardHeader> = (args) => <EditableProfileCardHeader {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
