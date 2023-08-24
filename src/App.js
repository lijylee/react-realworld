import { Suspense } from 'react';
import './App.css';
import Layout from './components/Layout';
import RouterBeforeEach from './hoc/RouterBeforeEach';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>loading</h1>} >
        <RouterBeforeEach>
          <Layout />
        </RouterBeforeEach>
      </Suspense>
    </div>
  );
}

export default App;
