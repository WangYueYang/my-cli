import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from 'pages/home'
import Myself from 'pages/myself'
import Myjs from 'pages/myJs'

import Head from 'components/head'
import Foot from 'components/foot'

import 'assets/css/index.less'

const PageRoute = () => (
  <>
    <Route path="/" exact component={Home}/>
    <Route path="/myself" component={Myself}/>
    <Route path="/js" component={Myjs} />
  </>
)

class App extends React.Component {
  render() {
    return (
      <Router>
        <Head />
        <PageRoute />
        <Foot />
      </Router>
    )
  }
}

export default App