import React from 'react'
import { Sider } from './components/sider'
import { AricleList } from './components/aricle'
import './index.less'
import { useObervableApi } from '../../services'

export const Main = () => {
  const data = useObervableApi({
    url: '/api/getList'
  })
  console.log(data)
  return  <div className="flex mx-auto container py-4">
    <Sider />
    <AricleList />
  </div>
}
