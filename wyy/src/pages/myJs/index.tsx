import React, { Component } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

import Menu from 'components/menu'

import Hello from 'assets/md/Hello.md'

interface IProps {
}

interface IMenu {
  title: string,
  titlePath: string,
  list: { text: string, path: string }[]
}

const mockMenu: Array<IMenu> = [
  {
    title: 'JavaScript',
    titlePath: '/js',
    list: [
      {
        text: '文章一',
        path: '/Hello'
      },
      {
        text: '文章二',
        path: '/js2'
      },
      {
        text: '文章三',
        path: '/js3'
      },
      {
        text: '文章4',
        path: '/js4'
      }
    ]
  },
]

const doc = {
  Hello
}

class Myjs extends Component<IProps> {
  render() {
    const { props } = this
    return (
      <div className="content-body">
        <Menu {...props} menuList={mockMenu} />
        <div className="blog-view">
          <Switch>

            {
              Object.keys(doc).map(item => (
                <Route path={`/js/${item}`} key={item} render={() => (
                  <div dangerouslySetInnerHTML={{ __html: doc[item] }}></div>
                )} />
              ))
            }

            <Redirect to='/js' />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Myjs;