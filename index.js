import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import Preface from './components/Preface'
import Lecture1 from './components/Lecture1'
import Lecture2 from './components/Lecture2'
import Lecture3 from './components/Lecture3'
import Lecture4 from './components/Lecture4'
import Lecture5 from './components/Lecture5'
import Lecture6 from './components/Lecture6'
import Lecture7 from './components/Lecture7'
import Footer from './components/Footer'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Preface}/>
      <Route path="/Preface" component={Preface}/>
      <Route path="/Lecture1" component={Lecture1}/>
      <Route path="/Lecture2" component={Lecture2}/>
      <Route path="/Lecture3" component={Lecture3}/>
      <Route path="/Lecture4" component={Lecture4}/>
      <Route path="/Lecture5" component={Lecture5}/>
      <Route path="/Lecture6" component={Lecture6}/>
      <Route path="/Lecture7" component={Lecture7}/>
    </Route>
  </Router>
), document.getElementById('app'))
