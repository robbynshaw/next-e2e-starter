import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { ThemeProvider } from 'emotion-theming';
import { CssBaseline } from '@material-ui/core';
import store, { AppStore } from '@redux/store';
import theme from '@src/theme';

class CustomApp extends App<{ store: AppStore }> {
  public render(): JSX.Element {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }

  public static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
  }
}

const makeStore = (): AppStore => store;

export default withRedux(makeStore)(CustomApp);
