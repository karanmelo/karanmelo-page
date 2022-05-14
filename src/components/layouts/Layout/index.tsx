import React from 'react';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import { Container } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};

export default Layout;
