import React from 'react'
import { Header } from '../../components/headers/index'
import { Sider } from './components/sider'

export const Main = () => {
  return  <div className="">
    {/* 菜单 */}
    <Header />
    {/* 主题部分 */}
    <div className="container">
      <Sider />
    </div>
    {/* 尾部 */}
  </div>
}
