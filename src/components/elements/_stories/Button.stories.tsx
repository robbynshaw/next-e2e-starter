import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '@elements/Button';

export default {
  title: 'Elements/Button',
  component: Button,
};

export const Primary = () => (
  <Button variant="primary" onClick={action('clicked')}>
    Hello Button
  </Button>
);

export const Secondary = () => (
  <Button variant="secondary" onClick={action('clicked')}>
    Hello Button
  </Button>
);

export const Outlined = () => (
  <Button variant="outline" onClick={action('clicked')}>
    Hello Button
  </Button>
);
