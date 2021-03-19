import React from 'react';
import '../styles/globals.css';
import { Provider } from 'react-redux';
import { useStore } from '../redux/store';

import Layout from '../components/Layout';
import Header from '../components/Header';

function MyApp({ Component, pageProps }): React.ReactElement {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Layout header={<Header />}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
