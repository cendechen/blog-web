import React from 'react'

export const Detail = (props) => {
  const { tagCnt = 0, articleCnt = 0 } = props
  return <div className="content-box top-line">
    <div className="detail">
      <div className="detail-item right-line">
        <strong>{ articleCnt }</strong>
        <p>文章</p>
      </div>
      <div className="detail-item">
        <strong>{ tagCnt }</strong>
        <p>标签</p>
      </div>
    </div>
  </div>
}
