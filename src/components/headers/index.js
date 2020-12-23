import React from 'react'
import classname from 'classnames'
import { Logo } from './Logo'
import { Nav } from 'rsuite'
import './main.less'

const { Item } = Nav
export const Header = () => {
  const topclass = classname([
    "nav",
    {
      "theme-night" : true
    }
  ])

  return <header className="top">
    <div className="top-container">
      <nav className={topclass}>
        {/* logo */}
        <div className="nav-left">
          <Logo>cendechen</Logo>
        </div>
        <div className="nav-search"></div>
        {/* 搜索框 */}
        <div className="nav-right">
          <Nav>
            <Item>首页</Item>
            <Item>关于</Item>
            <Item>标签</Item>
            <Item>分类</Item>
            <Item>归档</Item>
            <Item>搜素</Item>
          </Nav>
        </div>
        {/* pc导航 */}
        {/* mobile 导航 */}
      </nav>
    </div>
  </header>
}
