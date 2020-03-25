import App from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { ThemeProvider } from "styled-components";
import { CssBaseline } from "@material-ui/core";
import store from "@redux/store";
import theme from "@src/theme";

class CustomApp extends App<{ store: any }> {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  public render() {
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
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps: pageProps };
  }
}

const makeStore = () => store;

export default withRedux(makeStore)(CustomApp);
