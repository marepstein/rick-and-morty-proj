import '../styles/globals.css';
import AppContainer from 'src/components/_shared/Layout/styles';
import { AppProps } from 'next/app';

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return <AppContainer><Component {...pageProps} /></AppContainer>
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// CustomApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default CustomApp;
