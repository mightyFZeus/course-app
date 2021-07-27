import "./App.css";
import Header from './Components/Header/Header'
import Language from './Components/Language/Language'
import Helmet from 'react-helmet'
import ReactReview from './Components/Reviews/ReactReview'
import CssReview from './Components/Reviews/CssReview'
import HtmlReview from './Components/Reviews/HtmlReview'
import JavaReview from './Components/Reviews/JavaReview'
import JsReview from './Components/Reviews/JsReview'
import CplusReview from './Components/Reviews/CplusReview'
import PhpReview from './Components/Reviews/PhpReview'
import PythonReview from './Components/Reviews/PythonReview'
import TypescriptReview from './Components/Reviews/TypescriptReview'

import AngularReview from './Components/Reviews/AngularReview'

import {BrowserRouter as Router, Route} from 'react-router-dom'
export default function App() {
  return (
   
    <Router>
    <div className="App">
      
      <Route exact path='/'>
        <Helmet><title>Course App</title></Helmet>
        <Header />
      <Language />
      </Route>
      <Route path='/react-review' component={ReactReview} />
      <Route path='/py-review' component={PythonReview} />
      <Route path='/css-review' component={CssReview} />
      <Route path='/html-review' component={HtmlReview} />
      <Route path='/php-review' component={PhpReview} />
      <Route path='/ts-review' component={TypescriptReview} />
      <Route path='/js-review' component={JsReview} />
      <Route path='/java-review' component={JavaReview} />
      <Route path='/ag-review' component={AngularReview} />
      <Route path='/c++-review' component={CplusReview} />

   </div>
    </Router>
  );
}
