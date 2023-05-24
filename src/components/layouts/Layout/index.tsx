import React from 'react';

import { Footer } from './Footer';
import { Head } from './Head';
import { Header } from './Header';
import { Main } from './Main';

export const Layout: React.FC = () => (
  <>
    <Head />
    <Header />
    <Main />
    <Footer />
  </>
);
