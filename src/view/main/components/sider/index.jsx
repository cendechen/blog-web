import React from 'react'
import { Portrait } from './portrait'
import { Chat } from './chat'
import { Detail } from './detail'
import { Tags } from './tags'

import './index.less'

export const Sider = () => {
  return <div className="sider">
    <Portrait />
    <Chat />
    <Detail />
    <Tags tags={[{ name: 'zadasd'}]}/>
  </div>
}
