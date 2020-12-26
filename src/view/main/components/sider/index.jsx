import React from 'react'
import { Portrait } from './portrait'
import { Chat } from './chat'
import { Detail } from './detail'
import { Tags } from './tags'
import { Cate } from './cate'
import { Archives } from './archives'

import './index.less'

export const Sider = () => {
  const cate = [{
    name: '文章',
    cnt: 1
  }, {
    name: '文章',
    cnt: 1
  }]
  return <div className="sider">
    <Portrait />
    <Chat />
    <Detail />
    <Tags tags={[{ name: 'zadasd'}]}/>
    <Cate data={cate}/>
    <Archives data={cate} />
  </div>
}
