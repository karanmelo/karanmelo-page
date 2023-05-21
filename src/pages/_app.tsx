import React from 'react';

import { Layout } from '../components/layouts/Layout';
import { ThemeProvider } from '../stores/theme-provider.store';
import GlobalStyles from '../styles/global';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  );
};

export default App;
