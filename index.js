import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import Preface from './modules/preface'
import Lecture1 from './modules/lecture1'
import Lecture2 from './modules/lecture2'
import Lecture3 from './modules/lecture3'
import Lecture4 from './modules/lecture4'
import Lecture5 from './modules/lecture5'
import Lecture6 from './modules/lecture6'
import Lecture7 from './modules/lecture7'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Preface}/>
      <Route path="/preface" component={Preface}/>
      <Route path="/lecture1" component={Lecture1}/>
      <Route path="/lecture2" component={Lecture2}/>
      <Route path="/lecture3" component={Lecture3}/>
      <Route path="/lecture4" component={Lecture4}/>
      <Route path="/lecture5" component={Lecture5}/>
      <Route path="/lecture6" component={Lecture6}/>
      <Route path="/lecture7" component={Lecture7}/>
    </Route>
  </Router>
), document.getElementById('app'))
