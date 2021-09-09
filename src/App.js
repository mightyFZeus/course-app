import "./App.css";

import Helmet from 'react-helmet'


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Home from "./Components/Home";
export default function App() {
  return (
   
    <Router>
    <div className="App">
    <Helmet><title>Sign App</title></Helmet>
      <Switch>
        <Route  path='/home'>
         <Home />
        </Route>
        <Route exact path='/' component={SignIn} />
        <Route path='/signup' component={SignUp} />
      
       
      </Switch>

   </div>
    </Router>
  );
}
