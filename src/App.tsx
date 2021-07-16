import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CharPage from './pages/CharPage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './layout/Layout';

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path='/' component={HomePage} />
          <Route path='/character/:charId' component={CharPage} />
        </Layout>
        <Route path='*'>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
