import logo from './logo.svg';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import LandingPage from './landingPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LandingPage} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
