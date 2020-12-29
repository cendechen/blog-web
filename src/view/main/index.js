import React from 'react'
import { Sider } from './components/sider'
import { AricleList } from './components/aricle'
import './index.less'

export const Main = () => {
  return  <div className="flex mx-auto container py-4">
    <Sider />
    <AricleList />
  </div>
}
