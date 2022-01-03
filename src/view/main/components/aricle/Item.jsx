import React from 'react'
import './item.less'
import { Tag } from './tags'
import { useHistory } from 'react-router-dom'

export const Item = (props) => {

  const { title, post_time, tags, id} = props
  const history = useHistory()

  const handleClick = () => {
    history.push(`/article/${id}`)
  }

  return <div className="aritcle-item" onClick={handleClick}>
    <div className="publish-time">
      <span className="time-label">发布时间:</span><time> {post_time} </time>
    </div>
    <div className="title">
      { title }
    </div>
    <div className="tags-container">
      {tags.split(',').map(_ => <Tag key={_}>{_}</Tag>)}
    </div>
    <div className="author">
      cendechen
    </div>
  </div>
}
