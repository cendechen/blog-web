import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { createHashHistory } from 'history'
import { Header }from '../components/headers/index'
import { Footer } from '../components/footers/index'
import { Main } from '../view/main/index'

const history = createHashHistory()

export const RouterConfig = () => {
  return <HashRouter history={history}>
    <Header />
    <Switch>
      <Route exact path="/" component={Main} />
      {/* <Route exact path="/home"  /> */}
      {/* <Route exact path="/" /> */}
    </Switch>
    <Footer />
  </HashRouter>
}
