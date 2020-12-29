import React from 'react'

export const Tags = (props) => {
  const { tags = [] } = props
  return <div className="border-t-2 border-solid border-gray-100">
    <div className="text-center py-2">
      <strong>标签</strong>
    </div>
    <div className="py-4">
      {tags.map((tag, index)=> {
        return <a className="tag-item" title="element-tag" rel={index} href={tag.id}>
          { tag.name }
        </a>
      })}
    </div>
  </div>
}
