import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { CssBaseline } from '@material-ui/core';
import theme from '../src/theme';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {story()}
  </ThemeProvider>
));

addDecorator(withKnobs);
