import React from 'react';

import type { AppProps } from 'next/app';

import { ThemeProvider } from '../stores/theme-provider.store';
import GlobalStyles from '../styles/global';

const App: React.FC<AppProps> = ({ Component, pageProps }: any) => (
  <ThemeProvider>
    <Component {...pageProps} />
    <GlobalStyles />
  </ThemeProvider>
);

export default App;
