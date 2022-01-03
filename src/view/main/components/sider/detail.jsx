import React from 'react'

export const Detail = (props) => {
  const { tagCnt = 0, articleCnt = 0 } = props
  return <div className="sumary">
    <div className="flex">
      <div className="py-2 text-center flex-1">
        <strong>{ articleCnt }</strong>
        <p>文章</p>
      </div>
      <div className="py-2 text-center flex-1">
        <strong>{ tagCnt }</strong>
        <p>标签</p>
      </div>
    </div>
  </div>
}
