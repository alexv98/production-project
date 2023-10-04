import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleEditPage } from './ArticleEditPage';

export default {
  title: 'slice/ArticleEditPage',
  component: ArticleEditPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => <ArticleEditPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
