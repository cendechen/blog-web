import React from 'react'
import { Portrait } from './portrait'
import { Chat } from './chat'
import { Detail } from './detail'
import { Tags } from './tags'
import './index.less'

type Props = {
  tagCnt: number;
  articleCnt: number;
  tagList: string[]
}
export const Sider = (props: Props) => {

  return <div className="slider">
    <Portrait />
    <Chat />
    <Detail {...props} />
    <Tags tags={props.tagList}/>
  </div>
}
