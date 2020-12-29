import React from 'react'

export const Detail = (props) => {
  const { tagCnt = 0, articleCnt = 0 } = props
  return <div className="border-t-2 border-solid border-gray-100">
    <div className="flex">
      <div className="py-2 text-center flex-1 border-r-2 border-solid border-gray-100">
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
