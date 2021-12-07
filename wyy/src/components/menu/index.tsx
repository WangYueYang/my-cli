import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './index.less'


interface IProps {
  menuList: Array<{
    title: string,
    titlePath: string,
    list: { text: string, path: string }[]
  }>,
  match?: {
    path: string
  }
}


class Menu extends Component<IProps, {}> {

  // 递归导航
  menuNode = (list) => {
    let vdom = []

    if (list instanceof Array) {
      let adom = []

      list.forEach(item => {
        adom.push(this.menuNode(item))
      })

      vdom.push(
        <ul key="haha">
          {adom}
        </ul>
      )

    } else {
      vdom.push(
        <li key={list.title}>
          {list.content}
          {this.menuNode(list.subMenu)}
        </li>
      )
    }

    return vdom;
  }

  render() {
    const { props } = this

    return (
      <div className="menu">
        <div className="menu-wrapper">
          {
            props.menuList.map(e => (
              <div key={e.title}>
                <h2 className="menu-title">
                  <NavLink to={e.titlePath}>{e.title}</NavLink>
                </h2>
                {
                  e.list.map(item => (
                    <NavLink
                      key={item.text}
                      to={props.match.path + item.path}
                      className="menu-link"
                    >
                      {item.text}
                    </NavLink>
                  ))
                }
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Menu;