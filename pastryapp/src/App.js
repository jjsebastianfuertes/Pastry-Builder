import React from 'react';
import Layout from './containers/Layout/Layout';
import PastryBuilder from './containers/PastryBuilder/PastryBuilder';

function App() {
  return (
    <div>
      <Layout>
        <PastryBuilder />
      </Layout>
    </div>
  );
}

export default App;
