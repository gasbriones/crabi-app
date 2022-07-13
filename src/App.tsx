import React from 'react';
import Layout from './layout/Layout';
import Home from './pages/Home/Home';

function App(): JSX.Element {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
