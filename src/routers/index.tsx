import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header }from '../components/headers/index'
import { Footer } from '../components/footers/index'
import { Main } from '../view/main/index'
import { Article } from '../view/article/index'

export const Routers = () => {
  return <div className={"container"}>
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/demo" component={Main} />
      <Route exact path="/article/:id" component={Article} />
    </Switch>
    <Footer />
  </Router>
  </div>
}
