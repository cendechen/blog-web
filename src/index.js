import React from 'react'
import ReactDOM from 'react-dom'
import 'rsuite/lib/styles/index.less'
import './styles/index.less'
import { RouterConfig } from './routers/index'

import reportWebVitals from './reportWebVitals'


ReactDOM.render(
  <RouterConfig />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
