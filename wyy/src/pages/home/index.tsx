import React from 'react'
import { Link } from 'react-router-dom'

import bg from "assets/img/wyy.jpg";
import './index.less'

interface IState {

}

class Home extends React.Component<{}, IState> {

  render() {
    return (
      <div className="home">
        <div className="hero clearfix">
          <div className="left">
            <img src={bg} alt="" className="home-logo"/>
          </div>
          <div className="right">
            <h1>
              王越洋 <span>的</span> <br/> JavaScript 博客
            </h1>
            <p>
              <Link to="/myself" className="my-introduce">自 我 介 绍</Link>
              <a href="https://github.com/WangYueYang" className="git-hub">GITHUB</a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home