import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Admin from './Admin';
import Videos from './pages/videos/Videos';
import Orders from './pages/order/Orders';
import Test from './pages/test/Test';
import EditTest from './components/editTest/EditTest';
import CreateNewVideo from './components/createNewVideo/CreateNewVideo';
import Progressbar from './components/testFilter/Progressbar';
import TestSectionTest from './components/testSection/TestSection';
// import TestSection from './components/testSection/testsection';

function App(){
  return(
    <div classname="app">
    <Router>
      <Switch>
        <Route path="/login">
          <Login />  
        </Route>
        <Route path="/videos">
          <Videos />  
        </Route>
        <Route path="/orders">
          <Orders />  
        </Route>
        <Route path="/test">
          <Test />  
        </Route>
        <Route path="/filter">
          <Progressbar />  
        </Route>
        <Route path="/testsection">
          <TestSectionTest />
        </Route>
        <Route path="/edit">
          <EditTest/>
        </Route>
        <Route path='/'>
          <Admin />  
        </Route>
      </Switch>
    </Router>
    </div>

  );
}

export default App;


