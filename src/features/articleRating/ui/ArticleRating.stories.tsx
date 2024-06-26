import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlags/FeatureFlagsDecorator';

export default {
  title: 'features/ArticleRating',
  component: ArticleRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
  decorators: [
    StoreDecorator({
      user: {
        authData: { id: '1' },
      },
    }),
  ],
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => (
  <ArticleRating {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  articleId: '1',
};
Normal.decorators = [
  StoreDecorator({
    user: {
      authData: { id: '1' },
    },
  }),
];
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=1&articleId=1`,
      method: 'GET',
      status: 200,
      response: [
        {
          rate: 2,
        },
      ],
    },
  ],
};

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = {
  articleId: '1',
};
NormalRedesigned.decorators = [
  StoreDecorator({
    user: {
      authData: { id: '1' },
    },
  }),
  FeatureFlagsDecorator({ isAppRedesigned: true }),
];
NormalRedesigned.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=1&articleId=1`,
      method: 'GET',
      status: 200,
      response: [
        {
          rate: 2,
        },
      ],
    },
  ],
};

export const WithoutRate = Template.bind({});
WithoutRate.args = {
  articleId: '1',
};
WithoutRate.decorators = [
  StoreDecorator({
    user: {
      authData: { id: '1' },
    },
  }),
];
WithoutRate.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=1&articleId=1`,
      method: 'GET',
      status: 200,
      response: [],
    },
  ],
};
