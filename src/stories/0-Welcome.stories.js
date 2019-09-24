import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
// eslint-disable-next-line
import globalStyles from '../styles/styles.css';

export default {
  title: 'Welcome',
};

export const toStorybook = () => <Welcome showApp={linkTo('Button')} />;

toStorybook.story = {
  name: 'to Storybook',
};
