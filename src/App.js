import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import routes from './router';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>loading</h1>} >
        <Layout />
      </Suspense>
      {useRoutes(routes)}
    </div>
  );
}

export default App;
