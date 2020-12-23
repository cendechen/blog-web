import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import 'rsuite/lib/styles/index.less'
import './styles/import.less'
import { Main } from './view/main/index'

import reportWebVitals from './reportWebVitals'

const Router = () => {
  return <HashRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      {/* <Route exact path="/home"  /> */}
      {/* <Route exact path="/" /> */}
    </Switch>
  </HashRouter>
}


ReactDOM.render(
  <div className="page">
    <Router />
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
