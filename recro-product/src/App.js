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

const mfes = [
  {
   name: '@recro/home',
   mfePath: ['/home'],
   props: {prop1:'home'}
  },
]
const register = ({name, mfePath, props})=>registerApplication(
  name,
  ()=> window.System.import(name),
  (location)=> mfePath.includes(location.pathname),
  {
    props
  }
)
function App() {
  useEffect(()=>{
      mfes.forEach(mfe=> {
        register(mfe)
        start()
      })
      return ()=>{
        mfes.forEach(mfe=>unregisterApplication(mfe.name))
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
