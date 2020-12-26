import React from 'react'

export const Tags = (props) => {
  const { tags = [] } = props
  return <div className="content-box content-inner top-line">
    <div className="title-center">
      <strong>标签</strong>
    </div>
    <div className="content-inner">
      {tags.map((tag, index)=> {
        return <a className="tag-item" title="element-tag" rel={index} href={tag.id}>
          { tag.name }
        </a>
      })}
    </div>
  </div>
}
