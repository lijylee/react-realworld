import { useRoutes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import routes from './router';

function App() {
  return (
    <div className="App">
      <Layout />
      {useRoutes(routes)}
    </div>
  );
}

export default App;
