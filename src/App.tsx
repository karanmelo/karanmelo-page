import React from 'react';

import Layout from './components/layouts/Layout';
import { CustomThemeProvider } from './hooks/theme';
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <CustomThemeProvider>
      <GlobalStyles />
      <Layout />
    </CustomThemeProvider>
  );
};

export default App;
