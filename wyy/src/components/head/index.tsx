import React from 'react'
import { Link } from 'react-router-dom'
import { NAV_TEXT } from 'assets/text/head'

import './index.less'

interface IState {
  nav: Array<{}>
}


class Head extends React.Component<{}, IState> {

  public state = {
    nav: NAV_TEXT
  }

  render() {
    const { state } = this
    return (
      <div className="header">
        <Link to="/" className="logo">Wang Yue Yang</Link>
        <ul className="header-nav">
          <li>
            <input type="text" className="search-inp" />
          </li>
          {
            state.nav.map((item, i) => {
              return (
                <li className="nav-item" key={i}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default Head