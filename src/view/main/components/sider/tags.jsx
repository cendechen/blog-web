import React from 'react'

export const Tags = (props) => {
  const { tags = [] } = props
  return <div className="cate-tags">
    <div className="text-center py-2">
      <strong>标签</strong>
    </div>
    <div className="cate-tags-con">
      {tags.map((tag, index)=> {
        return <a
          className="tag-item"
          title="element-tag"
          rel={index}
          key={index}
          href={"/"}
        >
          { tag.name }
        </a>
      })}
    </div>
  </div>
}
