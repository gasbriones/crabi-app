import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import './style.scss';

type Props = {
  children: JSX.Element
};

function Layout({ children } : Props) {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
