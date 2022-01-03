import React, { useEffect, useState } from 'react'
import { Sider } from './components/sider'
import './index.less'
import { RightPanel } from './components/right-panel'
import { getTagList } from '../../services/index'

export const Main = () => {
  const [tagCount, setTagCount] = useState(0)
  const [tagList, setTagList] = useState([])
  const [articleCount, ] = useState(0)

  useEffect(() => {
    getTagList().then(({ code, data }) => {
      console.log(data)
      if (code === 0) {
        setTagCount(data.count)
        setTagList(data.taglist)
      }
    })
  },[])
  return  <div className="main-center">
    <Sider tagCnt={tagCount} articleCnt={articleCount} tagList={tagList}/>
    <RightPanel />
  </div>
}
