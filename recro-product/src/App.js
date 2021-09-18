import logo from './logo.svg';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {registerApplication, start, unregisterApplication} from 'single-spa';
import './App.css';
import LandingPage from './landingPage';
import { useEffect } from 'react';
import Catalogue from './catalogue';

/*
registerApplication(
    appName,
    () => window.System.import(appName),// container name,
    (location) => mfePaths.some(mfePath=> location.pathname.includes(mfePath)) , where to render
    {
      // initial props to main Components
      props
    }
  )
*/


function App() {
  useEffect(()=>{
    registerApplication(
      '@recro/home', 
      ()=> window.System.import('@recro/home'), 
      (location)=> {
        console.log(location.pathname)
        return location.pathname === '/home'
      },
      {
        name: 'recro'
      })
      start()
      return ()=>{
        unregisterApplication('@recro/home')
      }
  }, [])
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/home" component={()=> <div id="single-spa-application:@recro/home" />} exact />
        <Route path="/catalogue" component={Catalogue} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
